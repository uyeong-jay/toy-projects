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
}

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
