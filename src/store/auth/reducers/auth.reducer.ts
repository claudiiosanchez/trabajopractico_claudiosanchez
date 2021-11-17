import { AuthActionTypes } from '../actions/auth.actions.types';
import { AUTH_ACTION_TYPES } from '../constans/auth.constans';
import { ISignin } from '../models/auth.model';

const initialStateUser: ISignin = {email:"",password:"",authenticated:false};

export const authReducer = (state = initialStateUser, action: AuthActionTypes) => {
  switch (action?.type) {
    case AUTH_ACTION_TYPES.SIGNIN_USER:
    return {
        ...action.payload
    }
    case AUTH_ACTION_TYPES.LOGOUT_USER:
    return {
        ...state,
        authenticated:action.payload
    }
    case AUTH_ACTION_TYPES.CREATE_USER:
    return {
      ...action.payload
    }
    default:
      return state;
  }
};
