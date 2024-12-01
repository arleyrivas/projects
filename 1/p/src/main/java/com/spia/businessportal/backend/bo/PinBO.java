/**
 * 
 */
package com.spia.businessportal.backend.bo;

import java.text.ParseException;
import java.util.Date;
import java.util.List;

import com.spia.businessportal.common.entities.Pin;
import com.spia.businessportal.common.entities.User;
import com.spia.businessportal.common.entities.dto.PinDTO;
import com.spia.businessportal.common.entities.dto.autentication.ldap.UsuarioLoginDTO;

import ar.com.fluxit.framework.business.generic.GenericService;
import ar.com.fluxit.framework.common.exception.BusinessException;

/**
 * @author diego
 *
 * Interfaz de base de datos para pin
 * Si bien por el uso de generics normalmente no hace falta declarar estas interfaces,
 * en este caso fue necesario dado que se realizan numerosas operaciones que no están comprendidas dentro de las primitivas.
 */
public interface PinBO extends GenericService<Pin> {

	/**
	 * Genera los pins correspondientes para units y truckingCompanies
	 * 
	 * @param pinDTO pin a generar
	 * @param currentUser usuario que lo generó
	 * @return {@link com.spia.businessportal.common.entities.Pin}
	 * @throws BusinessException cuando ocurre un error en base de datos.
	 * @throws ParseException 
	 */
	List<Pin> generate(PinDTO pinDTO, UsuarioLoginDTO currentUser) throws BusinessException, ParseException;
	
	/**
	 * Cancela todos los pins.
	 * 
	 * @param pinNbrs pins que se van a cancelar.
	 * @throws BusinessException cuando ocurre un error en la base de datos.
	 */
	void cancelPinForUnits(List<String> pinNbrs) throws BusinessException;
	
	/**
	 * Filtro de pin.
	 * 
	 * @param filterByConsignee booleano que indica si hay que buscar por consignee
	 * @param filterByType booleano que indica si hay que buscar por tipo (impo/expo/edo)
	 * @param filterByState booleano que indica si hay que buscar por estado (activo/inactivo)
	 * @param currentUser usuario actual
	 * @param units units pertenecientes al consignee.
	 * @param expo booleano que indica que hay que buscar sólo por pins de expo
	 * @param impo booleano que indica que hay que buscar sólo pins de impo.
	 * @param edo booleano que indica que hay que buscar sólo pins de edo.
	 * @param breakbulk booleano que indica que hay que buscar sólo pins carga suelta.
	 * @param active booleano que indica si se están buscando activos o inactivos.
	 * @param fromDate fecha que indica que hay que buscar por fecha desde.
	 * @param toDate fecha que indica que hay que buscar por fecha hasta
	 * @param bl indica que hay que buscar por bl
	 * @return {@link com.spia.businessportal.common.entities.Pin}
	 */
	public List<Pin> filterPin(boolean filterByConsignee, boolean filterByType, boolean filterByState, 
			UsuarioLoginDTO currentUser, List<String> units, boolean expo, boolean impo, boolean edo, boolean breakbulk, boolean active,
			Date fromDate, Date toDate, String bl) throws BusinessException;
	
}
