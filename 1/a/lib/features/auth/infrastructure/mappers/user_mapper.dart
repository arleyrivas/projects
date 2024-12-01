

import 'package:portal/features/auth/domain/domain.dart';

class UserMapper {

  static User userJsonToEntity(Map<String, dynamic> json) {
    return User.fromJson(json['result']);
  }

  static User userJsonToEntityFormApp(Map<String, dynamic> json, token) {
    return User.fromJsonWithToken(json, token);
  }
}