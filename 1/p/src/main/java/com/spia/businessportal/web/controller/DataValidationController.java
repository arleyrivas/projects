/*
 * Fluxit S.A
 * La Plata - Buenos Aires - Argentina
 * http://www.fluxit.com.ar
 * Author: leandro
 * Date:  4 de dic. de 2015 - 11:19:23 a. m.
 */
package com.spia.businessportal.web.controller;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.Locale;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.spia.businessportal.common.entities.Pin;
import com.spia.businessportal.common.entities.PinContainerized;
import com.spia.businessportal.common.entities.TruckVisit;
import com.spia.businessportal.common.entities.User;
import com.spia.businessportal.common.entities.dto.UnitValidationDTO;
import com.spia.businessportal.common.entities.errorHandling.ResponseError;
import com.spia.businessportal.common.filters.PinFilter;
import com.spia.businessportal.common.filters.TruckVisitFilter;
import com.spia.businessportal.common.utils.EmptyUtils;
import com.spia.businessportal.common.utils.EncoderDecoder;
import com.spia.businessportal.constant.DateFormatConstant;
import com.spia.services.entities.BillOfLading;
import com.spia.services.entities.Booking;
import com.spia.services.entities.Category;
import com.spia.services.entities.ChargeableUnitEvents;
import com.spia.services.entities.Edo;
import com.spia.services.entities.EqOrderItems.Item;
import com.spia.services.entities.EquipmentType;
import com.spia.services.entities.Ero;
import com.spia.services.entities.Hold;
import com.spia.services.entities.HoldItem;
import com.spia.services.entities.Holds;
import com.spia.services.entities.HoldsList;
import com.spia.services.entities.Unit;
import com.spia.services.entities.UnitFacilityVisit;
import com.spia.services.entities.UnitStorageAndReeferDaysResponse;
import com.spia.services.entities.billing.Customer;
import com.spia.services.entities.billing.UnitsValidationResponse;
import com.spia.services.entities.billing.UnitsValidationResponse.UnitValidationResponseElement;
import com.spia.services.entities.navis.ShipperInfo;
import com.spia.services.exception.BOException;
import com.spia.services.util.Constants;
import com.spia.businessportal.common.entities.dto.autentication.ldap.UsuarioLoginDTO;

import ar.com.fluxit.framework.common.exception.BusinessException;
import ar.com.fluxit.framework.common.filter.Page;

/**
 * @author leandro
 *
 *         Controlador que retorna todas las validaciones de negocio para los
 *         units.
 */
@RequestMapping("/api/validate")
@Controller
public class DataValidationController extends AbstractController {

	private static final Log LOG = LogFactory.getLog(DataValidationController.class);
	// private static final String ERROR_VALIDATION = "Se produjo un error al
	// validar el unit";
	@Value("#{holds['pago.port']}")
	private String hold;
	@Value("#{edi['bookingNbr']}")
	private String ediBookingNbr;
	private String roleAgent = "Agent";
	private String roleTruck = "Trucking Company";
	private String roleShipperConsignee = "Shipper/Consignee";

	/**
	 * Retorna una lista de objetos con todas las validaciones para los unit del
	 * booking
	 * 
	 * Get /validate/booking/{bkgNbr}/{line}
	 * 
	 * @param bkgNbr: número de booking
	 * @param line:   linea operadora
	 * @return {@link com.spia.businessportal.common.entities.dto.UnitValidationDTO}
	 * @throws BusinessException cuando ocurre un fallo en servicio del mdw.
	 * @throws BOException
	 */
	@RequestMapping(value = "/booking/{bkgNbr:.+}", method = RequestMethod.GET)
	public @ResponseBody List<UnitValidationDTO> validateBooking(@PathVariable String bkgNbr) throws BOException {
		LOG.info("Inicio de la llamada a las validaciones de booking desde el portal.");

		Booking booking = this.getBookingMdwBo().get(EncoderDecoder.decodeBase64(bkgNbr), null, null,
				this.getUserBO().getCurrentUser().getEmpresa().getId(), Constants.Billing.ROLES.get(roleAgent));
		List<UnitValidationDTO> unitValidationList = new ArrayList<UnitValidationDTO>();
		try {
			if (booking != null && booking.getUnits() != null && !booking.getUnits().isEmpty()) {
				String unitsList = "";
				Customer customer = this.getCustomerMdwBO().getByIdAndRole(booking.getShipperId(),
						Constants.Billing.ROLES.get(roleShipperConsignee));
				Customer currentN4User = this.getCustomerMdwBO().getByIdAndRole(
						this.getUserBO().getCurrentUser().getEmpresa().getId(), Constants.Billing.ROLES.get(roleAgent));

				for (UnitFacilityVisit ufv : booking.getUnits()) {
					unitsList += ufv.getId() + ",";
					UnitValidationDTO unitValidationDTO = this.getUnitValidationDTO(ufv, null, null, booking.getNbr(),
							customer, currentN4User);
					unitValidationList.add(unitValidationDTO);
				}
				// Agrego la validación de hasDebts.
				unitsList = unitsList.substring(0, unitsList.length() - 1);
				UnitsValidationResponse unitsValidationList = this.getInvoiceMdwBO().unistHasDebts(unitsList,
						booking.getCarrierVisit(), null);
				for (UnitValidationDTO u : unitValidationList) {
					for (UnitValidationResponseElement ure : unitsValidationList.getUnits()) {
						if (u.getUnitNbr().equals(ure.getUnit())) {
							u.setHasDebt(ure.getStatus());
						}
					}
				}

			}
		} catch (Exception e) {
			String[] strParams = {};
			String msg = getProperty("Controller.DataValidationError", strParams, getApplicationContext());
			LOG.error(msg, e);
		}
		LOG.info("Fin de la llamada a las validaciones de booking desde el portal.");
		return unitValidationList;
	}

