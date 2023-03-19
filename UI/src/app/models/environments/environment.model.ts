import {IApiUrlModel} from "./api-url.model";

export interface IEnvironmentModel {
  production: boolean;

  auth0Domain: string;
  auth0Audience: string;
  auth0ClientId: string;
  auth0RedirectUri: string;

  apis: IApiUrlModel;
}
