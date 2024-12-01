import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:portal/config/constants/menu/menu_items.dart';
import 'package:portal/features/shared/infrastructure/services/favorite_storage_service.dart';

class FavoritesNotifier extends StateNotifier<Set<int>> {
  final FavoriteStorageService _storageService;

  FavoritesNotifier(this._storageService) : super({}) {
    _loadFavorites();
  }

  // Alternar favoritos
  void toggleFavorite(MenuItems item) async {
    final currentState = {...state};

    if (currentState.contains(item.idOption) && item.isFavorite) {

      currentState.remove(item.idOption);
      await _storageService.removeFavorite(item.idOption.toString());


    } else if (!currentState.contains(item.idOption)) {

      currentState.add(item.idOption);
      await _storageService.addFavorite(item.idOption.toString());

    }

    state = currentState;
  }

  
  Future<void> _loadFavorites() async {
    final storedFavorites = await _storageService.getFavorites();
    state = storedFavorites.map((id) => int.parse(id)).toSet();
    print('Favorites in SharedPreferences: $state');
  }
}


// Proveedor global del Notifier
final favoritesProvider =
    StateNotifierProvider<FavoritesNotifier, Set<int>>((ref) {
  return FavoritesNotifier(FavoriteStorageService());
});


