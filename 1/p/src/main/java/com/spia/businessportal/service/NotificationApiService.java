/*
 * Assert Solutions
 * Bogota - Colombia
 * http://www.assertsolutions.com
 * Author: Elvis Fontalvo
 * Date:  26 de may. de 2021 - 10:26:03 p.m.
 */
package com.spia.businessportal.service;

public interface NotificationApiService {
    /**
     * Service to erase active notifications more than a month old.
     * 
     */
    void processQueue();

}
