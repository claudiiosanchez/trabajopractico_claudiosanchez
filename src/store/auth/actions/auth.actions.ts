import { ThunkAction } from 'redux-thunk';
import { AUTH_ACTION_TYPES } from '../constans';
import { ICreateUser, ISignin } from '../models/auth.model';
import { RootState } from '../../index.reducer';
import { AuthActionTypes } from './auth.actions.types';
import  Firebase  from '../../../firebase/index';
import { message } from 'antd';

export function createUser(data: ICreateUser): ThunkAction<void, RootState, null, AuthActionTypes> {
    return async dispatch => {
        try {
            await Firebase.auth().createUserWithEmailAndPassword(data.email, data.password).then(result => {
            dispatch({type:AUTH_ACTION_TYPES.CREATE_USER,payload:data});
            message.success('Congratulations your account was has created!');
        }).catch(function (error) {
            if (error.response) {
              message.error(error.response.data);
              message.error(error.response.status);
              message.error(error.response.headers);
            } else if (error.request) {
              message.error(error.request);
            } else {
              message.error(error.message);
            }
        
          });
        } catch (err) {}
    }
}

export const signIn = (data: ISignin) : ThunkAction<void, RootState, null, AuthActionTypes> => {
    return async dispatch => {
        try {
            await Firebase.auth().signInWithEmailAndPassword(data.email, data.password).then(result => {
            dispatch({type:AUTH_ACTION_TYPES.SIGNIN_USER,payload:data});  
            }).catch(function (error) {
                if (error.response) {
                  message.error(error.response.data);
                  message.error(error.response.status);
                  message.error(error.response.headers);
                } else if (error.request) {
                  message.error(error.request);
                } else {
                  message.error(error.message);
                }
            
              });
        } catch (err) {}
    }
}

export function logOut(): ThunkAction<void, RootState, null, AuthActionTypes> {
    return async dispatch => {
        try {
            await Firebase.auth().signOut();
            dispatch({type:AUTH_ACTION_TYPES.LOGOUT_USER,payload:false});
        } catch (err) {}
    }
}
