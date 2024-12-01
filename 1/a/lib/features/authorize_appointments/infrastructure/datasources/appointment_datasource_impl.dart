

import 'dart:convert';

import 'package:dio/dio.dart';
import 'package:portal/config/config.dart';
import 'package:portal/core/utils/encryption/encrytion_service.dart';
import 'package:portal/features/auth/domain/domain.dart';
import 'package:portal/features/auth/infrastructure/infrastructure.dart';
import 'package:portal/features/authorize_appointments/domain/domain.dart';
import '../mappers/appointment_mapper.dart';

class AppointmentDatasourceImpl extends AppoinmentDatasource{
  
  final encrytionService = EncrytionService();
    
    late final Dio dio;
    final User user;

    AppointmentDatasourceImpl({
        required this.user,
    }) : dio = Dio(
      BaseOptions( 
        baseUrl: Enviroment.apiUrl,
        headers: {
          'Authorization': 'Bearer ${user.token}',
          'X-Adulce': 'false',
        }
      )
    );

  
  @override
  Future<List<Appointment>> getAppointmentsByClient(String nitCompany) async {

     try{
        final requestBody = {
          'queryName': 'getAppoitmentConsigneeMovil',
          'parameters': [
            {
              'parameterId': 1,
              'value': nitCompany,
              'type': 'String'
            }
          ]
        };
  
       //final bodyEncript = encrytionService.encrypt(requestBody.toString());

        //print('body $bodyEncript');

        final response = await dio.post(
          '/services/Y2FrZQ==', 
          options: Options(
            method: 'POST'
          ),
          data: requestBody
        );

        final List<Appointment> appointments = [];

        if(response.data['success'].toString() == 'true'){

          for (var appoinment in response.data['result'] ?? []) {
            appointments.add( AppointmentMapper.jsonToEntity(appoinment) );
          }
        }

        return appointments;
    }
    catch(e){
      throw CustomError('No se pudieron obtener las citas pendientes por autorizar, contacte al administrador');
    }
  }
  
  @override
  Future<bool> authorizeAppointments(List<Appointment> listAppointments) async{

  List<Map<String, String>> freights = listAppointments.map((appointment){
      return {
        'type':appointment.type,
        'freight':appointment.freight,
      };
  }).toList();




var data = json.encode({
    "groovyName": "SPIAMobileAutorizationAppoitment",
    "parameters": [
        {
            "parameterId": "infoFreights",
            "value": {
                "userName": user.userName,
                "freights": freights
            }
        }
    ]
});

//  final response = await dio.post(
//           '/services/Y2FrZQ==', 
//           options: Options(
//             method: 'POST'
//           ),
//           data: data
//         );

    print('$data');
    print('----------------------************---------------------');
    print(data.toString());
    print(this.user.toJson());
    // TODO: implement authorizeAppoinments
    throw UnimplementedError();
  }
  

  // List<dinamic> getAppointmentsToAutorize(){

  // }
  
 
}