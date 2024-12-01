

import 'package:portal/features/authorize_appointments/domain/domain.dart';

class AppointmentMapper {
  static jsonToEntity( Map<String, dynamic> json) => Appointment(
    group: int.parse( json['grupo'].toString() ), 
    type: json['tipo'], 
    gkeyTruckVisitAppoinment: json['tva_gkey'], 
    freight: json['unit'], 
    reqTime: json['reqTime'], 
    truckCompany: json['truckCo'], 
    truckPlate: json['truckPlate'], 
    driverName: json['driverName']
    );
}

// //   {
// // "grupo": "1",
// // "tipo": "CON"
// // "tva_gkey": "1442300",
// // "unit": "ABCD1236544,QWER741852",
// // "reqTime": "SEP-11 00:00",
// // "truckCo": "TRANSPORTE XXXX",
// // "truckPlate": "A1223",
// // "diverName": "PEPITO PEREZ"
// // },
