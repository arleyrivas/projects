import 'package:portal/core/utils/encryption/i_encryption_service.dart';
import 'package:encrypt/encrypt.dart';

class EncrytionService implements IEncryptionService {

  final key = Key.fromUtf8('oInUSO827gO8RyOe2tiiD6B1hhNyDOsa');
  final iv = IV.fromUtf8('aF6viCZ5F51UoruU');

  final encrypter = Encrypter(AES(Key.fromUtf8('oInUSO827gO8RyOe2tiiD6B1hhNyDOsa'), mode: AESMode.cbc) );


  @override
  String encrypt(String plainText) {
    final encrypted = encrypter.encrypt(plainText, iv: iv);
    return encrypted.base64;  
  }

  @override
  String decrypt(String encryptedText) {
    final decrypted = encrypter.decrypt64(encryptedText, iv: iv);
    return decrypted;
  }
}
