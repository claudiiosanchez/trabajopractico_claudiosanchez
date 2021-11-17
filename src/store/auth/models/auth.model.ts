export interface ISignin {
    email: string;
    password: string;
    authenticated: boolean;
}

export interface ICreateUser {
  email: string;
  password: string;
}