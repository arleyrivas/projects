package com.spia.businessportal.backend.bo;

public interface PingBO {

    /**
     * Verify if the app is connected to database
     * 
     * @return {@link Boolean}
     */
    public Boolean isConntectedBD();

    public PingBO getPingBO();

    public void setPingBO(PingBO pingBO);

}
