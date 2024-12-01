package com.spia.businessportal.service;

import javax.jws.WebService;

/***
 * Services to verify connection to server app and databases
 *
 */
@WebService
public interface PingService {

    /**
     * Service to verify if connetion app is OK. True reponse if connetion is success
     */
    public String pingApp();

    /**
     * Service to verify if connetion to databases servers is OK. True reponse if connetion is success
     */
    public String pingBD();

}
