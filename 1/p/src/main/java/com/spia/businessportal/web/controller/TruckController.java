/**
 * 
 */
package com.spia.businessportal.web.controller;

import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.spia.businessportal.backend.bo.QuerysBO;
import com.spia.businessportal.common.entities.dto.TruckValidationDTO;
import com.spia.businessportal.common.entities.errorHandling.ResponseError;
import com.spia.businessportal.service.TruckService;
import com.spia.services.entities.Truck;

import ar.com.fluxit.framework.common.exception.BusinessException;
import com.spia.businessportal.common.entities.User;

/**
 * @author diego Controlador donde se expone la api de negocios del portal para {@link Truck}
 */
@Controller
@RequestMapping(value = "/api/trucks")
public class TruckController extends AbstractController {

    private static final Log LOG = LogFactory.getLog(TruckController.class);

    @Autowired
    private QuerysBO querysBO;
    @Autowired
    private TruckService truckService;

    /**
     * Retorna todos los Trucks.
     * 
     * @return {@link Truck}
     */
    @RequestMapping(value = "", method = RequestMethod.GET)
    public @ResponseBody List<Truck> all() {
        List<Truck> trucks = null;
        try {
            trucks = this.getTruckMdwBo().all();
        } catch (Exception e) {
            LOG.error(e.getStackTrace());
        }
        return trucks;
    }

    /**
     * Retorna un truck dada su placa
     * 
     * @return {@link Truck}
     */
    @RequestMapping(value = "/{licensePlate}", method = RequestMethod.GET)
    public @ResponseBody Truck getByLicensePlate(@PathVariable String licensePlate) {
        Truck truck = null;
        try {
            truck = this.getTruckMdwBo().get(licensePlate);
        } catch (Exception e) {
            LOG.error(e.getStackTrace());
        }
        return truck;
    }

    /**
     * @author Elvis Fontalvo Retorna todas los conductores para la empresa de transporte logueada en el portal. GET /api/truck/validation/service
     * 
     * @return {@link com.spia.services.entities.Truck}
     * @throws BusinessException
     *             cuando hay un error en los servicios mdw.
     */

    @RequestMapping(value = "/validation/service/{truck}", method = RequestMethod.GET)
    public @ResponseBody ResponseEntity<?> truckValidationService(@PathVariable String truck) {
        ResponseEntity<?> re = null;
        String nit = "";
        try {
            TruckValidationDTO[] response = truckService.truckValidationService(truck, nit);
            if (response != null && response.length != 0) {
                re = new ResponseEntity<TruckValidationDTO[]>(response, HttpStatus.OK);
            }

        } catch (Exception e) {
            LOG.error(e.getMessage(), e);
            ResponseError error = new ResponseError();
            String[] strParams = null;
            String msg = getProperty("Controller.DocumentationError", strParams, getApplicationContext());
            error.setError(msg);
            re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
        }
        return re;
    }

    /**
     * @author Elvis Fontalvo Retorna todas los conductores para la empresa de transporte logueada en el portal. GET /api/truck/validation/service
     * 
     * @return {@link com.spia.services.entities.Truck}
     * @throws BusinessException
     *             cuando hay un error en los servicios mdw.
     */

    @RequestMapping(value = "/validation/service/{truck}/{type}", method = RequestMethod.GET)
     public @ResponseBody ResponseEntity<?> truckValidationService(@PathVariable String truck, @PathVariable String type) {
         ResponseEntity<?> re = null;
        // User currentUser = this.getUserBO().getCurrentUser();
         String nit = "";
         try {
             //LOG.info("type: " + type);
             if(type.equals("private-transport")){
                 nit = this.getUserBO().getCurrentUser().getEmpresa().getId();
                 
                 //String nitDos = this.getN4UserId();
                 //LOG.info("nit: " + nit);
                 //LOG.info("nitDos: " + nitDos);
             }
             TruckValidationDTO[] response = truckService.truckValidationService(truck, nit);
             if (response != null && response.length != 0) {
                 re = new ResponseEntity<TruckValidationDTO[]>(response, HttpStatus.OK);
             }
 
         } catch (Exception e) {
             LOG.error(e.getMessage(), e);
             ResponseError error = new ResponseError();
             String[] strParams = null;
             String msg = getProperty("Controller.DocumentationError", strParams, getApplicationContext());
             error.setError(msg);
             re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
         }
         return re;
     } 


    @RequestMapping(value = "/validation-message-fp", method = RequestMethod.GET)
    public @ResponseBody ResponseEntity<?> validationMessageFP() {
        ResponseEntity<?> re = null;
        try {
            String response = truckService.validationMessageFP();
            re = new ResponseEntity<String>(response, HttpStatus.OK);
        } catch (Exception e) {
            LOG.error(e.getMessage(), e);
            ResponseError error = new ResponseError();
            error.setError("Error"+e.getMessage());
            re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
        }
        return re;
    }

}
