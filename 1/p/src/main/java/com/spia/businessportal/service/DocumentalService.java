package com.spia.businessportal.service;

import java.util.List;

import com.spia.businessportal.common.entities.dto.DocumentationHibernateDTO;
import com.spia.businessportal.common.entities.dto.DocumentationPlanillaDTO;

public interface DocumentalService {

    public List<DocumentationHibernateDTO> findPaginated(int page) throws Exception;

    public List<DocumentationHibernateDTO> searchDocument(String nbr) throws Exception;

    public List<DocumentationPlanillaDTO> getDocumentationPlanilla(String booking, String container) throws Exception;

    /**
     * Desbloquea todos los documentos bloqueados que hayan estado en ese estado por más tiempo del configurado.
     * 
     */
    void processQueue();

}
