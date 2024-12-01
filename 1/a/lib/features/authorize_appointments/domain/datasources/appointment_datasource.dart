
import 'package:portal/features/authorize_appointments/domain/entities/appointment.dart';

abstract class AppoinmentDatasource {

  Future <List<Appointment>> getAppointmentsByClient( String nitCompany);
  Future <bool> authorizeAppointments(List<Appointment> listAppoinments);



}