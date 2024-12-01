import 'package:portal/features/authorize_appointments/domain/domain.dart';

class AppoinmentRepositoryImpl extends AppointmentRepository{

  final AppoinmentDatasource datasource;

  AppoinmentRepositoryImpl(this.datasource);
  
  @override
  Future<List<Appointment>> getAppointmentsByClient(String nitCompany) {
    return datasource.getAppointmentsByClient(nitCompany);
  }
  
  @override
  Future<bool> authorizeAppointments(List<Appointment> listAppoinments) {
    return datasource.authorizeAppointments(listAppoinments);
  }

}