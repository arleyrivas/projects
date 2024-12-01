package com.spia.businessportal.backend.bo.impl;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import com.spia.businessportal.backend.bo.PrivilegesBO;
import com.spia.businessportal.backend.bo.SecurityEsbBO;
import com.spia.businessportal.common.entities.dto.PrivilegioResponseDTO;
import com.spia.services.security.esb.entities.SecurityEsbResponse;

import ar.com.fluxit.framework.common.exception.BusinessException;

public class PrivilegesBOImpl implements PrivilegesBO {

	private static final Logger LOG = LoggerFactory.getLogger(PrivilegesBOImpl.class);

	//////////////////////////////
	// Bean de ESB de seguridad //
	//////////////////////////////
	@Autowired
	private SecurityEsbBO<SecurityEsbResponse> securityEsbBO;

	@Override
	public PrivilegioResponseDTO getConfigPrivilegesUser(String user) throws BusinessException {
		try {
			SecurityEsbResponse<List<PrivilegioResponseDTO>> userInfo = this.getSecurityEsbBO()
					.getConfigPrivileges(user, false);
			List<PrivilegioResponseDTO> variable = new ArrayList<>();

			variable = (List<PrivilegioResponseDTO>) (List<?>) userInfo.getResult();

			if (variable != null && !variable.isEmpty()) {
					return variable.get(0);
			}

		} catch (BusinessException e) {
			LOG.info("Ocurrió un error al consultar los de privilegios configurables para el usuario '" + user + "'.");

		}
		
		return new PrivilegioResponseDTO();
	}

	public SecurityEsbBO<SecurityEsbResponse> getSecurityEsbBO() {
		return securityEsbBO;
	}

	public void setSecurityEsbBO(SecurityEsbBO<SecurityEsbResponse> securityEsbBO) {
		this.securityEsbBO = securityEsbBO;
	}

}
