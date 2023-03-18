export interface IEnvironmentModel {
  production: boolean;

  auth0Domain: string;
  auth0ClientId: string;
  auth0RedirectUri: string;
}
