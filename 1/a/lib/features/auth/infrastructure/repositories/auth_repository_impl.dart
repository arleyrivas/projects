import 'package:portal/features/auth/domain/domain.dart';
import '../infrastructure.dart';

class AuthRepositoryImpl extends AuthRepository {
  final AuthDatasource datasource;

  AuthRepositoryImpl({AuthDatasource? dataSource})
      : datasource = dataSource ?? AuthDatasourceImpl();

  @override
  Future<User> chackAuthStatus(String token) {
    return datasource.chackAuthStatus(token);
  }

  @override
  Future<User> login(String userName, String password) {
    return datasource.login(userName, password);
  }

  
}
