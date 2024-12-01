package com.spia.businessportal.backend.bo.impl;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang.StringUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.client.RestTemplate;

import com.spia.businessportal.backend.bo.GenericMdwBO;
import com.spia.businessportal.common.entities.dto.GenericResponseDTO;
import com.spia.businessportal.common.entities.dto.SOResponseDTO;
import com.spia.businessportal.web.controller.DataValidationController;
import com.spia.services.entities.UnitFacilityVisitDTO;

import ar.com.fluxit.framework.common.exception.BusinessException;

/**
 * 
 * @author leandro Implementación de la interfaz GenericMdwBO
 *
 * @param <T>
 *            Objeto genérico que alimentará al bean.
 */
public class GenericMdwBOImpl<T> implements GenericMdwBO<T> {

    private String middlewareUrl;
    private String path;
    @Autowired
    private RestTemplate restTemplate;
    private Class<T> clazz;
    private Class<T[]> arrayClazz;
    private static final Log LOG = LogFactory.getLog(DataValidationController.class);

    /**
     * 
     */
    public GenericMdwBOImpl() {
        super();
    }

    @Override
    public @ResponseBody List<T> all() throws BusinessException {
        return Arrays.asList(restTemplate.getForObject(getServiceUrl(), arrayClazz));
    }

    @Override
    public @ResponseBody List<T> all(String path) throws BusinessException {
        return Arrays.asList(restTemplate.getForObject(getServiceUrl() + "/" + path, arrayClazz));
    }

    @Override
    public @ResponseBody T get(@PathVariable("id") String id) throws BusinessException {
        T t = null;
        LOG.info((getServiceUrl()) + "/" + id);
        if (!StringUtils.isEmpty(id)) {
            t = restTemplate.getForObject(getServiceUrl() + "/{id}", clazz, id);
        }
        return t;
    }

    @Override
    public @ResponseBody T save(@RequestBody T entity) throws BusinessException {
        return restTemplate.postForObject(getServiceUrl(), entity, clazz);
    }

    @Override
    public @ResponseBody T saveUfvReference(@PathVariable("reference") String reference, @RequestBody T entity)
            throws BusinessException {
        return restTemplate.postForObject(getServiceUrl() + "/{reference}", entity, clazz, reference);
    }

    @Override
    public @ResponseBody T update(@PathVariable("id") String id, @RequestBody T entity) throws BusinessException {
        Map<String, String> vars = new HashMap<String, String>();
        vars.put("id", id);
        return restTemplate.postForObject(getServiceUrl() + "/{id}", entity, clazz, vars);
    }

    protected String getServiceUrl() {
        System.out.println("########################## PATH #######################");
        System.out.println(getPath());
        System.out.println("########################## PATH #######################");
        return middlewareUrl + getPath();
    }

    public void setRestTemplate(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    protected RestTemplate getRestTemplate() {
        return restTemplate;
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

    public Class<T> getClazz() {
        return clazz;
    }

    public void setClazz(Class<T> clazz) {
        this.clazz = clazz;
    }

    @Override
    public void setArrayClazz(Class<T[]> arrayClazz) {
        this.arrayClazz = arrayClazz;
    }

    public Class<T[]> getArrayClazz() {
        return this.arrayClazz;
    }
    
    @Override
    public @ResponseBody List<T> getAgentsByIdOrName(@PathVariable("id") String id, @PathVariable("name") String name) throws BusinessException {
    	List<T> t = null;
        LOG.info((getServiceUrl()) + "/id/" + id+"/name/" + name);
        if (!StringUtils.isEmpty(id)) {
        	return Arrays.asList(restTemplate.getForObject(getServiceUrl() + "/id/{id}/name/{name}", arrayClazz, id, name));
        }
        return t;
    }
    

    @Override
    public @ResponseBody T getShipperExporter(@RequestBody T entity) throws BusinessException {
        return restTemplate.postForObject(getServiceUrl()+ "/exporter", entity, clazz);
    }
    
    @Override
    public @ResponseBody List<T> getShipperByIdOrName(@PathVariable("id") String id, @PathVariable("name") String name) throws BusinessException {
    	List<T> t = null;
        LOG.info((getServiceUrl()) + "/id/" + id+"/name/" + name);
        if (!StringUtils.isEmpty(id)) {
        	return Arrays.asList(restTemplate.getForObject(getServiceUrl() + "/id/{id}/name/{name}", arrayClazz, id, name));
        }
        return t;
    }
    
    @Override
    public @ResponseBody T saveUfv(@RequestBody T entity)
            throws BusinessException {
        return restTemplate.postForObject(getServiceUrl() + "/save", entity, clazz);
    }

	@Override
	public T saveUfv(UnitFacilityVisitDTO unitFacilityVisitDTO) throws BusinessException {
		// TODO Auto-generated method stub
		return restTemplate.postForObject(getServiceUrl() + "/save", unitFacilityVisitDTO, clazz);
	}


	
	@Override
	public GenericResponseDTO<String> updateUfv(UnitFacilityVisitDTO unitFacilityVisitDTO) throws BusinessException {
		// TODO Auto-generated method stub
		return restTemplate.postForObject(getServiceUrl() + "/update", unitFacilityVisitDTO, GenericResponseDTO.class);
	}
	
	@Override
	public GenericResponseDTO<String> getUfv(UnitFacilityVisitDTO unitFacilityVisitDTO) throws BusinessException {
		// TODO Auto-generated method stub
		return restTemplate.postForObject(getServiceUrl() + "/get", unitFacilityVisitDTO, GenericResponseDTO.class);
	}

    // ASSIST 13-04-2022
    @Override
    public @ResponseBody T getReporter(@PathVariable("unitId") String unitId, @PathVariable("agentId") String agentId) throws BusinessException {
        T t = null;
        LOG.info((getServiceUrl()) + "/getContainerDamageReport/" + unitId + "/" + agentId);
        if (!StringUtils.isEmpty(unitId) && !StringUtils.isEmpty(agentId)) {
            t = restTemplate.getForObject(getServiceUrl() + "/getContainerDamageReport/{unitId}/{agentId}", clazz, unitId, agentId);
        }
        return t;
    }
    
    
}
