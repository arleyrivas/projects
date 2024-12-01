/*
 * Fluxit S.A
 * La Plata - Buenos Aires - Argentina
 * http://www.fluxit.com.ar
 * Author: leandro
 * Date:  14 de oct. de 2015 - 2:31:12 p. m.
 */
package com.spia.businessportal.web.controller;

import java.util.ArrayList;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.spia.businessportal.common.entities.User;
import com.spia.businessportal.common.entities.errorHandling.ResponseError;
import com.spia.businessportal.common.utils.EmptyUtils;
import com.spia.businessportal.common.utils.EncoderDecoder;
import com.spia.services.entities.Category;
import com.spia.services.entities.Edo;
import com.spia.services.entities.EqOrderItems.Item;
import com.spia.services.entities.EquipmentType;
import com.spia.services.entities.Ero;
import com.spia.services.entities.UnitFacilityVisit;
import com.spia.businessportal.common.entities.dto.autentication.ldap.UsuarioLoginDTO;

import ar.com.fluxit.framework.common.exception.BusinessException;

/**
 * @author leandro Controlador donde se expone la api de negocios del portal
 *         para {@link Edo} y {@link Ero}
 */
@RequestMapping("/api/empty")
@Controller
public class EmptyController extends AbstractController {

	private static final Log LOG = LogFactory.getLog(ApplicationManagerController.class);

	/**
	 * GET api/empty/edo/{nbr} Retorna el edo del nbr enviado sólo si pertenece al
	 * usuario logueado (agent o trucking company). En el caso de que el edo no
	 * tenga contenedores explícitos, se le agregarán tantos contenedores genéricos
	 * (C. vacío 1, C. vacío 2, etc) como cantidad de contenedores admita el edo,
	 * con las características en él especificadas.
	 * 
	 * @param nbr numero del edo
	 * @return {@link Edo}
	 * @throws BusinessException cuando hay un error en los servicios mdw.
	 */
	@RequestMapping(value = "/edo/{nbr}", method = RequestMethod.GET)
	public @ResponseBody Edo getEdo(@PathVariable String nbr) throws BusinessException {
		UsuarioLoginDTO currentUser = this.getUserBO().getCurrentUser();
		Edo edo = null;
		nbr = EncoderDecoder.decodeBase64(nbr);
		if (this.getUserBO().hasPermission(User.COMPANY_TYPE_AGENT)) {
			edo = this.getEdoMdwBo().getByAgent(nbr, currentUser.getEmpresa().getId());
		}
		if (this.getUserBO().hasPermission(User.COMPANY_TYPE_TRUCK)) {
			edo = this.getEdoMdwBo().getByTruckingCompany(nbr, currentUser.getEmpresa().getId());
		}

		if (edo != null && edo.getItems() != null && edo.getItems().getItem() != null) {
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
						ufv = this.getUnitFacilityVisitMdwBo().get(
								item.getReservedEmptyContainers().getReservedEmptyContainer().get(i).getEquipNumber());
					} else {
						unitId++;
						ufv = EmptyUtils.constructForOrder(Category.EXPORT, unitId, edo.getLine(), itemEquipmentType);
					}
					edo.getUnits().add(ufv);
				}
			}
		}
		return edo;
	}

	/**
	 * GET api/empty/ero/{nbr} Retorna el ero del nbr enviado sólo si pertenece al
	 * usuario logueado (agent o trucking company). En el caso de que el ero no
	 * tenga contenedores explícitos, se le agregarán tantos contenedores genéricos
	 * (C. vacío 1, C. vacío 2, etc) como cantidad de contenedores admita el ero,
	 * con las características en él especificadas.
	 * 
	 * @param nbr número del ero.
	 * @return {@link Ero}
	 * @throws BusinessException cuando hay un error en los servicios mdw.
	 */
	@RequestMapping(value = "/ero/{nbr}", method = RequestMethod.GET)
	public @ResponseBody ResponseEntity<?> getEro(@PathVariable String nbr) throws BusinessException {
		ResponseEntity re = null;
		UsuarioLoginDTO currentUser = this.getUserBO().getCurrentUser();
		Ero ero = null;
		try {
			if (this.getUserBO().hasPermission(User.COMPANY_TYPE_AGENT)) {
				ero = this.getEroMdwBo().getByAgent(nbr, currentUser.getEmpresa().getId());
			}
			if (this.getUserBO().hasPermission(User.COMPANY_TYPE_TRUCK)) {
				ero = this.getEroMdwBo().getByTruckingCompany(nbr, currentUser.getEmpresa().getId());
			}
			if (ero != null) {
				if (ero.getItems() != null && ero.getItems().getItem() != null) {
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
								// Para truck no presentar units no asociadas.
							} else if (!this.getUserBO().hasPermission(User.COMPANY_TYPE_TRUCK)) {
								unitId++;
								ufv = EmptyUtils.constructForOrder(Category.EXPORT, unitId, ero.getLine(),
										itemEquipmentType);
								ero.getUnits().add(ufv);
							}
						}
					}
					re = new ResponseEntity<Ero>(ero, HttpStatus.OK);
				} else {
					LOG.info("El ero no tiene configurado ningún item");
				}
			} else {
				LOG.info("No se ha encontrado el ero solicitado.");
			}
		} catch (Exception e) {
			String[] strParams = null;
			String msg = "no se ha encontrado el ero solicitado";
			LOG.error(e.getMessage());
			ResponseError error = new ResponseError();
			error.setError(msg);
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}
}
