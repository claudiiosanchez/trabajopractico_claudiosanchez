import React, { useEffect, useState } from 'react';
import { Row, Col, Card } from 'antd';
import './styles.less';
import { RegisterForm } from '../../components/Register'
import { useDispatch, useSelector } from 'react-redux';
import { createUser } from '../../store/auth/actions';
import { ICreateUser, ISignin } from '../../store/auth/models/auth.model';
import { message } from 'antd';
import { RootState } from '../../store/index.reducer';
import { useHistory } from 'react-router-dom';

export const RegisterContainer: React.FunctionComponent = () => {
  const datauser: ISignin = useSelector((state: RootState) => state.auth);
  const [senddispatch,setSenddispatch] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleFormSubmit = (auth: ICreateUser): void => {
    let arraypassword = auth.password.split(" ");
    if(arraypassword[0]===arraypassword[1])
    {auth.password=arraypassword[0];
    dispatch(createUser(auth));
    setSenddispatch(true);
    }
    else
    {message.warn('Not matchs passoword!')
    setSenddispatch(false);}
  };

  useEffect(() => {
    if(datauser.password!=="" && senddispatch)
    {
      history.push('/');
    }
  }, [datauser,senddispatch])

  return (
    <Row
      justify="center"
      align="middle"
      gutter={16}
      className="todos-container"
    >
      <Col className="gutter-row" span={6}>
        <Card title="Register User">
          <RegisterForm onFormSubmit={handleFormSubmit} />
        </Card>
      </Col>
    </Row>
  );
};
