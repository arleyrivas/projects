import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import * as CryptoJS from 'crypto-js';

@Injectable()
export class AESEncryptionUtilService {
    KEY:any = CryptoJS.enc.Utf8.parse("oInUSO827gO8RyOe2tiiD6B1hhNyDOsa");
    IV:any = CryptoJS.enc.Utf8.parse("aF6viCZ5F51UoruU");
    CONFIG_AES:any = { keySize: 128 / 8, iv: this.IV, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 };


    constructor() { }

    encrypt(value:string) : string {
        return CryptoJS.AES.encrypt( value, this.KEY, this.CONFIG_AES ).toString();
    }

    decrypt(encryptedBase64:string) : string {
        let cleanedBase64 = encryptedBase64.replace(/[\r\n]+/g, "");
        return CryptoJS.AES.decrypt( cleanedBase64, this.KEY, this.CONFIG_AES ).toString(CryptoJS.enc.Utf8);
    }
}
