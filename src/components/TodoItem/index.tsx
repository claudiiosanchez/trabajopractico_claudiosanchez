import React, { createElement } from 'react';
import { Tooltip, List } from 'antd';
import { LikeOutlined, LikeFilled } from '@ant-design/icons';
import './styles.less';
import { ITodo } from '../../store/todo/models/todo.model';
import { Link } from 'react-router-dom';

interface ITodoItemProps {
  todo: ITodo;
  onTodoLike: (todo: ITodo) => void;
}

export const TodoItem: React.FC<ITodoItemProps> = ({todo,onTodoLike}) => {
  
  return (
    <List.Item
      actions={[
        <Tooltip key="comment-basic-like" title="Like">
        <span onClick={()=> onTodoLike(todo)}>
          {createElement(!todo.completed ? LikeFilled : LikeOutlined)}
        </span>
        </Tooltip>
      ]}
      className="list-item"
      key={todo.id}
    >
      <div>
        <p className='m-1 text-center'><Link to="/detail">{todo.name}</Link></p>
      </div>
    </List.Item>
  );
};
