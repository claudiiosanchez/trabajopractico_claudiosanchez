import { AUTH_ACTION_TYPES } from "../constans/auth.constans";
import { ISignin, ICreateUser } from "../models/auth.model";

interface ICreateAction {
    type: typeof AUTH_ACTION_TYPES.CREATE_USER;
    payload: ICreateUser;
}

interface ISigninAction {
    type: typeof AUTH_ACTION_TYPES.SIGNIN_USER;
    payload: ISignin;
}

interface ILogoutAction {
    type: typeof AUTH_ACTION_TYPES.LOGOUT_USER;
    payload: boolean;
}

export type AuthActionTypes = ISigninAction | ILogoutAction | ICreateAction;