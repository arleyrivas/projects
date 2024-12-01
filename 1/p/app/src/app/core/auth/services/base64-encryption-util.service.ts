import { Injectable } from '@angular/core';

@Injectable()
export class Base64EncryptionUtilService {

  constructor() { }

  public encrypt(input: string): string {
    return btoa(input);
  }

  public decrypt(input: string): string {
    return atob(input);
  }

    // base64 ⇢ UTF-8
  public b64EncodeUnicode(input:string) {
    return btoa(encodeURIComponent(input).replace(/%([0-9A-F]{2})/g, function(match, p1) {
        return String.fromCharCode(parseInt(p1, 16))
    }))
  }

  public b64DecodeUnicode(input:string) {
      return decodeURIComponent(Array.prototype.map.call(atob(input), function(c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
      }).join(''))
  } 

  public toBase64(str: string): string {
    // Convierte la cadena a UTF-8 y luego a Base64
    return btoa(unescape(encodeURIComponent(str)));
  }

}
