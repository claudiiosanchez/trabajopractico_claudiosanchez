import React, { useEffect, useState } from 'react';
import { Row, Col, Card } from 'antd';

import { ITodo } from '../../store/todo/models/todo.model';
import { useDispatch, useSelector } from 'react-redux';
import { LikeTodoStatus } from '../../store/todo/actions';
import { logOut} from '../../store/auth/actions';
import { RootState } from '../../store/index.reducer';
import { TodoList } from '../../components/TodoList';
import {  Button, Space  } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';
import './styles.less';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

interface ITodosContainerProps {}

export const TodosContainer: React.FunctionComponent<ITodosContainerProps> = () => {
  const todos: ITodo[] = useSelector((state: RootState) => state.todo.todos);
  const [loading,setLoading] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleLikeTodoStatus = (todo: ITodo): void => {
    dispatch(LikeTodoStatus(todo));
  };

  const logout = (): void => {
    setLoading(true);
    dispatch(logOut());
    setTimeout(function(){
      setLoading(false); 
      history.push('/') }, 3000);
  };

  const getData = async () => {
    const result = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return result.data;
  };

  useEffect(() => {

    if(todos.length===0)
    {
      getData().then(res => { 
        res.map(function(data:any){
          const row: ITodo = {id:data.id,name:data.title,detail:data.body,completed:true}
          todos.push(row);
        })
      });
    }
    
  }, [todos]);

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
        <Card title="Todo List">
          <TodoList
            todos={todos}
            onTodoLike={handleLikeTodoStatus}
          />
        </Card>
      </Col>
    </Row>
  );
};