	/**
	 * Retorna una lista de objetos con todas las validaciones para los unit del
	 * booking del trucking company
	 * 
	 * Get /validate/booking/trucking-company/{bkgNbr}/{line}
	 * 
	 * @param bkgNbr: número de booking
	 * @param line:   linea operadora
	 * @return {@link com.spia.businessportal.common.entities.dto.UnitValidationDTO}
	 * @throws BusinessException cuando ocurre un fallo en servicio del mdw.
	 * @throws BOException
	 */
	@RequestMapping(value = "/booking/trucking-company/{bkgNbr:.+}", method = RequestMethod.GET)
	public @ResponseBody List<UnitValidationDTO> validateTruckingCompanyBooking(@PathVariable String bkgNbr)
			throws BOException {
		LOG.info("Inicio de la llamada a las validaciones de booking desde el portal.");

		Booking booking = this.getBookingMdwBo().get(EncoderDecoder.decodeBase64(bkgNbr), null, null,
				this.getUserBO().getCurrentUser().getEmpresa().getId(), Constants.Billing.ROLES.get(roleTruck));
		List<UnitValidationDTO> unitValidationList = new ArrayList<UnitValidationDTO>();
		String truckingCompany = this.getUserBO().getCurrentUser().getEmpresa().getId();
		try {
			if (booking != null && booking.getUnits() != null && !booking.getUnits().isEmpty()) {
				String unitsList = "";
				Customer customer = null;
				if (booking.getShipperId() != null) {
					customer = this.getCustomerMdwBO().getByIdAndRole(booking.getShipperId(),
							Constants.Billing.ROLES.get(roleShipperConsignee));
				}
				Customer currentN4User = this.getCustomerMdwBO().getByIdAndRole(
						this.getUserBO().getCurrentUser().getEmpresa().getId(), Constants.Billing.ROLES.get(roleTruck));
				for (UnitFacilityVisit ufv : booking.getUnits()) {
					// Carrier debe comenzar con DUMMY (ediBookingNbr)
					if ((booking.getCarrierVisit() != null && booking.getCarrierVisit().startsWith(ediBookingNbr))
							|| (ufv.getTruckingCompany() != null
									&& truckingCompany.toLowerCase().equals(ufv.getTruckingCompany().toLowerCase()))) {
						unitsList += ufv.getId() + ",";
						UnitValidationDTO unitValidationDTO = this.getUnitValidationDTO(ufv, null, null,
								booking.getNbr(), customer, currentN4User);
						unitValidationList.add(unitValidationDTO);
					}
				}
				// Agrego la validación de hasDebts.
				unitsList = unitsList.substring(0, unitsList.length() - 1);
				UnitsValidationResponse unitsValidationList = this.getInvoiceMdwBO().unistHasDebts(unitsList,
						booking.getCarrierVisit(), null);
				for (UnitValidationDTO u : unitValidationList) {
					for (UnitValidationResponseElement ure : unitsValidationList.getUnits()) {
						if (u.getUnitNbr().equals(ure.getUnit())) {
							u.setHasDebt(ure.getStatus());
						}
					}
				}
			}
		} catch (Exception e) {
			String[] strParams = {};
			String msg = getProperty("Controller.DataValidationError", strParams, getApplicationContext());
			LOG.error(msg, e);
		}
		LOG.info("Fin de la llamada a las validaciones de booking desde el portal.");
		return unitValidationList;
	}

