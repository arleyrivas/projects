


import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:portal/features/auth/domain/domain.dart';
import 'package:portal/features/auth/presentation/providers/auth_provider.dart';
import 'package:portal/features/authorize_appointments/domain/domain.dart';
import 'package:portal/features/authorize_appointments/infrastructure/infrastructure.dart';

final appoinmentRepositoryProvider = Provider<AppointmentRepository>((ref) {

  final User user = ref.watch( authProvider ).user!;

  final appoinmentRepository = AppoinmentRepositoryImpl(
    AppointmentDatasourceImpl( user:user )
  );

  return appoinmentRepository;
});