import { combineReducers } from 'redux';
import { authReducer } from './auth/reducers/auth.reducer';
import { todoReducer } from './todo/reducers/todo.reducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  todo: todoReducer
});

export type RootState = ReturnType<typeof rootReducer>;