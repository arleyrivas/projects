/*
 * Fluxit S.A
 * La Plata - Buenos Aires - Argentina
 * http://www.fluxit.com.ar
 * Author: leandro
 * Date:  30 de jun. de 2016 - 10:13:03 a. m.
 */
package com.spia.businessportal.web.controller;

import java.io.IOException;
import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.client.HttpServerErrorException;
import org.springframework.web.servlet.ModelAndView;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.spia.businessportal.common.entities.errorHandling.ResponseError;
import com.spia.services.entities.UnitFacilityVisit;
import com.spia.services.entities.VesselVisit;

import ar.com.fluxit.framework.common.exception.BusinessException;

/**
 * @author facundo
 * Controlador que contiene las operaciones asociadas a vessel visit.
 *
 */
@RequestMapping("handheld")
@Controller
public class HanheldController extends AbstractController{
	
	private static final Log LOG = LogFactory.getLog(HanheldController.class);
	
	/**
	 * redirección al index de handheld
	 * @param request: petición http
	 * @param response: respuesta http
	 * @return ModelAndView: index de los handheld
	 * @throws BusinessException cuando ocurre un fallo en el servidor
	 */
//	@RequestMapping(value = "", method = RequestMethod.GET)
//	public String homeHandheld(HttpServletRequest request, HttpServletResponse response) throws BusinessException{
//		return "handheld/index";
//	}
//	
	/**
	 * GET  /vessels -> obtiene la visita
	 * @return {@link VesselVisit}
	 * @throws BusinessException
	 */
	@RequestMapping(value = "", method = RequestMethod.GET)
	public ModelAndView get() throws BusinessException{
		ModelAndView mav = new ModelAndView("handheld/vessels");
		try{
			List<VesselVisit> vesselVisits = this.getVesselVisitMdwBO().all("active");
			
			mav.addObject("titleLabel", getProperty("HandHeld.View.vessel.title", null , getApplicationContext()));
			mav.addObject("headTitleLabel", getProperty("HandHeld.View.vessel.headTitle", null , getApplicationContext()));
			mav.addObject("logoutLabel", getProperty("HandHeld.View.vessel.logout", null , getApplicationContext()));
			mav.addObject("vessels",vesselVisits);
			
		}catch(Exception e){
			String[] strParams = null;
			LOG.error(e.getMessage(), e);
			String msg = getProperty("Controller.VesselVisitError", strParams , getApplicationContext());
			ResponseError error = new ResponseError();
			error.setError(msg);
			mav.addObject("error",error);
		}
		return mav;
	}
	
	/**
	 * Redirecciona a la vista para buscar contenedor
	 * por vesselId
	 * @param vesselId
	 * @return
	 * @throws BusinessException
	 */
	@RequestMapping(value = "searchContainer/{vesselId}", method = RequestMethod.GET)
	public ModelAndView searchContainer(@PathVariable String vesselId) throws BusinessException{
		ModelAndView mav = new ModelAndView("handheld/searchContainer");
		try{
			mav.addObject("vesselId",vesselId);
			mav.addObject("containerTitle", getProperty("HandHeld.View.container.title", null , getApplicationContext()));
			mav.addObject("containerGrant", getProperty("HandHeld.View.container.GrantValue", null , getApplicationContext()));
			mav.addObject("containerAdd", getProperty("HandHeld.View.container.AddValue", null , getApplicationContext()));
			
		}catch(Exception e){
			String[] strParams = null;
			LOG.error(e.getMessage(), e);
			String msg = getProperty("Controller.VesselVisitError", strParams , getApplicationContext());
			ResponseError error = new ResponseError();
			error.setError(msg);
			mav.addObject("error",error);
		}
		return mav;
	}

	/**
	 * Busca un contenedor por vesselId y nbr.
	 * @param request
	 * @param response
	 * @return
	 * @throws BusinessException
	 */
	@RequestMapping(value = "container/{vesselId}", method = RequestMethod.POST )
	public ModelAndView getContainerByIdVessel(@PathVariable String vesselId, @RequestParam("containerNbr") String nbr) throws BusinessException{
		ModelAndView mav = new ModelAndView("handheld/searchContainer");
		mav.addObject("containerTitle", getProperty("HandHeld.View.container.title", null , getApplicationContext()));
		mav.addObject("containerGrant", getProperty("HandHeld.View.container.GrantValue", null , getApplicationContext()));
		mav.addObject("containerAdd", getProperty("HandHeld.View.container.AddValue", null , getApplicationContext()));
		try{
			UnitFacilityVisit ufv = this.getUnitFacilityVisitMdwBo().getByVesselId(nbr, vesselId);
			if(ufv != null && ufv.getSeals() != null){
				mav.addObject("seal1",ufv.getSeals().getSeal1());
				mav.addObject("seal2",ufv.getSeals().getSeal2());
				mav.addObject("seal3",ufv.getSeals().getSeal3());
				mav.addObject("seal4",ufv.getSeals().getSeal4());
			}
			else{
				mav.addObject("result", "No se encontraron resultados para el unit ");
			}
			
			mav.addObject("nbr",nbr);
		
		}catch(Exception e){
			String[] strParams = null;
			LOG.error(e.getMessage(), e);
			String msg = getProperty("Controller.VesselVisitError", strParams , getApplicationContext());
			ResponseError error = new ResponseError();
			error.setError(msg);
			mav.addObject("error",error);
		}
		return mav;
	}
	
