import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:portal/features/authorize_appointments/domain/domain.dart';
import 'appointments_repository_provider.dart';

/*
autoDispose para que se limpie cuando ya no se va a utilizar 
.family para esperar un valor a la hora de utilizar este provider  
*/
final authorizeProvider = StateNotifierProvider.autoDispose.family<AuthorizeNotifier, AuthorizeState, List<Appointment> >(
  (ref, listAppoinmentsSelected) {

  final appointmentRepository = ref.watch(appoinmentRepositoryProvider);

  return AuthorizeNotifier(
    appointmentRepository: appointmentRepository,
    listAppoinmentsSelected: listAppoinmentsSelected
  );
});



class AuthorizeNotifier extends StateNotifier<AuthorizeState>{

    final AppointmentRepository appointmentRepository;


  AuthorizeNotifier({
    required this.appointmentRepository,
    required List<Appointment> listAppoinmentsSelected
  }):super(AuthorizeState(listAppoinments: listAppoinmentsSelected)){
      autorizeAppointments();
  }

  Future<void> autorizeAppointments() async {

      try{
        final isAutorized = await appointmentRepository.authorizeAppointments(state.listAppoinments!); 

      } catch ( e ) {
        print(e);
      }
  }

}


class AuthorizeState {

  final List<Appointment>? listAppoinments;
  final bool isLoading;
  final bool isSaving;

  AuthorizeState({
    required this.listAppoinments, 
    this.isLoading = true, 
    this.isSaving = false
  });

  AuthorizeState copyWith({
    List<Appointment>? listAppointments,
    bool? isLoading,
    bool? isSaving,
  }) => AuthorizeState(
    listAppoinments: listAppointments ?? listAppoinments, 
    isLoading: isLoading ?? this.isLoading, 
    isSaving: isSaving ?? this.isLoading
    );
}