package com.spia.businessportal.service.impl;

import java.util.ArrayList;
import java.util.List;

import com.spia.businessportal.common.entities.dto.HBLPinDTO;
import com.spia.businessportal.common.entities.dto.HBLServiceDTO;
import com.spia.services.entities.CargoLot;
import com.spia.services.entities.HBL;

public class ValoresBDummy {

    public static HBLPinDTO LlenarValoresBDummy() {

    	HBLPinDTO hbl = new HBLPinDTO();
        List<CargoLot> cargoLotList = new ArrayList<CargoLot>();
        CargoLot cargolot = new CargoLot();

        cargolot.setId(1);
        cargolot.setPeso(0.200);
        cargolot.setCantidad(20);
        cargolot.setDestino("");
        cargolot.setSeparacion(1);
        cargolot.setDeudas(false);
        cargolot.setPermisos(false);
        cargolot.setFacturacion(false);
        cargolot.setCargoLotId("ABC000001");
        cargoLotList.add(cargolot);
        cargolot = new CargoLot();

        cargolot.setId(2);
        cargolot.setPeso(0.200);
        cargolot.setCantidad(20);
        cargolot.setDestino("");
        cargolot.setSeparacion(1);
        cargolot.setDeudas(false);
        cargolot.setPermisos(false);
        cargolot.setFacturacion(false);
        cargolot.setCargoLotId("ABC000001");
        cargoLotList.add(cargolot);
        cargolot = new CargoLot();

        cargolot.setId(3);
        cargolot.setPeso(0.200);
        cargolot.setCantidad(20);
        cargolot.setDestino("");
        cargolot.setSeparacion(1);
        cargolot.setDeudas(false);
        cargolot.setPermisos(false);
        cargolot.setFacturacion(false);
        cargolot.setCargoLotId("ABC000001");
        cargoLotList.add(cargolot);
        cargolot = new CargoLot();

        cargolot.setId(4);
        cargolot.setPeso(0.200);
        cargolot.setCantidad(20);
        cargolot.setDestino("");
        cargolot.setSeparacion(1);
        cargolot.setDeudas(false);
        cargolot.setPermisos(false);
        cargolot.setFacturacion(false);
        cargolot.setCargoLotId("ABC000001");
        cargoLotList.add(cargolot);
        cargolot = new CargoLot();

        cargolot.setId(5);
        cargolot.setPeso(0.200);
        cargolot.setCantidad(20);
        cargolot.setDestino("");
        cargolot.setSeparacion(1);
        cargolot.setDeudas(false);
        cargolot.setPermisos(false);
        cargolot.setFacturacion(false);
        cargolot.setCargoLotId("ABC000001");
        cargoLotList.add(cargolot);
        cargolot = new CargoLot();

        cargolot.setId(6);
        cargolot.setPeso(0.200);
        cargolot.setCantidad(20);
        cargolot.setDestino("");
        cargolot.setSeparacion(1);
        cargolot.setDeudas(false);
        cargolot.setPermisos(false);
        cargolot.setFacturacion(false);
        cargolot.setCargoLotId("ABC000001");
        cargoLotList.add(cargolot);
        cargolot = new CargoLot();

        cargolot.setId(7);
        cargolot.setPeso(0.200);
        cargolot.setCantidad(20);
        cargolot.setDestino("");
        cargolot.setSeparacion(2);
        cargolot.setDeudas(false);
        cargolot.setPermisos(false);
        cargolot.setFacturacion(false);
        cargolot.setCargoLotId("ABC000001");
        cargoLotList.add(cargolot);
        cargolot = new CargoLot();

        cargolot.setId(8);
        cargolot.setPeso(0.200);
        cargolot.setCantidad(20);
        cargolot.setDestino("");
        cargolot.setSeparacion(2);
        cargolot.setDeudas(false);
        cargolot.setPermisos(false);
        cargolot.setFacturacion(false);
        cargolot.setCargoLotId("ABC000001");
        cargoLotList.add(cargolot);
        cargolot = new CargoLot();

        cargolot.setId(9);
        cargolot.setPeso(0.200);
        cargolot.setCantidad(20);
        cargolot.setDestino("");
        cargolot.setDeudas(true);
        cargolot.setPermisos(true);
        cargolot.setFacturacion(false);
        cargolot.setCargoLotId("ABC000001");
        cargoLotList.add(cargolot);
        cargolot = new CargoLot();

        cargolot.setId(10);
        cargolot.setPeso(0.200);
        cargolot.setCantidad(20);
        cargolot.setDestino("");
        cargolot.setDeudas(true);
        cargolot.setPermisos(true);
        cargolot.setFacturacion(false);
        cargolot.setCargoLotId("ABC000001");
        cargoLotList.add(cargolot);
        cargolot = new CargoLot();

//        hbl.setBuque("MSC AGRIGENTO");
//        hbl.setNbr("NX677ANX677A");
//        hbl.setImportador("845004933 -- IMPORTADOR CARGA");
//        hbl.setCategory("IMPO");
//        hbl.setPin("000000");
//        hbl.setCargolots(cargoLotList);

        return hbl;

    }

}
