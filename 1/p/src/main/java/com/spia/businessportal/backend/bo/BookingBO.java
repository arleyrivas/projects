package com.spia.businessportal.backend.bo;

import org.springframework.web.bind.annotation.ResponseBody;

import com.spia.services.entities.Booking;
import com.spia.services.entities.BookingFlexFields;
import com.spia.services.entities.VesselVisit;
import com.spia.services.exception.BOException;

import ar.com.fluxit.framework.common.exception.BusinessException;

/**
 * 
 * @author Leandro
 *
 * Interfaz para consumir los servicios de booking.
 * Si bien por el uso de generics normalmente no hace falta declarar estas interfaces,
 * en este caso fue necesario dado que el método get de booking no era primitivo, ya que para
 * identificar unívocamente a un booking no alcanza con el id, es necesario el par combinado id-line operator. 
 */
public interface BookingBO<T> extends GenericMdwBO<T>{

	/**
	 * Retorna el booking dado su id y line operator
	 * o dado su agente o transportador	 * 
	 * @param id numero de booking
	 * @param lineOperator linea operadora del booking
	 * @param user - Puede ser el agente o trasnportador
	 * @param role - Rol del usuario
	 * @return {@link Booking}
	 * @throws BusinessException cuando ocurre un error en los servicios de mdw.
	 * @throws BOException 
	 */
	public @ResponseBody Booking get(String id, String lineOperator, String unit, String user, String role) throws BOException;
	
	/**
	 * Actualiza los campos flex del booking
	 * 
	 * @param id
	 * @param bookingFlexFields
	 * @return {@link Booking}
	 * @throws BOException
	 */
	public @ResponseBody Boolean updateFlexFields(String id, BookingFlexFields bookingFlexFields) throws BOException;
	
	/**
	 * Retorna el vessel visit de un booking
	 * 
	 * @param id
	 * @return {@link VesselVisit}
	 */
	public @ResponseBody VesselVisit getBookingVesselVisit(String id) throws BOException;
	
	/**
	 * Setea el path del servicio del mdw.
	 * 
	 * @param path path del servicio mdw.
	 */
	void setPath(String path);
}
