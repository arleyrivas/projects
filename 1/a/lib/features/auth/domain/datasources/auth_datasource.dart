

import 'package:portal/features/auth/domain/domain.dart';

abstract class AuthDatasource {

  Future <User> login ( String userName, String password );
  Future <User> chackAuthStatus ( String token );

}