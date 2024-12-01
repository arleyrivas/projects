class CompanyType {
  final String companyTypeId;
  final String companyTypeName;
  final bool? selected;

  CompanyType({
    required this.companyTypeId,
    required this.companyTypeName,
    this.selected,
  });

  Map<String, dynamic> toJson() => {
    'companyTypeId': companyTypeId,
    'companyTypeName': companyTypeName,
    'selected': selected,
  };

  factory CompanyType.fromJson(Map<String, dynamic> json) {
    return CompanyType(
      companyTypeId: json['companyTypeId'],
      companyTypeName: json['companyTypeName'],
      selected: json['selected'],
    );
  }
}
