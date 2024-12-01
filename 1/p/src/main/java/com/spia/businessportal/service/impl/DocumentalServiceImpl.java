package com.spia.businessportal.service.impl;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;

import com.spia.businessportal.backend.bo.QuerysBO;
import com.spia.businessportal.common.entities.Documentation;
import com.spia.businessportal.common.entities.dto.DocumentationHibernateDTO;
import com.spia.businessportal.common.entities.dto.DocumentationPlanillaDTO;
import com.spia.businessportal.common.entities.dto.QuerysDTO;
import com.spia.businessportal.common.entities.dto.QuerysParameterDTO;
import com.spia.businessportal.common.entities.dto.QuerysResponseDTO;
import com.spia.businessportal.common.filters.DocumentationFilter;
import com.spia.businessportal.common.utils.EncoderDecoder;
import com.spia.businessportal.service.DocumentalService;

import ar.com.fluxit.framework.business.generic.GenericService;
import ar.com.fluxit.framework.common.exception.BusinessException;
import ar.com.fluxit.framework.common.filter.Page;

public class DocumentalServiceImpl implements DocumentalService {
	@Autowired
	private QuerysBO querysBO;

	private static final Log LOG = LogFactory.getLog(DocumentalServiceImpl.class);
	@Autowired
	private GenericService<Documentation> documentalBO;

	@Override
	public void processQueue() {
		try {
			DocumentationFilter filter = new DocumentationFilter();
			filter.setTimeLocked(new Date());
			filter.setLocked(new Boolean(true));
			List<Documentation> documentations = documentalBO.search(filter, new Page(1, 0)).getResult();
			for (Documentation d : documentations) {
				d.setLocked(false);
				d.setLockedDate(null);
				documentalBO.saveOrUpdate(d);
			}
		} catch (BusinessException e) {
			LOG.error(e.getMessage(), e);
		}
	}

	@Override
	public List<DocumentationHibernateDTO> findPaginated(int page) throws Exception {

		QuerysDTO request = new QuerysDTO();
		List<DocumentationHibernateDTO> documentation = null;
		List<QuerysParameterDTO> parameters = new ArrayList<>();
		QuerysParameterDTO querysParameterDTO = new QuerysParameterDTO();
		Integer offset = 0;		
		if (page > 1) {
			for (int factor = 1; factor < page; factor++) {
				offset = offset + 20;
			}			
		}
		querysParameterDTO.setValue(offset.toString());
		querysParameterDTO.setType("Integer");
		querysParameterDTO.setParameterId(1);
		request.setQueryName("documentation");
		parameters.add(querysParameterDTO);
		request.setParameters(parameters);
		QuerysResponseDTO querysResponseDTO = querysBO.executeQuery(request);
		documentation = (List<DocumentationHibernateDTO>) querysResponseDTO.getResult();
		return documentation;
	}

	@Override
	public List<DocumentationHibernateDTO> searchDocument(String nbr) throws Exception {

		nbr = EncoderDecoder.decodeBase64(nbr);
		QuerysDTO request = new QuerysDTO();
		List<DocumentationHibernateDTO> documentation = null;
		List<QuerysParameterDTO> parameters = new ArrayList<>();
		QuerysParameterDTO querysParameterDTO = new QuerysParameterDTO();
		querysParameterDTO.setValue(nbr);
		querysParameterDTO.setType("String");
		querysParameterDTO.setParameterId(1);
		request.setQueryName("documentationSearch");
		parameters.add(querysParameterDTO);
		request.setParameters(parameters);
		QuerysResponseDTO querysResponseDTO = querysBO.executeQuery(request);
		documentation = (List<DocumentationHibernateDTO>) querysResponseDTO.getResult();
		return documentation;
	}

	@Override
	public List<DocumentationPlanillaDTO> getDocumentationPlanilla(String booking, String container) throws Exception {

		QuerysDTO request = new QuerysDTO();
		List<DocumentationPlanillaDTO> documentation = null;
		List<QuerysParameterDTO> parameters = new ArrayList<>();
		QuerysParameterDTO bookingParameterDTO = new QuerysParameterDTO();
		QuerysParameterDTO containerParameterDTO = new QuerysParameterDTO();
		bookingParameterDTO.setValue(booking);
		bookingParameterDTO.setType("String");
		bookingParameterDTO.setParameterId(1);
		containerParameterDTO.setValue(container);
		containerParameterDTO.setType("String");
		containerParameterDTO.setParameterId(2);
		request.setQueryName("documentationPlanilla");
		parameters.add(bookingParameterDTO);
		parameters.add(containerParameterDTO);
		request.setParameters(parameters);
		QuerysResponseDTO querysResponseDTO = querysBO.executeQuery(request);
		documentation = (List<DocumentationPlanillaDTO>) querysResponseDTO.getResult();
		return documentation;
	}

}
