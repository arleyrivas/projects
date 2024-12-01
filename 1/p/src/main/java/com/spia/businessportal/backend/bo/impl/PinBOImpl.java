/**
 * 
 */
package com.spia.businessportal.backend.bo.impl;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Locale;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import com.spia.businessportal.common.entities.dto.autentication.ldap.UsuarioLoginDTO;

import com.spia.businessportal.backend.bo.PinBO;
import com.spia.businessportal.backend.bo.UserBO;
import com.spia.businessportal.common.entities.Pin;
import com.spia.businessportal.common.entities.PinBreakBulk;
import com.spia.businessportal.common.entities.PinContainerized;
import com.spia.businessportal.common.entities.TruckingCompany;
import com.spia.businessportal.common.entities.User;
import com.spia.businessportal.common.entities.dto.PinDTO;
import com.spia.businessportal.common.entities.dto.UnitTruckDTO;
import com.spia.businessportal.common.filters.PinFilter;
import com.spia.businessportal.common.utils.DateUtil;

import ar.com.fluxit.framework.business.generic.GenericService;
import ar.com.fluxit.framework.business.generic.impl.GenericServiceImpl;
import ar.com.fluxit.framework.common.exception.BusinessException;
import ar.com.fluxit.framework.common.filter.Page;

/**
 * @author diego
 *
 *         Implementación de la interfaz PinBO
 */
public class PinBOImpl extends GenericServiceImpl<Pin> implements PinBO {

	private static final Log LOG = LogFactory.getLog(PinBOImpl.class);

	@Autowired
	private UserBO userBO;

	@Autowired
	private GenericService<TruckingCompany> truckingCompanyBO;

	@Autowired
	private SessionFactory sessionFactory;

	/**
	 * 
	 */
	public PinBOImpl() {
		super();
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see
	 * com.spia.businessPortal.backend.bo.PinBO#generate(com.spia.businessPortal.
	 * common.entities.dto.PinDTO)
	 */
	@Override
	public List<Pin> generate(PinDTO pinDTO, UsuarioLoginDTO currentUser) throws BusinessException, ParseException {
		List<Pin> pins = new ArrayList<Pin>();
		// UnitsTrucks -> lista que contiene unitNbr-truckId-truckName para generar pins
		for (UnitTruckDTO unitTruck : pinDTO.getUnitsTrucks()) {
			Pin pin = truckingCompanyPin(pins, unitTruck.getTruckId());
			if (pin.getPinNbr() == null) {
				pin.setConsignee(pinDTO.getConsignee());
				pin.setCreatedByLDAP(currentUser.getUserName());
				pin.setCreatedByCompanyLDAP(currentUser.getEmpresa().getId());
				pin.setIsGroup(pinDTO.getIsGroup());
				pin.setFrghtKind(pinDTO.getFrghtKind());
				if ("".equals(pin.getTruckingCompanyNameLDAP()) || pin.getTruckingCompanyNameLDAP() == null) {
					pin.setTruckingCompanyNameLDAP(unitTruck.getTruckName());
				}
				// Si no es Unit la generación es a partir de un BL o BKG
				if (!pinDTO.getIsUnit()) {
					if (pinDTO.getIsBooking()) {
						pin.setBkgNbr(pinDTO.getNbr());
					} else {
						if (pinDTO.getIsEdo()) {
							pin.setEdoNbr(pinDTO.getNbr());
						} else if (pinDTO.getIsEro()) {
							pin.setEroNbr(pinDTO.getNbr());
						} else {
							pin.setBlNbr(pinDTO.getNbr());
						}
					}
				}
				boolean unique = false;
				PinFilter pinFilter = new PinFilter();
				pinFilter.setActive(true);
				while (!unique) {
					pin.generate(unitTruck.getNbr());
					pinFilter.setPinNbr(pin.getPinNbr());
					int exististPin = this.getDao().search(pinFilter, new Page(1, 0)).getTotalResults();
					unique = exististPin == 0;
					if (!unique) {
						String dateformat = DateUtil.getCurrentDateyyyMMddHHmmssSSS();
						Date createdDate=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss:SSS").parse(dateformat);  
						pin.setCreatedAt(createdDate);
					}

				}

			}

			pin.setTruckingCompanyLDAP(unitTruck.getTruckId());
			PinContainerized pinContainerized = new PinContainerized();
			pinContainerized.setActive(true);
			pinContainerized.setDeleted(false);
			pinContainerized.setTwenty(unitTruck.isTwenty());
			pinContainerized.setIsoType(unitTruck.getIsoType());
			pinContainerized.setPin(pin);
			pinContainerized.setUnitNbr(unitTruck.getNbr());
			pinContainerized.setTruckingCompanyLDAP(unitTruck.getTruckId());
			pinContainerized.setTruckingCompanyNameLDAP(unitTruck.getTruckName());
			pinContainerized.setCargoQuantity(unitTruck.getCargoQuantity());
			pinContainerized.setCargoWeigth(unitTruck.getCargoWeigth());
			pinContainerized.setDestination(unitTruck.getDestination());
			pinContainerized.setTruckVisitAppointmetId(unitTruck.getTruckVisitAppointmetId());
			if (pinDTO.getIsBooking()) { pinContainerized.setTypePin(1L); }
			pin.getPinContainerized().add(pinContainerized);
		}
		for (Pin p : pins) {
			this.saveNew(p);
		}
		return pins;
	}

