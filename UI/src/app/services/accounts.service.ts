import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IAccountModel} from "../models/accounts/account.model";
import {environment} from "../../environments/environment";
import {Constants} from "../constants/constants";

@Injectable()
export class AccountsService {

  constructor(private httpClient: HttpClient) {
  }

  getAccount(): Observable<IAccountModel> {
    return this.httpClient.get<IAccountModel>(`${environment.apis.accounts}${Constants.routeTypes.secured}/api/Accounts`);
  }

  getAccountPublic(): Observable<IAccountModel> {
    return this.httpClient.get<IAccountModel>(`${environment.apis.accounts}${Constants.routeTypes.public}/api/Accounts`);
  }
}
