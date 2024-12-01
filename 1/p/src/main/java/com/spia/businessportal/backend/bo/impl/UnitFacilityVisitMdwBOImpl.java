/*
 * Fluxit S.A
 * La Plata - Buenos Aires - Argentina
 * http://www.fluxit.com.ar
 * Author: leandro
 * Date:  21 de oct. de 2015 - 9:41:58 a. m.
 */
package com.spia.businessportal.backend.bo.impl;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.apache.commons.lang.StringUtils;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;

import com.google.gson.Gson;
import com.spia.businessportal.backend.bo.UnitFacilityVisitMdwBO;
import com.spia.businessportal.common.entities.Container;
import com.spia.services.entities.Booking;
import com.spia.services.entities.BookingFlexFields;
import com.spia.services.entities.ChargeableUnitEvents;
import com.spia.services.entities.UnitFacilityVisit;
import com.spia.services.entities.UnitFacilityVisitDefault;
import com.spia.services.entities.UnitStorageAndReeferDaysResponse;
import com.spia.businessportal.common.utils.EncoderDecoder;
import ar.com.fluxit.framework.common.exception.BusinessException;

/**
 * @author leandro
 *
 *         Implementación de la interfaz UnitFacilityVisitMdwBO
 */
public class UnitFacilityVisitMdwBOImpl<T> extends GenericMdwBOImpl<T> implements UnitFacilityVisitMdwBO<T> {

	/**
	 * 
	 */
	public UnitFacilityVisitMdwBOImpl() {
		super();
	}

	@Override
	public UnitFacilityVisit getUnitForImport(@PathVariable("id") String id, @PathVariable("user") String user)
			throws BusinessException {
		UnitFacilityVisit ufv = null;
		if (!StringUtils.isEmpty(id) && !StringUtils.isEmpty(user)) {
			ufv = (UnitFacilityVisit) this.getRestTemplate().getForObject(getServiceUrl() + "/import/{id}/{user}",
					this.getClazz(), id, user);
		}
		return ufv;
	}

	@Override
	public UnitFacilityVisit getUnitForExport(String id) throws BusinessException {
		UnitFacilityVisit ufv = null;
		if (!StringUtils.isEmpty(id)) {
			ufv = (UnitFacilityVisit) this.getRestTemplate().getForObject(getServiceUrl() + "/export/{id}",
					this.getClazz(), id);
		}
		return ufv;
	}

	@Override
	public UnitFacilityVisit getSingleUnitById(String id, String storage) throws BusinessException {
		UnitFacilityVisit ufv = null;
		if (!StringUtils.isEmpty(id)) {
			ufv = (UnitFacilityVisit) this.getRestTemplate().getForObject(getServiceUrl() + "/single/{id}/{storage}",
					this.getClazz(), id, storage);
		}
		return ufv;
	}

	@Override
	public UnitFacilityVisit getUnitForEro(String id) throws BusinessException {
		UnitFacilityVisit ufv = null;
		if (!StringUtils.isEmpty(id)) {
			ufv = (UnitFacilityVisit) this.getRestTemplate().getForObject(getServiceUrl() + "/ero/{id}",
					this.getClazz(), id);
		}
		return ufv;
	}

	@Override
	public boolean isInOrder(@PathVariable("id") String id) throws BusinessException {
		if (!StringUtils.isEmpty(id)) {
			return (boolean) this.getRestTemplate().getForObject(getServiceUrl() + "/is-in-edo-ero/{id}", Boolean.class,
					id);
		}
		throw new BusinessException();
	}

	@Override
	public boolean isUnitAdvised(@PathVariable("id") String id) throws BusinessException {
		if (!StringUtils.isEmpty(id)) {
			return (boolean) this.getRestTemplate().getForObject(getServiceUrl() + "/is-advised/{id}", Boolean.class,
					id);
		}
		throw new BusinessException();
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see
	 * com.spia.businessportal.backend.bo.UnitFacilityVisitMdwBO#isIsActivated(java.
	 * lang.String)
	 */
	@Override
	public boolean isActivated(@PathVariable("id") String id) throws BusinessException {
		if (!StringUtils.isEmpty(id)) {
			return (boolean) this.getRestTemplate().getForObject(getServiceUrl() + "/is-activated/{id}", Boolean.class,
					id);
		}
		throw new BusinessException();
	}

	@Override
	public List<String> getByConsignee(String consignee) throws BusinessException {
		List<String> units = null;
		if (!StringUtils.isEmpty(consignee)) {
			String[] arrUnits = this.getRestTemplate().getForObject(getServiceUrl() + "/consignee/{consignee}",
					String[].class, consignee);
			if (arrUnits != null && arrUnits.length > 0) {
				units = Arrays.asList(arrUnits);
			}
		}
		return units;
	}

	@Override
	public UnitFacilityVisit getByVesselId(@PathVariable("nbr") String nbr, @PathVariable("vesselId") String vesselId)
			throws BusinessException {
		UnitFacilityVisit ufv = null;
		if (!StringUtils.isEmpty(nbr) && !StringUtils.isEmpty(vesselId)) {
			ufv = (UnitFacilityVisit) this.getRestTemplate().getForObject(getServiceUrl() + "/{id}/vessel/{vesselId}",
					this.getClazz(), nbr, vesselId);
		}
		return ufv;
	}

	@Override
	public UnitStorageAndReeferDaysResponse getUnitStorageAndReeferDays(@PathVariable("id") String id)
			throws BusinessException {
		UnitStorageAndReeferDaysResponse unitStorageAndReeferDaysResponse = null;
		if (!StringUtils.isEmpty(id)) {
			unitStorageAndReeferDaysResponse = (UnitStorageAndReeferDaysResponse) this.getRestTemplate().getForObject(
					getServiceUrl() + "/storage-and-reefer-days/{id}", UnitStorageAndReeferDaysResponse.class, id);
		}
		return unitStorageAndReeferDaysResponse;
	}

	@Override
	public Boolean cancelPreadvise(String unitNbr) throws BusinessException {
		if (!StringUtils.isEmpty(unitNbr)) {
			HttpEntity<?> requestEntity = null;
			ResponseEntity<Boolean> re = this.getRestTemplate().exchange(
					getServiceUrl() + "/cancel-preadvise/{unitNbr}", HttpMethod.PUT, requestEntity, Boolean.class,
					unitNbr);
			return re.getBody();
		}
		throw new BusinessException();
	}

	@Override
	public UnitFacilityVisit getUnitForAssociateBooking(String nbr) throws BusinessException {
		UnitFacilityVisit ufv = null;
		if (!StringUtils.isEmpty(nbr)) {
			ufv = (UnitFacilityVisit) this.getRestTemplate().getForObject(getServiceUrl() + "/unit-for-booking/{id}",
					this.getClazz(), nbr);
		}
		return ufv;
	}

	@Override
	public List<String> getStorage(List<String> hblList) throws BusinessException {
		List<String> dateList = null;
		if (hblList.size() != 0) {
			String delim = ",";
			String res = String.join(delim, hblList);
			String encodeList = EncoderDecoder.encodeBase64(res);
			dateList = Arrays.asList(this.getRestTemplate().getForObject(getServiceUrl() + "/get-storage/{hblList}",
					String[].class, encodeList));
		}
		return dateList;
	}

}
