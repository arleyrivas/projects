package com.spia.businessportal.backend.bo.impl;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;

import com.spia.businessportal.backend.bo.PingBO;

public class PingBOImpl implements PingBO {

    private static final Log LOG = LogFactory.getLog(PingBOImpl.class);

    @Autowired
    private SessionFactory sessionFactory;

    private transient PingBO pingBO;

    @Override
    public PingBO getPingBO() {
        return pingBO;
    }

    @Override
    public void setPingBO(PingBO pingBO) {
        this.pingBO = pingBO;
    }

    /**
     * 
     */
    public PingBOImpl() {
        super();
    }

    @Override
    public Boolean isConntectedBD() {

        Session session = null;
        Boolean isConnetedBD = false;
        try {
            session = sessionFactory.openSession();
            isConnetedBD = session.isConnected();
        } catch (Exception e) {
            LOG.error("Error conecting to the data base");
        } finally {
            if (session != null) {
                session.close();
            }
        }
        return isConnetedBD;
    }

}
