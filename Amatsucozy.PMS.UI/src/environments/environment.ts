import {IEnvironmentModel} from "../app/models/environments/environment.model";

export const environment: IEnvironmentModel = {
  production: true,

  auth0Domain: 'amatsucozy.jp.auth0.com',
  auth0Audience: 'https://amatsucozy.jp.auth0.com/api/v2/',
  auth0ClientId: 'kSwwDgIjUBdveNzYYNFHPnu5EUS5PnFN',
  auth0RedirectUri: 'http://localhost:4200/challenge',

  apis: {
    sts: 'https://amatsucozy.pms.com/security/',
    accounts: 'https://amatsucozy.pms.com/accounts/',
    pms: 'https://amatsucozy.pms.com/pms/'
  }
};
