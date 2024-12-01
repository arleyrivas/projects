package com.spia.businessportal.web.controller;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.spia.businessportal.common.entities.User;
import com.spia.businessportal.common.entities.errorHandling.ResponseError;
import com.spia.businessportal.service.TruckingCompanyService;
import com.spia.services.entities.AgentRepresentations;
import com.spia.services.entities.AgentRepresentations.AgentRepresentation;
import com.spia.services.entities.TruckingCompany;
import com.spia.services.exception.BOException;
import com.spia.services.util.DateUtils;
import com.spia.businessportal.common.entities.dto.TruckingCompanyServiceDTO;
import com.spia.businessportal.common.entities.dto.autentication.ldap.UsuarioLoginDTO;

import ar.com.fluxit.framework.common.exception.BusinessException;

/**
 * 
 * @author leandro Controlador donde se expone la api de negocios del portal
 *         para {@link com.spia.businessportal.common.entities.TruckingCompany}
 */
@Controller
@RequestMapping(value = "/api/truckingCompany")
public class TruckingCompanyController extends AbstractController {

	private static final Log LOG = LogFactory.getLog(TruckingCompanyController.class);

	@Autowired
	private TruckingCompanyService truckingCompanyService;

	/**
	 * Retorna todas las trucking companies.
	 * 
	 * @return {@link com.spia.businessportal.common.entities.TruckingCompany}
	 * @throws BusinessException cuando ocurre un error en los servicios de mdw.
	 */
	@RequestMapping(value = "", method = RequestMethod.GET)
	public @ResponseBody List<com.spia.businessportal.common.entities.TruckingCompany> getAll()
			throws BusinessException {

		List<TruckingCompany> truckingCompanies = this.getTruckingCompanyMdwBo().all();
		List<com.spia.businessportal.common.entities.TruckingCompany> trucks = null;
		if (truckingCompanies != null && !truckingCompanies.isEmpty()) {
			trucks = new ArrayList<com.spia.businessportal.common.entities.TruckingCompany>();
			for (TruckingCompany u : truckingCompanies) {
				com.spia.businessportal.common.entities.TruckingCompany t = new com.spia.businessportal.common.entities.TruckingCompany();
				t.setName(u.getName());
				t.setTruckingId(u.getId());
				trucks.add(t);
			}
		}
		return trucks;

	}

	@RequestMapping(value = "/can-generate-appointment", method = RequestMethod.GET)
	public @ResponseBody boolean canGenerateAppointment() throws BusinessException {
		UsuarioLoginDTO currentUser = this.getUserBO().getCurrentUser();
		TruckingCompany truckingCompany = this.getTruckingCompanyMdwBo().get(currentUser.getEmpresa().getId());
		Date insuranceInitialized = DateUtils.initializeTime(truckingCompany.getInsuranceExpires());
		Date today = DateUtils.initializeTime(new Date());
		return insuranceInitialized.after(today);
	}

	/**
	 * POST /byConsigneeAndIdOrName/ invocación al servicio que retorna
	 * lista de empresa de transporte  asociadas a un cliente
	 * la busqueda se realiza por Id o nombre de la empresa 
	 * 
	 * @param request:  petición http
	 * @param response: respuesta http
	 * @return {@link TruckingCompany}
	 * @throws BOException
	 */
	@RequestMapping(value = "/byConsigneeAndIdOrName", method = RequestMethod.POST)
	public @ResponseBody ResponseEntity<?> getTruckingCompanies(@RequestBody TruckingCompanyServiceDTO req) throws BOException {
		ResponseEntity<?> re = null;
		try {
			List<TruckingCompany> truckingCompanyList = truckingCompanyService.getTruckingCompaniesByConsigneeAndIdOrName(req.getIdName(), req.getConsigneeId());
			re = new ResponseEntity<List<TruckingCompany>>(truckingCompanyList, HttpStatus.OK);
		} catch (Exception e) {
			LOG.error("Se produjo un error al obtener los transportistas ", e);
			ResponseError error = new ResponseError();
			String[] strParams = {};
			error.setError(getProperty("Controller.TruckCompaniesError", strParams, getApplicationContext()));
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}

}
