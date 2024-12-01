import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:portal/config/constants/menu/menu_items.dart';
import 'package:portal/features/auth/presentation/providers/auth_provider.dart';
import 'package:portal/features/home/presentation/provider/favorites_notifier.dart';
import 'package:portal/features/home/presentation/widgets/widgets.dart';
import 'package:portal/features/shared/shared.dart';


class HomeScreen extends ConsumerStatefulWidget  {
  const HomeScreen({super.key});


  @override
  ConsumerState<HomeScreen> createState() => _HomeScreenState();
}


class _HomeScreenState extends ConsumerState<HomeScreen> {
  bool _isSideMenuVisible = false;

  void _toggleSideMenu() {
    setState(() {
      _isSideMenuVisible = !_isSideMenuVisible;
    });
  }
   void _showNotification() {
    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(content: Text('Notificaciones')),
    );
  }

  @override
  Widget build(BuildContext context) {

    

    final scaffoldKey = GlobalKey<ScaffoldState>();

   
    final authState = ref.watch(authProvider);
    final user = authState.user;

        // Leer favoritos desde el Provider
    final favorites = ref.watch(favoritesProvider);

     
    List<MenuItems> filteredItems = MenuItems.filterMenuItems(user!.privileges);
    List<MenuItems> filteredItemsFavorite = MenuItems.filterMenuItemsFavorite(user.privileges, favorites.toList()).toList();
  
    for (var item in filteredItems) {
      print('ID: ${item.idOption}, Label: ${item.label}');
    }
    for (var item in filteredItemsFavorite) {
      print('FAVORITOS ID: ${item.idOption}, Label: ${item.label}');
    }


    return GeometricalBackgroundHome(
      child: Stack(
        children: [
          Scaffold (
            //drawer: SideMenu( scaffoldKey: scaffoldKey ),

            backgroundColor: Colors.transparent,
            body:Home(user: user, filteredItemsFavorite: filteredItemsFavorite, filteredItems: filteredItems),
          
            bottomNavigationBar: const CustomBottomNavigationBar(),
            
          ),

        ],
      ),
    );
  }

}

