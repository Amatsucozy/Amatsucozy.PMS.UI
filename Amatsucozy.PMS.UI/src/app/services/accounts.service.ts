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

  getPossibleScopes(): Observable<string[]> {
    return this.httpClient.get<string[]>(`${environment.apis.sts}${Constants.routeTypes.secured}/api/Token/GetAvailablePersonalAccessTokenScopes`);
  }

  requestPersonalAccessToken(scopes: string[], tokenLifetime: number): Observable<string> {
    return this.httpClient.post(`${environment.apis.sts}${Constants.routeTypes.secured}/api/Token/GeneratePersonalAccessToken`, {
      timespan: tokenLifetime,
      allowedScopes: scopes
    },{
      responseType: 'text'
    });
  }
}
