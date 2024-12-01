

import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:portal/features/auth/domain/domain.dart';
import 'package:portal/features/auth/presentation/providers/auth_provider.dart';
import 'package:portal/features/authorize_appointments/domain/domain.dart';
import 'appointments_repository_provider.dart';


 final appointmentsProvider = StateNotifierProvider<AppointmentsNotifier, AppointmentsState>((ref) {
  
  final appointmentsRepository = ref.watch( appoinmentRepositoryProvider );
  final user = ref.watch(authProvider).user;
  
  final notifier = AppointmentsNotifier(
    appointmentRepository: appointmentsRepository,
    user: user!,
  );
 
 // Cargar citas automáticamente al inicializar el Provider
  notifier.loadAppointments();

    return notifier;
 });
 



class AppointmentsNotifier extends StateNotifier<AppointmentsState>{
  
  final AppointmentRepository appointmentRepository;
  final User user;
  
  AppointmentsNotifier({
    required this.appointmentRepository,
    required this.user
  }): super( AppointmentsState() );

  
  Future loadAppointments() async {

    final nit = user.company.nit;

    if( state.isLoading ) return;

    state = state.copyWith( 
      isLoading: true
    );

    try{
      final appointments = await appointmentRepository.getAppointmentsByClient(nit); 

      if(appointments.isEmpty) {
        state = state.copyWith(
          isLoading: false,
        );
        return;
      }

      state = state.copyWith(
        isLoading: false,
        appoinments: appointments
      );
    }catch (error) {
      state = state.copyWith(isLoading: false);
      // Manejo de errores si aplica
    }
    
  }

}


class AppointmentsState {

  final bool isLoading;
  final List<Appointment> appoinments;

  AppointmentsState({
    this.isLoading = false, 
    this.appoinments = const []
  });


  AppointmentsState copyWith({
    bool? isLoading,
    List<Appointment>? appoinments,
  }) => AppointmentsState(
    isLoading: isLoading ?? this.isLoading,
    appoinments: appoinments ?? this.appoinments
  );


  
  
}