//mongoose typescript
//https://mongoosejs.com/docs/typescript.html
//https://github.com/Automattic/mongoose/blob/master/docs/typescript/schemas.md
export interface IUser {
  name: string;
  account: string;
  email: string;
  avatar?: string;
  password: string;
  role: string;
  type: string;
  _doc: object;
}

export interface INewUser {
  name: string;
  account: string;
  password: string;
  cf_password: string;
}

export interface IDecodedToken {
  id?: string; //refresh_token 디코드 > id정보
  newUser?: INewUser; //active_token 디코드 > user정보
  iat: number;
  exp: number;
}
