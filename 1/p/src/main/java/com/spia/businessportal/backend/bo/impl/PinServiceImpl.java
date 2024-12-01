/*
 * Fluxit S.A
 * La Plata - Buenos Aires - Argentina
 * http://www.fluxit.com.ar
 * Author: leandro
 * Date:  9 de may. de 2016 - 3:48:28 p. m.
 */
package com.spia.businessportal.backend.bo.impl;

import java.util.Calendar;
import java.util.Date;
import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;

import com.spia.businessportal.common.entities.Pin;
import com.spia.businessportal.common.entities.dto.PinImportServiceDTO;
import com.spia.businessportal.common.entities.dto.PinInfoServiceDTO;
import com.spia.businessportal.service.PinService;

import ar.com.fluxit.framework.business.generic.GenericService;
import ar.com.fluxit.framework.common.exception.BusinessException;

/**
 * @author juan.torrengo@fluxit.com.ar
 *
 */
public class PinServiceImpl implements PinService {

    private static final Log LOG = LogFactory.getLog(PinServiceImpl.class);
    @Autowired
    private GenericService<Pin> pinBO;
    @Autowired
    private SessionFactory sessionFactory;

    @Override
    public void processQueue() {
        Session session = sessionFactory.openSession();
        List<Pin> pins = null;
        Calendar cal = Calendar.getInstance();
        cal.add(Calendar.MONTH, -1);
        Date monthAgo = cal.getTime();
        try {
            String queryString = "FROM Pin ";
            String where = "WHERE active = true AND created_at < :monthAgo";
            queryString = queryString + where;
            Query query = session.createQuery(queryString);
            query.setDate("monthAgo", monthAgo);
            pins = query.list();
        } catch (Exception e) {
            LOG.error("Se produjo un error al recuperar los pines", e);
        } finally {
            session.close();
        }
        for (Pin pin : pins) {
            try {
                pin.setActive(false);
                this.getPinBO().saveOrUpdate(pin);
            } catch (BusinessException e) {
                LOG.error("Se produjo un error al actualizar los pines con más de un mes de creación", e);
            }
        }
    }

    public GenericService<Pin> getPinBO() {
        return pinBO;
    }

    public void setPinBO(GenericService<Pin> pinBO) {
        this.pinBO = pinBO;
    }

    @Override
    public List<PinImportServiceDTO> searchPin(String pinNbr) throws Exception {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public PinInfoServiceDTO[] searchPinInfo(String pinNbr, String pinUnitList) throws Exception {
        // TODO Auto-generated method stub
        return null;
    }

}
