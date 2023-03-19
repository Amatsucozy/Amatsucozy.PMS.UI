import {IEnvironmentModel} from "../app/models/environments/environment.model";

export const environment: IEnvironmentModel = {
  production: true,

  auth0Domain: 'amatsucozy.jp.auth0.com',
  auth0ClientId: 'kSwwDgIjUBdveNzYYNFHPnu5EUS5PnFN',
  auth0RedirectUri: 'http://localhost:4200/challenge',

  apis: {
    accounts: 'https://localhost:50000/',
    pms: 'https://localhost:40000/'
  }
};
