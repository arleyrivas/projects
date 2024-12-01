import 'package:portal/features/auth/domain/entities/auth_entities.dart';

class Company {
  final String nit;
  final String companyName;
  final bool allowStaffAnotherAgency;
  final List<CompanyType> companyType;

  Company({
    required this.nit,
    required this.companyName,
    required this.allowStaffAnotherAgency,
    required this.companyType,
  });

  Map<String, dynamic> toJson() => {
    'id': nit,
    'companyName': companyName,
    'allowStaffAnotherAgency': allowStaffAnotherAgency,
    'tiposEmpresas': companyType.map((tipo) => tipo.toJson()).toList(),
  };

  factory Company.fromJson(Map<String, dynamic> json) {
    return Company(
      nit: json['id'],
      companyName: json['companyName'],
      allowStaffAnotherAgency: json['allowStaffAnotherAgency'],
      companyType: (json['tiposEmpresas'] as List)
          .map((item) => CompanyType.fromJson(item))
          .toList(),
    );
  }
}