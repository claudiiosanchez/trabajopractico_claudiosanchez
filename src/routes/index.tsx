import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { TodosContainer } from '../containers/todos';
import { AuthContainer } from '../containers/auth/';
import { RegisterContainer } from '../containers/auth/register';
import { DetailForm } from '../components/Detail/index';

interface IRoutesProps {}

export const Routes: React.FC<IRoutesProps> = () => (
  <Switch>
    <Route path="/" exact={true} component={AuthContainer}/>
    <Route path="/todo" exact={true} component={TodosContainer} />
    <Route path="/register" exact={true} component={RegisterContainer} />
    <Route path="/detail" exact={true} component={DetailForm} />
  </Switch>
);
