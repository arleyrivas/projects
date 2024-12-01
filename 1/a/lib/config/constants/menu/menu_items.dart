class MenuItems {

  final int idOption;
  bool isFavorite;
  final String svgName;
  final String label;
  final String route;
  final String iconPlusMinus;
  final List<String> privileges;
  final bool hasNotification;

  MenuItems({
    required this.idOption,
    required this.isFavorite,
    required this.svgName,
    required this.label, 
    required this.route,
    required this.iconPlusMinus,
    required this.privileges,
    required this.hasNotification,
  });


static List<MenuItems> menuItems = [
  MenuItems(
    idOption: 1,
    isFavorite: false,
    svgName: "box_check_ok",
    label: "Autorización de Citas",
    route: "/authorizeAppoinments",
    iconPlusMinus: "plusWhiteBackGreen",
    privileges: ['CC_CTA_BLO', 'CS_CTA_BLOQ'],
    hasNotification: true,
  ),
  MenuItems(
    idOption: 2,
    isFavorite: false,
    svgName: "search",
    label: "Consultar Citas Aprobadas",
    route: "/",
    iconPlusMinus: "plusWhiteBackGreen",
    privileges: ['CC_CTA_BLO', 'CS_CTA_BLOQ'],
    hasNotification: false
  ),
  MenuItems(
    idOption: 100,
    isFavorite: false,
    svgName: "",
    label: "",
    route: "/",
    iconPlusMinus: "plusWhiteBackGreen",
    privileges: ['others'],
    hasNotification: false
  ),
  MenuItems(
    idOption: 100,
    isFavorite: false,
    svgName: "",
    label: "",
    route: "/",
    iconPlusMinus: "plusWhiteBackGreen",
    privileges: ['others'],
    hasNotification: false
  ),
  MenuItems(
    idOption: 100,
    isFavorite: false,
    svgName: "",
    label: "",
    route: "/",
    iconPlusMinus: "plusWhiteBackGreen",
    privileges: ['others'],
    hasNotification: false
  ),
 
];

 // Método para clonar un objeto MenuItems
  static MenuItems clone(MenuItems original) {
    return MenuItems(
      idOption: original.idOption,
      isFavorite: original.isFavorite,
      svgName: original.svgName,
      label: original.label,
      route: original.route,
      iconPlusMinus: original.iconPlusMinus,
      privileges: List.from(original.privileges),
      hasNotification: original.hasNotification,                    
    );
  }



 static List<MenuItems> filterMenuItems( List<String> userPrivileges ) {
    return menuItems.where((menuItem) {
      // Verifica si al menos uno de los privilegios del menuItem está en userPrivileges
      return menuItem.privileges
          .any((privilege) => userPrivileges.contains(privilege) || privilege == 'others');
    }).toList();
  }

 static Iterable<MenuItems> filterMenuItemsFavorite( List<String> userPrivileges, List<int> favorites ) {
  
    List<MenuItems> menuOptions =  menuItems.where((menuItem) {
      // Verifica si al menos uno de los privilegios del menuItem está en userPrivileges y en favoritos
      return menuItem.privileges
          .any((privilege) => userPrivileges.contains(privilege) || privilege == 'others');
    }).toList();

    List<MenuItems> filteredOptions = menuOptions.where((menuItem) { 
      return favorites.contains(menuItem.idOption); 
    }).toList();


      List<MenuItems> copiedOptions = filteredOptions
      .map((item) => MenuItems.clone(item)) // Usamos un método clone para duplicar
      .toList();


    for (var item in copiedOptions) {
      item.isFavorite = true;
    }
    return copiedOptions.toList();
  }

  }
//TODO: Crear otra función para devolver mis favoritos
