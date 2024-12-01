import 'package:portal/features/authorize_appointments/domain/entities/appointment.dart';

abstract class AppointmentRepository {

  Future<List<Appointment>> getAppointmentsByClient( String nitCompany );
  Future <bool> authorizeAppointments( List<Appointment> listAppoinments);
  
}