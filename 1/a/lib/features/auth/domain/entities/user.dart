import 'package:portal/features/auth/domain/entities/company.dart';



class User {
  final String userName;
  final String names;
  final String lastNames;
  final String email;
  final bool passwordExpiring;
  final Company company;
  final List<String> privileges; // Cambiado a List<String>
  final String token;

  User({
    required this.userName,
    required this.names,
    required this.lastNames,
    required this.email,
    required this.passwordExpiring,
    required this.company,
    required this.privileges,
    required this.token,
  });

  Map<String, dynamic> toJson() => {
    'userName': userName,
    'nombres': names,
    'apellidos': lastNames,
    'email': email,
    'passwordExpiring': passwordExpiring,
    'empresa': company.toJson(),
    'privileges': privileges,
    'token': token
  };

  factory User.fromJson(Map<String, dynamic> json) {
    return User(
      userName: json['userName'],
      names: json['nombres'],
      lastNames: json['apellidos'],
      email: json['email'],
      passwordExpiring: json['passwordExpiring'],
      company: Company.fromJson(json['empresa']),
      privileges: List<String>.from(json['privileges']),
      token: json['token'] ?? '',
    );
  }

  factory User.fromJsonWithToken(Map<String, dynamic> json, String token) {
    return User(
      userName: json['userName'],
      names: json['nombres'],
      lastNames: json['apellidos'],
      email: json['email'],
      passwordExpiring: json['passwordExpiring'],
      company: Company.fromJson(json['empresa']),
      privileges: List<String>.from(json['privileges']),
      token: token,
    );
  }
}