	/**
	 * Retorna una lista de objetos con todas las validaciones para los unit del bl
	 * 
	 * Get /validate/bl/{blNbr}
	 * 
	 * @param blNbr numero de BL
	 * @return {@link com.spia.businessportal.common.entities.dto.UnitValidationDTO}
	 * @throws BusinessException cuando ocurre un fallo en servicio del mdw.
	 */
	@RequestMapping(value = "/bl/{blNbr:.+}", method = RequestMethod.GET)
	public @ResponseBody ResponseEntity<?> validateBl(@PathVariable String blNbr) throws BusinessException {

		ResponseEntity<?> re = null;
		BillOfLading bl = this.getBillOfLadingMdwBo().get(blNbr);
		List<UnitValidationDTO> unitValidationList = new ArrayList<UnitValidationDTO>();
		try {
			if (bl != null && bl.getUnits() != null && !bl.getUnits().isEmpty()) {
				String unitsList = "";
				Customer customer = null;
				if (bl.getConsigneeId() != null) {
					customer = this.getCustomerMdwBO().getByIdAndRole(bl.getConsigneeId(),
							Constants.Billing.ROLES.get(roleShipperConsignee));
				}
				Customer currentN4User = this.getCustomerMdwBO().getByIdAndRole(
						this.getUserBO().getCurrentUser().getEmpresa().getId(), Constants.Billing.ROLES.get(roleAgent));
				for (UnitFacilityVisit ufv : bl.getUnits()) {
					unitsList += ufv.getId() + ",";
					UnitValidationDTO unitValidationDTO = this.getUnitValidationDTO(ufv, null, null, null, customer,
							currentN4User);
					unitValidationList.add(unitValidationDTO);
				}

				// Agrego la validación de hasDebts.
				unitsList = unitsList.substring(0, unitsList.length() - 1);
				UnitsValidationResponse unitsValidationList = this.getInvoiceMdwBO().unistHasDebts(unitsList, null,
						bl.getCarrierVisit());
				for (UnitValidationDTO u : unitValidationList) {
					for (UnitValidationResponseElement ure : unitsValidationList.getUnits()) {
						if (u.getUnitNbr().equals(ure.getUnit())) {
							u.setHasDebt(ure.getStatus());
						}
					}
				}
			}
			re = new ResponseEntity<List<UnitValidationDTO>>(unitValidationList, HttpStatus.OK);
		} catch (Exception e) {
			String[] strParams = {};
			String msg = getProperty("Controller.DataValidationError", strParams, getApplicationContext());
			LOG.error(String.valueOf(DataValidationController.class));
			LOG.error(msg, e);
			ResponseError responseError = new ResponseError();
			responseError.setError(e.getMessage());
			responseError.setMessage(e.getMessage());
			re = new ResponseEntity<ResponseError>(responseError, HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return re;
	}

	/**
	 * Retorna una lista de objetos con todas las validaciones para los unit del edo
	 * 
	 * GET api/validate/edo/{edoNbr}
	 * 
	 * @param edoNbr: número de edo
	 * @return {@link com.spia.businessportal.common.entities.dto.UnitValidationDTO}
	 * @throws BusinessException cuando ocurre un fallo en servicio del mdw.
	 */
	@RequestMapping(value = "/edo/{edoNbr}", method = RequestMethod.GET)
	public @ResponseBody List<UnitValidationDTO> validateEdo(@PathVariable String edoNbr) throws BusinessException {
		Edo edo = null;
		UsuarioLoginDTO currentUser = this.getUserBO().getCurrentUser();
		if (this.getUserBO().hasPermission(User.COMPANY_TYPE_AGENT)) {
			edo = this.getEdoMdwBo().getByAgent(edoNbr, currentUser.getEmpresa().getId());
		}
		if (this.getUserBO().hasPermission(User.COMPANY_TYPE_TRUCK)) {
			edo = this.getEdoMdwBo().getByTruckingCompany(edoNbr, currentUser.getEmpresa().getId());
		}
		List<UnitValidationDTO> unitValidationList = new ArrayList<UnitValidationDTO>();
		try {
			if (edo != null && edo.getItems() != null && edo.getItems().getItem() != null) {
				// Primero tengo que armar el edo
				edo.setUnits(new ArrayList<UnitFacilityVisit>());
				int unitId = 0;
				for (Item item : edo.getItems().getItem()) {
					EquipmentType itemEquipmentType = this.getEquipmentTypeMdwBo().get(item.getEquipmentType());
					int containersQuantity;
					boolean hasContainers = (item.getReservedEmptyContainers() != null
							&& item.getReservedEmptyContainers().getReservedEmptyContainer() != null
							&& item.getReservedEmptyContainers().getReservedEmptyContainer().size() > 0);
					if (hasContainers) {
						containersQuantity = item.getReservedEmptyContainers().getReservedEmptyContainer().size();
					} else {
						containersQuantity = item.getQuantity().intValue();
					}
					for (int i = 0; i < containersQuantity; i++) {
						UnitFacilityVisit ufv = null;
						if (hasContainers) {
							ufv = this.getUnitFacilityVisitMdwBo().get(item.getReservedEmptyContainers()
									.getReservedEmptyContainer().get(i).getEquipNumber());
						} else {
							unitId++;
							ufv = EmptyUtils.constructForOrder(Category.EXPORT, unitId, edo.getLine(),
									itemEquipmentType);
						}
						edo.getUnits().add(ufv);
					}
				}

				// Después valido normalmente
				for (UnitFacilityVisit ufv : edo.getUnits()) {
					UnitValidationDTO unitValidationDTO = this.getUnitValidationDTO(ufv, edoNbr, null, null, null,
							null);
					unitValidationList.add(unitValidationDTO);
				}
			}

		} catch (Exception e) {
			String[] strParams = {};
			String msg = getProperty("Controller.DataValidationError", strParams, getApplicationContext());
			LOG.error(msg, e);
		}
		return unitValidationList;
	}

	/**
	 * Retorna una lista de objetos con todas las validaciones para los unit del ero
	 * 
	 * Get /api/validate/ero/{eroNbr}
	 * 
	 * @param eroNbr número de la órden ero.
	 * @return {@link com.spia.businessportal.common.entities.dto.UnitValidationDTO}
	 * @throws BusinessException cuando ocurre un fallo en servicio del mdw.
	 */
	@RequestMapping(value = "/ero/{eroNbr}", method = RequestMethod.GET)
	public @ResponseBody List<UnitValidationDTO> validateEro(@PathVariable String eroNbr) throws BusinessException {

		Ero ero = this.getEroMdwBo().get(eroNbr);

		List<UnitValidationDTO> unitValidationList = new ArrayList<UnitValidationDTO>();
		try {
			if (ero != null && ero.getItems() != null && ero.getItems().getItem() != null) {
				ero.setUnits(new ArrayList<UnitFacilityVisit>());
				int unitId = 0;
				for (com.spia.services.entities.OrderItems.Item item : ero.getItems().getItem()) {
					EquipmentType itemEquipmentType = this.getEquipmentTypeMdwBo().get(item.getEquipmentType());
					int containersQuantity;
					boolean hasContainers = (item.getExpectedEmptyContainers() != null
							&& item.getExpectedEmptyContainers().getExpectedEmptyContainer() != null
							&& item.getExpectedEmptyContainers().getExpectedEmptyContainer().size() > 0);
					if (hasContainers) {
						containersQuantity = item.getExpectedEmptyContainers().getExpectedEmptyContainer().size();
					} else {
						containersQuantity = item.getQuantity().intValue();
					}
					for (int i = 0; i < containersQuantity; i++) {
						UnitFacilityVisit ufv = null;
						if (hasContainers) {
							ufv = this.getUnitFacilityVisitMdwBo().get(item.getExpectedEmptyContainers()
									.getExpectedEmptyContainer().get(i).getEquipNumber());
							// agrego los units al ero sólo cuando están en un estado que me permitan
							// agendar el appointment (ADVISED)
							if ("advised".equals(ufv.getTransitState().toLowerCase())
									// Es truck y tiene appointment
									|| (this.getUserBO().hasPermission(User.COMPANY_TYPE_TRUCK))
											&& "inbound".equalsIgnoreCase(ufv.getTransitState().toLowerCase())) {
								ero.getUnits().add(ufv);
							}
						}
						// Para truck no presentar units no asociadas.
						else if (!this.getUserBO().hasPermission(User.COMPANY_TYPE_TRUCK)) {
							unitId++;
							ufv = EmptyUtils.constructForOrder(Category.EXPORT, unitId, ero.getLine(),
									itemEquipmentType);
							ero.getUnits().add(ufv);
						}
					}
				}

				// Después valido normalmente
				for (UnitFacilityVisit ufv : ero.getUnits()) {
					UnitValidationDTO unitValidationDTO = this.getUnitValidationDTO(ufv, null, eroNbr, null, null,
							null);
					unitValidationList.add(unitValidationDTO);
				}
			}

		} catch (Exception e) {
			String[] strParams = {};
			String msg = getProperty("Controller.DataValidationError", strParams, getApplicationContext());
			LOG.error(msg, e);
		}
		return unitValidationList;
	}

	/**
	 * Retorna un objeto con todas las validaciones para el unit.
	 * 
	 * Get /api/validate/unit/{unitNbr}
	 * 
	 * @param unitNbr: número de unit
	 * @return {@link com.spia.businessportal.common.entities.dto.UnitValidationDTO}
	 */
	@RequestMapping(value = "/unit/{unitNbr}", method = RequestMethod.GET)
	public @ResponseBody UnitValidationDTO validateUnit(@PathVariable String unitNbr) {
		UnitValidationDTO unitValidationDTO = new UnitValidationDTO();
		try {
			String userID = this.getUserBO().getCurrentUser().getEmpresa().getId();
			
			if(this.getUserBO().hasPermission(User.COMPANY_TYPE_CUSTOMER)) {
				userID = userID.concat("|Cl");
			}
			
			UnitFacilityVisit ufv = this.getUnitFacilityVisitMdwBo().getUnitForImport(unitNbr, userID);
			if (ufv != null) {
				Customer customer = null;
				if (ufv.getBillsOfLading() != null && !ufv.getBillsOfLading().isEmpty()
						&& ufv.getBillsOfLading().get(0).getConsigneeId() != null) {
					customer = this.getCustomerMdwBO().getByIdAndRole(ufv.getBillsOfLading().get(0).getConsigneeId(),
							Constants.Billing.ROLES.get(roleShipperConsignee));
				}
				Customer currentN4User = this.getCustomerMdwBO().getByIdAndRole(
						this.getUserBO().getCurrentUser().getEmpresa().getId(), Constants.Billing.ROLES.get(roleAgent));
				unitValidationDTO = this.getUnitValidationDTO(ufv, null, null, null, customer, currentN4User);

				UnitsValidationResponse unitsValidationList = this.getInvoiceMdwBO().unistHasDebts(ufv.getId(), null,
						ufv.getContents().getCarrierVisitId());
				unitValidationDTO.setHasDebt(unitsValidationList.getUnits().get(0).getStatus());

				ShipperInfo shipper = this.getShipperMdwBO().getById(ufv.getBillsOfLading().get(0).getConsigneeId());

				if (shipper != null && shipper.getHoldConsigneeActivo() != null
						&& shipper.getHoldConsigneeActivo().equalsIgnoreCase("true")) {
					unitValidationDTO.setHasHoldConsigneeFlag(true);
				} else {
					unitValidationDTO.setHasHoldConsigneeFlag(false);
				}

			}
		} catch (Exception e) {
			String[] strParams = {};
			String msg = getProperty("Controller.DataValidationError", strParams, getApplicationContext());
			LOG.error(msg, e);
		}
		return unitValidationDTO;
	}

	/**
	 * Retorna una lista de objetos con todas las validaciones para los unit del pin
	 * 
	 * Get /api/validate/pin/{pinNbr}
	 * 
	 * @param pinNbr número de pin
	 * @return {@link com.spia.businessportal.common.entities.dto.UnitValidationDTO}
	 * @throws BusinessException cuando ocurre un fallo en servicio del mdw o base
	 *                           de datos.
	 */
	@RequestMapping(value = "/pin/{pinNbr}", method = RequestMethod.GET)
	public @ResponseBody List<UnitValidationDTO> validatePin(@PathVariable String pinNbr) throws BusinessException {
		PinFilter pinFilter = new PinFilter();

		pinFilter.setPinNbr(EncoderDecoder.decodeBase64(pinNbr));
		pinFilter.setActive(true);
		pinFilter.setDeleted(false);
		List<Pin> pins = this.getPinBO().search(pinFilter, new Page(1, 0)).getResult();
		List<UnitValidationDTO> unitValidationList = new ArrayList<UnitValidationDTO>();
		List<TruckVisit> truckVisits = null;
		try {
			if (pins != null && !pins.isEmpty()) {
				String unitsList = "";
				Customer agent = null;
				Customer customer = null;
				String vesselVisit = null;
				String unitsLists = null;
				for (Pin pin : pins) {
					if (pin.getPinContainerized() != null) {
						for (PinContainerized pc : pin.getPinContainerized()) {
							UnitValidationDTO unitValidationDTO = new UnitValidationDTO();
							unitValidationDTO.setUnitNbr(pc.getUnitNbr());
							unitValidationDTO.setTwenty(pc.isTwenty());
							unitValidationDTO.setIsoType(pc.getIsoType());

							unitValidationDTO.setPin(pin);
							unitValidationDTO.setHasPin(true);

							// Valido si tiene appointment
							TruckVisitFilter truckVisitFilter = new TruckVisitFilter();
							truckVisitFilter.setUnitNbr(pc.getUnitNbr());
							Calendar cal = Calendar.getInstance();
							cal.setTime(new Date());
							cal.add(Calendar.HOUR_OF_DAY, -2);
							cal.getTime();
							truckVisitFilter.setMinAppointmentDate(cal.getTime());
							truckVisitFilter.setCanceled(false);
							if (pin.getEdoNbr() != null) {
								truckVisitFilter.setEdoNbr(pin.getEdoNbr());
							}
							if (pin.getEroNbr() != null) {
								truckVisitFilter.setEroNbr(pin.getEroNbr());
							}
							truckVisits = this.getTruckVisitBO().search(truckVisitFilter, new Page(1, 0)).getResult();
							if (truckVisits != null && !truckVisits.isEmpty()) {
								if ((pin.getEroNbr() == null && pin.getEdoNbr() == null) || (pin.getEroNbr() != null
										&& (pc.getUnitNbr().equals(truckVisits.get(0).getFirstContainerEro())
												|| pc.getUnitNbr().equals(truckVisits.get(0).getSecondContainerEro())))
										|| (pin.getEdoNbr() != null
												&& (pc.getUnitNbr().equals(truckVisits.get(0).getFirstContainerEdo())
														|| pc.getUnitNbr()
																.equals(truckVisits.get(0).getSecondContainerEdo())))) {
									unitValidationDTO.setTruckVisit(truckVisits.get(0));
									unitValidationDTO.setHasTruckVisitAppointment(true);
									SimpleDateFormat dateFormat = new SimpleDateFormat(
											DateFormatConstant.yy_MMM_dd_HHmm, Locale.ENGLISH);
									String date = dateFormat.format(truckVisits.get(0).getAppointmentDate());
									SimpleDateFormat hourFormat = new SimpleDateFormat(DateFormatConstant.HH_mm);
									String hours = hourFormat.format(truckVisits.get(0).getAppointmentDate());
									UsuarioLoginDTO createdBy = this.getUserBO()
											.getByUsername(truckVisits.get(0).getCreatedByLDAP());
									String[] strParams = { date, hours, createdBy.getEmpresa().getCompanyName() };
									String msg = getProperty("Controller.DataValidationTruckVisitInfo", strParams,
											getApplicationContext());
									unitValidationDTO.setTruckVisitAppointmentTooltip(msg);
								}
							}

							boolean hasDebts = false;
							boolean hasHolds = false;
							boolean creditStatus = false;

							if (!pc.getUnitNbr().toLowerCase().startsWith("c.")) {

								UnitFacilityVisit ufv = this.getUnitFacilityVisitMdwBo().get(pc.getUnitNbr());

								if (ufv != null) {
									if (vesselVisit == null) {
										vesselVisit = ufv.getBillsOfLading().get(0).getCarrierVisit();
									}

									if (unitsLists == null) {
										unitsLists = ufv.getId();
									} else {
										unitsLists = "," + ufv.getId();
									}
									if (ufv.getTransitState() != null) {
										unitValidationDTO.setYard("YARD".equals(ufv.getTransitState().toUpperCase()));
										unitValidationDTO
												.setDeparted("DEPARTED".equals(ufv.getTransitState().toUpperCase()));
										unitValidationDTO
												.setInbound("INBOUND".equals(ufv.getTransitState().toUpperCase()));
									}
									if (ufv.getContainer() != null && ufv.getContainer().getType() != null) {
										unitValidationDTO.setTwenty(ufv.getContainer().getType().startsWith("2"));
										unitValidationDTO.setIsoType(ufv.getContainer().getType());
									}
									if (customer == null && ufv.getBillsOfLading() != null
											&& !ufv.getBillsOfLading().isEmpty()
											&& ufv.getBillsOfLading().get(0).getConsigneeId() != null) {
										customer = this.getCustomerMdwBO().getByIdAndRole(
												ufv.getBillsOfLading().get(0).getConsigneeId(),
												Constants.Billing.ROLES.get(roleShipperConsignee));
									}
									UsuarioLoginDTO createdBy = this.getUserBO().getByUsername(pin.getCreatedByLDAP());
									if (agent == null) {
										agent = this.getCustomerMdwBO().getByIdAndRole(createdBy.getEmpresa().getId(),
												Constants.Billing.ROLES.get(roleAgent));
									}

									// Recupero los días de storage y power storage
									UnitStorageAndReeferDaysResponse unitStorageAndReeferDaysResponse = null;
									try {
										// Recupero los días de storage y power storage
										unitStorageAndReeferDaysResponse = this.getUnitFacilityVisitMdwBo()
												.getUnitStorageAndReeferDays(ufv.getId());
									} catch (Exception e) {
										unitStorageAndReeferDaysResponse = new UnitStorageAndReeferDaysResponse();
										unitStorageAndReeferDaysResponse.setReeferDays(0);
										unitStorageAndReeferDaysResponse.setStorageDays(0);
										LOG.info(e.getMessage(), e);
									}
									/**
									 * AGUADULCE 63 - Pido que sólo se tengan en cuenta CONSIGNEE (PARA IMPORT) O
									 * SHIPPER (PARA EXPORT) e ignoren el Agente.
									 */
									creditStatus = (customer != null && customer.getStatus() != null
											&& customer.getDueDateRule() != null)
											&& ("on account".equals(customer.getStatus().toLowerCase())
													&& "add days to invoice finalized date"
															.equals(customer.getDueDateRule().toLowerCase()));
									// Valido que no tenga deudas.
									// hasDebts = this.getInvoiceMdwBO().unitHasDebts(pc.getUnitNbr());

									// Valido que tenga chargeableUnitEvents (si no tiene cargos facturables no le
									// puedo generar el draft).
									List<ChargeableUnitEvents> chargeableUnitEvents = this
											.getChargeableUnitEventsMdwBO().hasChargeableUnitEvents(ufv.getId());
									if ((chargeableUnitEvents != null && !chargeableUnitEvents.isEmpty())) {
										unitValidationDTO.setHasChargeableUnitEvents(true);
									}
									if (unitStorageAndReeferDaysResponse.getStorageDays() > 0
											|| (ufv.getReefer() != null
													&& unitStorageAndReeferDaysResponse.getReeferDays() > 0)) {
										if (unitStorageAndReeferDaysResponse.getStorageDays() > 0) {
											unitValidationDTO.setStorageDaysOwed(
													unitStorageAndReeferDaysResponse.getStorageDays());
										}
										if (ufv.getReefer() != null
												&& unitStorageAndReeferDaysResponse.getReeferDays() > 0) {
											unitValidationDTO.setStorageDaysOwed(
													unitStorageAndReeferDaysResponse.getReeferDays());
										}
									}

									// Levanto el hold si, siendo un unit de impo.
									// 1) El unit no tiene cargos ni deudas
									// 2) El consignee del unit es a crédito
									// 3) El consignee del bl es a crédito
									// if(( (chargeableUnitEvents == null || chargeableUnitEvents.isEmpty()) &&
									// !hasDebts &&
									// unitStorageAndReeferDaysResponse.getStorageDays() == 0 &&
									// (ufv.getReefer() != null && unitStorageAndReeferDaysResponse.getReeferDays()
									// == 0) ||
									// creditStatus)){
									// this.getHoldPermissionMdwBO().grantHold(ufv.getId(), hold);
									// }

									// Valido que no tenga holds
									try {
										hasHolds = this.getTruckVisitAppointmentMdwBO().unitHasHolds(ufv.getId());
										if (hasHolds)
											unitValidationDTO
													.setHolds(getTruckVisitAppointmentMdwBO().getHolds(ufv.getId()));
									} catch (Exception e) {
										LOG.info(e.getMessage(), e);
									}
								}
							}

							unitValidationDTO.setOnAccount(creditStatus);
							unitValidationDTO.setHasHolds(hasHolds);
							unitValidationDTO.setHasDebt(hasDebts);

							unitValidationList.add(unitValidationDTO);
							unitsList += unitValidationDTO.getUnitNbr() + ",";
						}

					}
				}
				// Agrego la validación de hasDebts.
				unitsList = unitsList.substring(0, unitsList.length() - 1);
				UnitsValidationResponse unitsValidationList = this.getInvoiceMdwBO().unistHasDebts(unitsList, null,
						vesselVisit);
				for (UnitValidationDTO u : unitValidationList) {
					for (UnitValidationResponseElement ure : unitsValidationList.getUnits()) {
						if (u.getUnitNbr().equals(ure.getUnit())) {
							u.setHasDebt(ure.getStatus());
						}
					}
				}
			}
		} catch (Exception e) {
			String[] strParams = {};
			String msg = getProperty("Controller.DataValidationError", strParams, getApplicationContext());
			LOG.error(msg, e);
		}
		return unitValidationList;
	}

	/**
	 * Retorna todas las validaciones para el unit
	 * 
	 * @param ufv unit
	 * @return {@link com.spia.businessportal.common.entities.dto.UnitValidationDTO}
	 * @throws BusinessException cuando hay un error de base de datos.
	 * @throws BOException       cuando hay un error en los servicios mdw.
	 */
	private UnitValidationDTO getUnitValidationDTO(UnitFacilityVisit ufv, String edoNbr, String eroNbr,
			String bookingNbr, Customer customer, Customer currentN4User) throws BusinessException, BOException {
		// Base de datos
		List<Pin> pins = null;
		List<TruckVisit> truckVisits = null;
		UnitValidationDTO unitValidationDTO = new UnitValidationDTO();
		unitValidationDTO.setEdoNbr(edoNbr);
		unitValidationDTO.setEroNbr(eroNbr);
		unitValidationDTO.setBookingNbr(bookingNbr);
		unitValidationDTO.setUnitNbr(ufv.getId());
		if (ufv.getTransitState() != null) {
			unitValidationDTO.setYard("YARD".equals(ufv.getTransitState().toUpperCase()));
			unitValidationDTO.setDeparted("DEPARTED".equals(ufv.getTransitState().toUpperCase()));
			unitValidationDTO.setInbound("INBOUND".equals(ufv.getTransitState().toUpperCase()));
		}
		if (ufv.getContainer() != null && ufv.getContainer().getType() != null) {
			unitValidationDTO.setTwenty(ufv.getContainer().getType().startsWith("2"));
			unitValidationDTO.setIsoType(ufv.getContainer().getType());
		}
		PinFilter pinFilter = new PinFilter();
		pinFilter.setPinContainerizedActive(true);
		pinFilter.setUnitNbr(ufv.getId());
		pinFilter.setActive(true);
		if (edoNbr != null) {
			pinFilter.setEdo(edoNbr);
		}
		if (eroNbr != null) {
			pinFilter.setEro(eroNbr);
		}
		pins = this.getPinBO().search(pinFilter, new Page(1, 0)).getResult();
		if (pins != null && !pins.isEmpty()) {
			unitValidationDTO.setPin(pins.get(0));
			unitValidationDTO.setHasPin(true);
		}

		// Valido si tiene appointment
		TruckVisitFilter truckVisitFilter = new TruckVisitFilter();
		truckVisitFilter.setUnitNbr(ufv.getId());
		Calendar cal = Calendar.getInstance();
		cal.setTime(new Date());
		cal.add(Calendar.HOUR_OF_DAY, -2);
		cal.getTime();
		truckVisitFilter.setMinAppointmentDate(cal.getTime());
		truckVisitFilter.setCanceled(false);
		LOG.info("###########################");
		LOG.info("Fecha: " + truckVisitFilter.getMinAppointmentDate().toString());
		LOG.info("Canceled: " + truckVisitFilter.getCanceled().toString());
		LOG.info("unit: " + truckVisitFilter.getUnitNbr());
		if (eroNbr != null) {
			truckVisitFilter.setEroNbr(eroNbr);
			LOG.info("ero: " + truckVisitFilter.getEroNbr());
		}
		if (edoNbr != null) {
			truckVisitFilter.setEdoNbr(edoNbr);
			LOG.info("edo: " + truckVisitFilter.getEdoNbr());
		}

		LOG.info("###########################");
		truckVisits = this.getTruckVisitBO().search(truckVisitFilter, new Page(1, 0)).getResult();
		if (truckVisits != null && !truckVisits.isEmpty()) {
			if ((edoNbr == null && eroNbr == null)
					|| (eroNbr != null && (ufv.getId().equals(truckVisits.get(0).getFirstContainerEro())
							|| ufv.getId().equals(truckVisits.get(0).getSecondContainerEro())))
					|| (edoNbr != null && (ufv.getId().equals(truckVisits.get(0).getFirstContainerEdo())
							|| ufv.getId().equals(truckVisits.get(0).getSecondContainerEdo())))) {
				unitValidationDTO.setTruckVisit(truckVisits.get(0));
				unitValidationDTO.setHasTruckVisitAppointment(true);
				SimpleDateFormat dateFormat = new SimpleDateFormat(DateFormatConstant.yy_MMM_dd_HHmm, Locale.ENGLISH);
				String date = dateFormat.format(truckVisits.get(0).getAppointmentDate());
				SimpleDateFormat hourFormat = new SimpleDateFormat(DateFormatConstant.HH_mm);
				String hours = hourFormat.format(truckVisits.get(0).getAppointmentDate());
				UsuarioLoginDTO createdBy = this.getUserBO().getByUsername(truckVisits.get(0).getCreatedByLDAP());
				String[] strParams = { date, hours, createdBy.getEmpresa().getCompanyName() };
				String msg = getProperty("Controller.DataValidationTruckVisitInfo", strParams, getApplicationContext());
				unitValidationDTO.setTruckVisitAppointmentTooltip(msg);
			}
		}

		// N4
		boolean hasDebts = false;
		boolean hasHolds = false;
		boolean creditStatus = false;

		if (!ufv.getId().toLowerCase().startsWith("c.")) {
			/**
			 * AGUADULCE 63 - Pido que sólo se tengan en cuenta CONSIGNEE (PARA IMPORT) O
			 * SHIPPER (PARA EXPORT) e ignoren el Agente.
			 */
			creditStatus = (customer != null && customer.getStatus() != null && customer.getDueDateRule() != null)
					&& ("on account".equals(customer.getStatus().toLowerCase())
							&& "add days to invoice finalized date".equals(customer.getDueDateRule().toLowerCase()));

			UnitStorageAndReeferDaysResponse unitStorageAndReeferDaysResponse = null;
			try {
				// Recupero los días de storage y power storage
				unitStorageAndReeferDaysResponse = this.getUnitFacilityVisitMdwBo()
						.getUnitStorageAndReeferDays(ufv.getId());
			} catch (Exception e) {
				unitStorageAndReeferDaysResponse = new UnitStorageAndReeferDaysResponse();
				unitStorageAndReeferDaysResponse.setReeferDays(0);
				unitStorageAndReeferDaysResponse.setStorageDays(0);
				LOG.info(e.getMessage(), e);
			}
			// Valido que no tenga deudas
			if (unitStorageAndReeferDaysResponse.getStorageDays() > 0
					|| (ufv.getReefer() != null && unitStorageAndReeferDaysResponse.getReeferDays() > 0)) {
				if (unitStorageAndReeferDaysResponse.getStorageDays() > 0) {
					unitValidationDTO.setStorageDaysOwed(unitStorageAndReeferDaysResponse.getStorageDays());
				}
				if (ufv.getReefer() != null && unitStorageAndReeferDaysResponse.getReeferDays() > 0) {
					unitValidationDTO.setStorageDaysOwed(unitStorageAndReeferDaysResponse.getReeferDays());
				}
			}

			// Valido que tenga chargeableUnitEvents (si no tiene cargos facturables no le
			// puedo generar el draft).
			List<ChargeableUnitEvents> chargeableUnitEvents = this.getChargeableUnitEventsMdwBO()
					.hasChargeableUnitEvents(ufv.getId());
			if ((chargeableUnitEvents != null && !chargeableUnitEvents.isEmpty())) {
				unitValidationDTO.setHasChargeableUnitEvents(true);
			}

			// Levanto el hold si, siendo un unit de impo.
			// 1) El unit no tiene cargos ni deudas
			// 2) El consignee del unit es a crédito
			// 3) El consignee del bl es a crédito

			// Valido que no tenga holds
			try {
				HoldsList holds = this.getTruckVisitAppointmentMdwBO().getHoldsList(ufv.getId());
				Boolean hasHoldConsignee = false;
				Boolean hasHoldConsigneeRequired = false;

				for (Unit o : holds.getUnits()) {
					if (o.getUnitNbr().equals(ufv.getId())) {
						for (HoldItem hold : o.getHolds()) {
							if (hold.getHoldId().equals("HOLD_CONSIGNEE")) {
								hasHoldConsignee = true;
								if (hold.getHoldStatus() != null
										&& hold.getHoldStatus().equalsIgnoreCase("REQUIRED")) {
									hasHoldConsigneeRequired = true;
								}
							}
						}
						break;
					}
				}

				if (holds.getUnits().get(0).getHolds().size() > 0) {
					if(holds.getUnits().get(0).getHolds().size() == 1 && hasHoldConsignee) {
						unitValidationDTO.setHasHolds(false);
					} else {
						unitValidationDTO.setHasHolds(true);
					}
				} else {
					unitValidationDTO.setHasHolds(false);
				}
				
				if (unitValidationDTO.isHasHolds() || hasHoldConsigneeRequired) {
					Holds holdsFinal = this.getTruckVisitAppointmentMdwBO().getHolds(ufv.getId());
					if(!hasHoldConsigneeRequired && hasHoldConsignee) {
						Hold removeHold = null;
						for (Hold hold : holdsFinal.getHolds()) {
							if(hold.getHoldId().equalsIgnoreCase("HOLD_CONSIGNEE")) {
								removeHold = hold;
								break;
							}
						}
						holdsFinal.getHolds().remove(removeHold);
					}
					unitValidationDTO.setHolds(holdsFinal);
				}
			} catch (Exception e) {
				LOG.info(e.getMessage(), e);
			}
		}

		unitValidationDTO.setOnAccount(creditStatus);
		unitValidationDTO.setHasDebt(hasDebts);

		return unitValidationDTO;
	}

}
