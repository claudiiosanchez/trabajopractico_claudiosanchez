import React, { useState }  from 'react';
import { Row, Col, Card, List } from 'antd';
import {  Button, Space  } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/index.reducer';
import { ITodo } from '../../store/todo/models/todo.model';
import { useHistory } from 'react-router-dom';
import { logOut} from '../../store/auth/actions';

export interface IDetail{
  title:string;
  detail:string;
}

export const DetailForm: React.FC = () => {
  const todos: ITodo[] = useSelector((state: RootState) => state.todo.todos);
  let details = todos.filter(function(data){ return data.completed===false});
  const [loading,setLoading] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  const logout = (): void => {
    setLoading(true);
    dispatch(logOut());
    setTimeout(function(){ 
      setLoading(false);
      history.push('/') }, 3000);
  };

  return (
    <Row
      justify="center"
      align="middle"
      gutter={[0, 20]}
      className="todos-container"
    >
      <Col
        xs={{ span: 23 }}
        sm={{ span: 23 }}
        md={{ span: 21 }}
        lg={{ span: 20 }}
        xl={{ span: 18 }}
      >
        <Space style={{ width: '100%' }}>
          <Button
            type="primary"
            loading={loading}
            icon={<PoweroffOutlined />}
            onClick={logout}
          >
            Logout
          </Button>
        </Space>
      </Col>
      <Col
        xs={{ span: 23 }}
        sm={{ span: 23 }}
        md={{ span: 21 }}
        lg={{ span: 20 }}
        xl={{ span: 18 }}
      > 
    <List
    className="list-item"
    dataSource={details}
    renderItem={(data) => (
      <Card title={data.name}  style={{ width: 500 }}>
      <p>{data.detail}</p>
    </Card>
    )}
  />
  </Col>
  </Row>
  );
};
