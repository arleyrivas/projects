package com.spia.businessportal.backend.bo.impl;

import org.apache.commons.lang.StringUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.client.RestTemplate;

import com.spia.businessportal.backend.bo.BookingBO;
import com.spia.businessportal.common.utils.EncoderDecoder;
import com.spia.businessportal.web.controller.DataValidationController;
import com.spia.services.entities.Booking;
import com.spia.services.entities.BookingFlexFields;
import com.spia.services.entities.VesselVisit;
import com.spia.services.exception.BOException;

/**
 * 
 * @author leandro
 *
 *         Implementación de la interfaz BookingBO
 */
public class BookingBOImpl<T> extends GenericMdwBOImpl<T> implements BookingBO<T> {

    private String middlewareUrl;
    private String path;
    @Autowired
    private RestTemplate restTemplate;
    private static final Log LOG = LogFactory.getLog(DataValidationController.class);

    /**
     * 
     */
    public BookingBOImpl() {
        super();
    }

    @Override
    public @ResponseBody Booking get(@PathVariable("id") String id, @PathVariable("lineOperator") String lineOperator,
            @PathVariable("unit") String unit, @PathVariable("user") String user, @PathVariable("role") String role)
            throws BOException {
        Booking booking = null;
        if (!StringUtils.isEmpty(id)) {
            // Busca bkg por user (orden de mandato)
            if ((!StringUtils.equals("null", user) && !StringUtils.isEmpty(user))
                    && (!StringUtils.equals("null", role) && !StringUtils.isEmpty(role))) {
                booking = restTemplate.getForObject(getServiceUrl() + "/{id}/user/{user}/role/{role}", Booking.class,
                        EncoderDecoder.encodeBase64(id), user, role);
            } else
            // Busca bkg por línea
            if (!StringUtils.equals("null", lineOperator) && !StringUtils.isEmpty(lineOperator)) {
                booking = restTemplate.getForObject(getServiceUrl() + "/{id}/{lineOperator}", Booking.class,
                        EncoderDecoder.encodeBase64(id), lineOperator);
            } else
            // Busca bkg sólo por unit
            if (!StringUtils.equals("null", unit) && !StringUtils.isEmpty(unit)) {
                booking = restTemplate.getForObject(getServiceUrl() + "/{id}/unit/{unit}", Booking.class,
                        EncoderDecoder.encodeBase64(id), unit);
            } else
            // Busca booking por nbr, truck, y vessel-phase != closed, canceled, departed.
            if ((!StringUtils.equals("null", user) && !StringUtils.isEmpty(user))
                    && (StringUtils.equals("null", role) || StringUtils.isEmpty(role))) {
                booking = restTemplate.getForObject(getServiceUrl() + "/{id}/user/{user}", Booking.class,
                        EncoderDecoder.encodeBase64(id), user);
            } else {
                // Bucar bkg por id
                booking = restTemplate.getForObject(getServiceUrl() + "/{id}", Booking.class,
                        EncoderDecoder.encodeBase64(id));
            }
        }
        return booking;
    }

    @Override
    public Boolean updateFlexFields(String id, BookingFlexFields bookingFlexFields) throws BOException {
        HttpEntity<BookingFlexFields> requestEntity = new HttpEntity<BookingFlexFields>(bookingFlexFields);
        ResponseEntity<Boolean> re = restTemplate.exchange(getServiceUrl() + "/flex/{id}", HttpMethod.PUT,
                requestEntity, Boolean.class, id);
        return re.getBody();
    }

    @Override
    public VesselVisit getBookingVesselVisit(String id) throws BOException {
        VesselVisit visit = null;
        if (!StringUtils.isEmpty(id)) {
            visit = restTemplate.getForObject(getServiceUrl() + "/{id}/vessel-visit", VesselVisit.class, id);
        }
        return visit;
    }

    protected String getServiceUrl() {
        System.out.println("########################## PATH #######################");
        System.out.println(getPath());
        System.out.println("########################## PATH #######################");
        return middlewareUrl + getPath();
    }

    public String getMiddlewareUrl() {
        return middlewareUrl;
    }

    public void setMiddlewareUrl(String middlewareUrl) {
        this.middlewareUrl = middlewareUrl;
    }

    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path;
    }

    public RestTemplate getRestTemplate() {
        return restTemplate;
    }

    public void setRestTemplate(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }
}