	private Pin truckingCompanyPin(List<Pin> pins, String n4UserId) throws BusinessException {
		Pin pin = new Pin();
		boolean found = false;
		for (Pin p : pins) {
			if (p.getPinContainerized() != null && !p.getPinContainerized().isEmpty()) {
				for (PinContainerized pc : p.getPinContainerized()) {
					if (n4UserId.equals(pc.getTruckingCompanyLDAP())) {
						pin = p;
						found = true;
					}
				}
			}
			if (p.getPinBreakBulk() != null && !p.getPinBreakBulk().isEmpty()) {
				for (PinBreakBulk pbb : p.getPinBreakBulk()) {
					if (n4UserId.equals(pbb.getTruckingCompanyLDAP())) {
						pin = p;
						found = true;
					}
				}
			}
		}
		if (!found) {
			pins.add(pin);
		}
		return pin;
	}

	@Override
	public List<Pin> filterPin(boolean filterByConsignee, boolean filterByType, boolean filterByState, UsuarioLoginDTO currentUser,
			List<String> units, boolean expo, boolean impo, boolean edo, boolean breakbulk, boolean active,
			Date fromDate, Date toDate, String bl) throws BusinessException {
		Session session = sessionFactory.openSession();
		List<Pin> pins = null;
		try {
			String queryString = "FROM Pin as activePin JOIN FETCH activePin.truckingCompany JOIN FETCH activePin.createdBy ";
			String joinClause = "LEFT OUTER ";
			String breakBulkJoin = " JOIN FETCH activePin.pinBreakBulk ";
			String where = "WHERE activePin.createdBy = :createdBy ";
			String orderBy = "ORDER BY activePin.createdAt desc ";
			// Filtro por estado
			if (filterByState) {
				String clauseIn = "";
				if (active) {
					// Si busco los activos, debo filtrar por todos los pins que NO estén contenidos
					// en la consulta que retorna los completamente desactivados.
					clauseIn = "NOT IN";
				} else {
					// Si busco los inactivos, debo filtrar por todos los pins que SI estén
					// contenidos en la consulta que retorna los completamente desactivados.
					clauseIn = "IN";
				}
				where = where + "AND activePin.pinNbr " + clauseIn + " (" + "Select p.pinNbr " + "from Pin as p "
						+ "group by p.pinNbr, p.active " + "having p.active = false and count(*) = ("
						+ "select count(*) " + "from Pin " + "where pinNbr = p.pinNbr " + "group by pinNbr)) ";
			}

			// Filtro por consignee
			if (filterByConsignee) {
				where = where + "AND activePin.pinNbr in (:units) ";
			}

			// filtro por tipo
			if (filterByType) {
				if (expo) {
					where = where + " AND activePin.bkgNbr is not null ";
				}
				if (impo) {
					where = where + " AND activePin.edoNbr is null and activePin.bkgNbr is null ";
				}
				if (edo) {
					where = where + " AND activePin.edoNbr is not null ";
				}
				if (breakbulk) {
					joinClause = " INNER ";
				}
			}

			// Filtro por fecha desde y/o hasta
			if (fromDate != null) {
				where = where + " AND activePin.createdAt >= :fromDate ";
			}
			if (toDate != null) {
				where = where + " AND activePin.createdAt <= :toDate ";
			}

			// Filtro por BL
			if (bl != null) {
				where = where + " AND activePin.blNbr = :bl ";
			}

			if (!breakbulk) {
				joinClause = "";
				breakBulkJoin = "";
				where += " AND activePin.pinBreakBulk IS EMPTY ";
			}
			queryString = queryString + joinClause + breakBulkJoin + where + orderBy;
			Query query = session.createQuery(queryString);
			query.setString("createdByLDAP", currentUser.getUserName());
			if (units != null) {
				if (!units.isEmpty()) {
					query.setParameterList("units", units);
				} else {
					query.setParameter("units", "''");
				}

			}
			if (fromDate != null) {
				query.setDate("fromDate", fromDate);
			}
			if (toDate != null) {
				query.setDate("toDate", toDate);
			}
			if (bl != null) {
				query.setString("bl", bl);
			}
			pins = query.list();
		} catch (Exception e) {
			LOG.error("Se produjo un error al recuperar los pins", e);
		} finally {
			session.close();
		}
		return pins;
	}

	@Override
	public void cancelPinForUnits(List<String> unitsNbr) throws BusinessException {
		Session session = sessionFactory.openSession();
		Transaction tx = session.beginTransaction();
		try {
			Query query = session.createQuery("update Pin set active = false where unitNbr in (:unitNbrs)");
			query.setParameterList("unitNbrs", unitsNbr);
			query.executeUpdate();
		} catch (Exception e) {
			LOG.error("Se produjo un error al cancelar el pin", e);
		} finally {
			if (!tx.wasCommitted()) {
				tx.commit();
			}
			session.close();
		}

	}

	public UserBO getUserBO() {
		return userBO;
	}

	public void setUserBO(UserBO userBO) {
		this.userBO = userBO;
	}

	public GenericService<TruckingCompany> getTruckingCompanyBO() {
		return truckingCompanyBO;
	}

	public void setTruckingCompanyBO(GenericService<TruckingCompany> truckingCompanyBO) {
		this.truckingCompanyBO = truckingCompanyBO;
	}
	
}
