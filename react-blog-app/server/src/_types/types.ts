export interface INewUser {
  name: string;
  account: string;
  password: string;
  cf_password: string;
}

export interface IDecodedToken {
  newUser?: INewUser;
  iat: number;
  exp: number;
}
