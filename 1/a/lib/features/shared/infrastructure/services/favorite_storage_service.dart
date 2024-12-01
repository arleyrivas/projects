import 'package:shared_preferences/shared_preferences.dart';

class FavoriteStorageService {
  static const _favoritesKey = 'favorites';

  Future<List<String>> getFavorites() async {
    final prefs = await SharedPreferences.getInstance();
    return prefs.getStringList(_favoritesKey) ?? [];
  }

  Future<void> addFavorite(String id) async {
    final prefs = await SharedPreferences.getInstance();
    final currentFavorites = await getFavorites();
    currentFavorites.add(id);
    await prefs.setStringList(_favoritesKey, currentFavorites);
  }

  Future<void> removeFavorite(String id) async {
    final prefs = await SharedPreferences.getInstance();
    final currentFavorites = await getFavorites();
    currentFavorites.remove(id);
    await prefs.setStringList(_favoritesKey, currentFavorites);
  }

  Future<bool> isFavorite(String id) async {
    final favorites = await getFavorites();
    return favorites.contains(id);
  }
}
