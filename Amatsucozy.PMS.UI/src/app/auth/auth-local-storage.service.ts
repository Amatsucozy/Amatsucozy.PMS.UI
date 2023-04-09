import { Injectable } from '@angular/core';
import {AbstractSecurityStorage} from "angular-auth-oidc-client";

@Injectable()
export class AuthLocalStorageService implements AbstractSecurityStorage {
  constructor() { }

  clear(): void {
    localStorage.clear();
  }

  read(key: string): any {
    return localStorage.getItem(key);
  }

  remove(key: string): void {
    localStorage.removeItem(key);
  }

  write(key: string, value: any): void {
    localStorage.setItem(key, value);
  }
}
