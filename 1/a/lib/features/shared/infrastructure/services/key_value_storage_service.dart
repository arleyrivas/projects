abstract class KeyValueStorageService {

  Future<void> setKeyValue<T>( String key, T value ); // de momento estoy mandando userName
  Future<T?> getValue<T>( String key );
  Future<bool> removeKey( String key );
  Future<T?> setUserValue<T>(String key, T value); 
}