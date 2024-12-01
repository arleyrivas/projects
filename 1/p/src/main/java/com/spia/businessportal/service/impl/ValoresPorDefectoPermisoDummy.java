package com.spia.businessportal.service.impl;

import java.util.ArrayList;
import java.util.List;

import com.spia.businessportal.common.entities.dto.HBLPinDTO;
import com.spia.businessportal.common.entities.dto.HBLServiceDTO;
import com.spia.services.entities.CargoLot;
import com.spia.services.entities.HBL;

public class ValoresPorDefectoPermisoDummy {

    public static HBLPinDTO LlenarValoresPorDefectoDummy() {

    	HBLPinDTO hbl = new HBLPinDTO();
        List<CargoLot> cargoLotList = new ArrayList<CargoLot>();
        CargoLot cargolot = new CargoLot();

        cargolot.setId(1);
        cargolot.setPeso(0.200);
        cargolot.setCantidad(20);
        cargolot.setDestino("Bogota");
        cargolot.setSeparacion(1);
        cargolot.setDeudas(true);
        cargolot.setPermisos(true);
        cargolot.setFacturacion(true);
        cargolot.setCargoLotId("ABC000001");
        cargoLotList.add(cargolot);

        cargolot = new CargoLot();

        cargolot.setId(2);
        cargolot.setPeso(0.300);
        cargolot.setCantidad(20);
        cargolot.setDestino("Cali");
        cargolot.setSeparacion(1);
        cargolot.setDeudas(true);
        cargolot.setPermisos(true);
        cargolot.setFacturacion(true);
        cargolot.setCargoLotId("ABC000002");
        cargoLotList.add(cargolot);
        cargolot = new CargoLot();

        cargolot.setId(3);
        cargolot.setPeso(0.400);
        cargolot.setCantidad(20);
        cargolot.setDestino("Medellin");
        cargolot.setSeparacion(2);
        cargolot.setDeudas(false);
        cargolot.setPermisos(false);
        cargolot.setFacturacion(false);
        cargolot.setCargoLotId("ABC000003");
        cargoLotList.add(cargolot);

        cargolot = new CargoLot();
        cargolot.setId(4);
        cargolot.setPeso(0.500);
        cargolot.setCantidad(20);
        cargolot.setDestino("Medellin");
        cargolot.setSeparacion(2);
        cargolot.setDeudas(false);
        cargolot.setPermisos(false);
        cargolot.setFacturacion(false);
        cargolot.setCargoLotId("ABC000004");
        cargoLotList.add(cargolot);

        cargolot = new CargoLot();
        cargolot.setId(5);
        cargolot.setPeso(0.600);
        cargolot.setCantidad(20);
        cargolot.setDestino("");
        cargolot.setDeudas(true);
        cargolot.setPermisos(true);
        cargolot.setFacturacion(false);
        cargolot.setCargoLotId("ABC000005");
        cargoLotList.add(cargolot);

//        hbl.setBuque("MSC AGRIGENTO");
//        hbl.setNbr("NX677ANX677A");
//        hbl.setImportador("845004933 -- IMPORTADOR CARGA");
//        hbl.setCategory("IMPO");
//        hbl.setPin("000000");
//        hbl.setCargolots(cargoLotList);

        return hbl;

    }

}
