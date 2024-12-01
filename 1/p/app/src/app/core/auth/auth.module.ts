import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoleService } from "./services/role.service";
import { AESEncryptionUtilService } from './services/AESEncryptionUtil.service';
import { Base64EncryptionUtilService } from './services/base64-encryption-util.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    RoleService,
    AESEncryptionUtilService,
    Base64EncryptionUtilService
  ]
})
export class AuthModule { }
