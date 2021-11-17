import React, { useEffect } from 'react';
import { Row, Col, Card } from 'antd';
import './styles.less';
import { ISignin } from '../../store/auth/models/auth.model';
import { SignInForm } from '../../components/SignIn'
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from '../../store/auth/actions';
import { useHistory } from 'react-router-dom';
import { RootState } from '../../store/index.reducer';

export const AuthContainer: React.FunctionComponent = () => {
  const datauser: ISignin = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleFormSubmit = (auth: ISignin): void => {
    dispatch(signIn(auth));
    setTimeout(function(){ 
    if(datauser.authenticated)
    {history.push('todo');}
    }, 3000);
  };

  useEffect(() => {
    
    if(datauser.authenticated)
    {
      history.push('todo');
    }
  }, [datauser]);

  return (
    <Row
      justify="center"
      align="middle"
      gutter={16}
      className="todos-container"
    >
      <Col className="gutter-row" span={6}>
        <Card title="Sign In">
          <SignInForm onFormSubmit={handleFormSubmit} />
        </Card>
      </Col>
    </Row>
  );
};
