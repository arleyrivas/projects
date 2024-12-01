import 'dart:convert';

import 'package:dio/dio.dart';

import 'package:portal/config/config.dart';
import 'package:portal/core/utils/encryption/encrytion_service.dart';
import 'package:portal/features/auth/domain/domain.dart';
import 'package:portal/features/auth/infrastructure/infrastructure.dart';
import 'package:portal/features/shared/infrastructure/services/key_value_storage_service.dart';
import 'package:portal/features/shared/infrastructure/services/key_value_storage_service_impl.dart';
class AuthDatasourceImpl extends AuthDatasource{
    final keyValueStorageService = KeyValueStorageServiceImpl();
  //late final KeyValueStorageService keyValueStorageService;
  
  final encrytionService = EncrytionService();
  
  final dio = Dio(
    BaseOptions(
      baseUrl: Enviroment.apiUrl,
    )
  );



  @override
  Future<User> chackAuthStatus(String token) async {
    print('INCIO PROCESO DE chackAuthStatus................................');
    try{
    final User userInSharedPrefereces;

      final response = await dio.post('/auth/refresh',
        options: Options(
          headers: {
            'Authorization': 'Bearer $token'
          }
        )
      );
      if( response.data == null || response.data['result'] == null  ) { throw CustomError( 'Token incorrecto' ); }

   // final userJson = await keyValueStorageService.getValue<String>('token'); // Get user data as JSON string
    
    // if (userJson != null) {
    //  // Parse JSON and update user variable if data exists
    //   userInSharedPrefereces = await _parseUserFromJson(userJson);
    // }

      final userFromState = await keyValueStorageService.getValue<String>('user');
      
      

      //   print(userFromState);
      //   final   userFromStateMap = jsonDecode(userFromState!);
      //   print(userFromStateMap);
      //   final user = UserMapper.userJsonToEntityFormApp(userFromStateMap, response.data['result'].token);

      print('Usuario actual $userFromState');
      final newToken = response.data['result'];
      print('newToken $newToken');
      
       final user = await _parseUserFromJson(userFromState!, newToken);
        // print(userFromStateMap);
      return user;
    }on DioException catch (e) {
      if(e.response?.statusCode == 401 ){
         throw CustomError( 'Token incorrecto' );
      }
      throw Exception();
    } catch (e){
      throw Exception();
    }
  }


Future<User> _parseUserFromJson(String userJson, String token) async {
    try {
      final userFromStateMap = jsonDecode(userJson);
      User user = UserMapper.userJsonToEntityFormApp(userFromStateMap, token);// Parse JSON to User object
      return user; // Extract relevant user information (e.g., name)
    } catch (error) {
      rethrow;
    }
  }

  @override
  Future<User> login(String userName, String password) async {
    final response;
    try {

      final request =   {
        'username': userName,
        'password': password,
        'appname': "portal",
        'ip':'190.20.30.110',
      };

      // String jsonString = jsonEncode(request);
      final requestEncrypt = encrytionService.encrypt(jsonEncode(request));

      print(requestEncrypt);
      final newRequest = {
        'data': requestEncrypt
      }; 
      print(encrytionService.decrypt(requestEncrypt));
      response = await dio.post('/auth/login', data: newRequest );
      // response = await dio.post('/rest/bus/loginRemoteByAplication', data: newRequest );
      print(response);
      if(response.data['result'] == null){
        // throw CustomError('No se pudo autenticar, contacte al administrador de su empresa. (codError: 1263407)');
        throw CustomError(response.data['error']);
      }
      // if(response.data['result']){
        final user = UserMapper.userJsonToEntity(response.data);
        //  keyValueStorageService.setKeyValue<String>('user', user.toString());
        return user;
      // }
      

    } on DioException catch(e) {
      print(e);
      throw CustomError('No fue posible iniciar sesión. Por favor, contacte al administrador.');
    }

  }



}