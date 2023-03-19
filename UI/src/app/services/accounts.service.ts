import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class AccountsService {

  constructor(private httpClient: HttpClient) {
  }

  get(): Observable<IAccount> {

  }
}