	@RequestMapping(value = "seal/{unitId}", method = RequestMethod.GET)
	public ModelAndView getContainerByIdVessel(@PathVariable String unitId) throws BusinessException{
		ModelAndView mav = new ModelAndView("handheld/container-seals");
		mav.addObject("containerTitle", getProperty("HandHeld.View.container.title", null , getApplicationContext()));
		try{
			UnitFacilityVisit ufv = this.getUnitFacilityVisitMdwBo().get(unitId);
			mav.addObject("seal1",ufv.getSeals().getSeal1());
			mav.addObject("seal2",ufv.getSeals().getSeal2());
			mav.addObject("seal3",ufv.getSeals().getSeal3());
			mav.addObject("seal4",ufv.getSeals().getSeal4());
			mav.addObject("nbr",unitId);
			mav.addObject("containerGrant", getProperty("HandHeld.View.container.GrantValue", null , getApplicationContext()));
			mav.addObject("containerAdd", getProperty("HandHeld.View.container.AddValue", null , getApplicationContext()));
		}catch(Exception e){
			String[] strParams = null;
			LOG.error(e.getMessage(), e);
			String msg = getProperty("Controller.VesselVisitError", strParams , getApplicationContext());
			ResponseError error = new ResponseError();
			error.setError(msg);
			mav.addObject("error",error);
		}
		return mav;
	}
	
	@RequestMapping(value = "add/{unitId}/{vesselVisit}", method = RequestMethod.POST)
	public ModelAndView deny(@PathVariable String unitId, @PathVariable String vesselVisit) throws BusinessException{
		unitId = unitId.toUpperCase();
		ModelAndView mav = new ModelAndView("handheld/searchContainer");
		mav.addObject("containerTitle", getProperty("HandHeld.View.container.title", null , getApplicationContext()));
		UnitFacilityVisit ufv = this.getUnitFacilityVisitMdwBo().getByVesselId(unitId, vesselVisit);
		mav.addObject("seal1",ufv.getSeals().getSeal1());
		mav.addObject("seal2",ufv.getSeals().getSeal2());
		mav.addObject("seal3",ufv.getSeals().getSeal3());
		mav.addObject("seal4",ufv.getSeals().getSeal4());
		mav.addObject("nbr",unitId);
		mav.addObject("vesselId",vesselVisit);
		mav.addObject("containerGrant", getProperty("HandHeld.View.container.GrantValue", null , getApplicationContext()));
		mav.addObject("containerAdd", getProperty("HandHeld.View.container.AddValue", null , getApplicationContext()));
		try{
			if(!this.getHoldPermissionMdwBO().addHold(unitId)){
				LOG.error("error");
				mav.addObject("error","Se produjo un error al bloquear el contenedor.");
			}else{
				mav.addObject("success","Contenedor bloqueado.");
			}
		}catch(Exception e){
			String[] strParams = null;
			LOG.error(e.getMessage(), e);
			String msg = getProperty("Controller.VesselVisitError", strParams , getApplicationContext());
			ResponseError error = new ResponseError();
			error.setError(msg);
			mav.addObject("error",error);
		}
		return mav;
	}
	
	@RequestMapping(value = "grant/{unitId}/{vesselVisit}", method = RequestMethod.POST)
	public ModelAndView allow(@PathVariable String unitId, @PathVariable String vesselVisit) throws BusinessException, JsonParseException, JsonMappingException, IOException{
		unitId = unitId.toUpperCase();
		ModelAndView mav = new ModelAndView("handheld/searchContainer");
		mav.addObject("containerTitle", getProperty("HandHeld.View.container.title", null , getApplicationContext()));
		UnitFacilityVisit ufv = this.getUnitFacilityVisitMdwBo().getByVesselId(unitId, vesselVisit);
		mav.addObject("seal1",ufv.getSeals().getSeal1());
		mav.addObject("seal2",ufv.getSeals().getSeal2());
		mav.addObject("seal3",ufv.getSeals().getSeal3());
		mav.addObject("seal4",ufv.getSeals().getSeal4());
		mav.addObject("nbr",unitId);
		mav.addObject("vesselId",vesselVisit);
		mav.addObject("containerGrant", getProperty("HandHeld.View.container.GrantValue", null , getApplicationContext()));
		mav.addObject("containerAdd", getProperty("HandHeld.View.container.AddValue", null , getApplicationContext()));
		try{
			if(!this.getHoldPermissionMdwBO().grantHold(unitId)){
				LOG.error("error");
				mav.addObject("error","Se produjo un error al desbloquear el contenedor");
			}else{
				mav.addObject("success","Contenedor desbloqueado.");
			}			
		}catch(Exception e){
			String[] strParams = null;
			LOG.error(e.getMessage(), e);
			String msg = getProperty("Controller.VesselVisitError", strParams , getApplicationContext());
			ResponseError error = new ResponseError();
			error.setError(msg);
			if (e instanceof HttpServerErrorException){
				ObjectMapper mapper = new ObjectMapper();
				String httpError = ((HttpServerErrorException) e).getResponseBodyAsString();
				error= mapper.readValue(httpError, ResponseError.class);
				error.setError(error.getMessage());
			}
			mav.addObject("error",error.getError());
		}
		return mav;
	}
}
