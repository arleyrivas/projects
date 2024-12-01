/*
 * Fluxit S.A
 * La Plata - Buenos Aires - Argentina
 * http://www.fluxit.com.ar
 * Author: leandro
 * Date:  9 de dic. de 2015 - 10:33:42 a. m.
 */
package com.spia.businessportal.common.utils;

import com.spia.services.entities.Category;
import com.spia.services.entities.EquipmentType;
import com.spia.services.entities.Physical;
import com.spia.services.entities.UnitFacilityVisit;

/**
 * Clase utilitaria para "vacíos", realiza operaciones comunes para Edo y Ero.
 * @author leandro
 *
 */
public class EmptyUtils {

	/**
	 * Construye un unit vacío a partir de las especificaciones del edo/ero, su objetivo es poder abstraerse cuando
	 * en una órden no están especificados los units (sólo está especificada la cantidad) para que el manejo sea transparente
	 * tanto para el usuario final como para la aplicación.
	 * 
	 * @param category categoria del unit
	 * @param unitId numero de unit
	 * @param line linea del unit
	 * @param itemEquipmentType equipmentType del unit
	 * @return {@link UnitFacilityVisit}
	 */
	public static UnitFacilityVisit constructForOrder(Category category, int unitId, String line, EquipmentType itemEquipmentType){
		UnitFacilityVisit ufv = new UnitFacilityVisit();
		ufv.setId("C.Vacío "+unitId);
		ufv.setCategory(category);
		ufv.setFreightKind("Empty");
		ufv.setLine(line);
		
		com.spia.services.entities.Container container = new com.spia.services.entities.Container();
		Physical physical = new Physical();
		physical.setLengthMm(itemEquipmentType.getLengthMm());
		physical.setHeightMm(itemEquipmentType.getHeightMm());
		physical.setWidthMm(itemEquipmentType.getWidthMm());
		physical.setTareWeightKg(itemEquipmentType.getTareWeightKg());
		physical.setIsoGroup(itemEquipmentType.getIsoGroup());
		physical.setMaterial("UNKNOWN");
		physical.setIsInsulated("N");
		physical.setHasWheels("N");
		physical.setIsPermanentlyOutOfService("N");
		container.setPhysical(physical);
		container.setType(itemEquipmentType.getId());
		container.setId(ufv.getId());
		ufv.setContainer(container);
		return ufv;
	}
}
