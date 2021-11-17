import React from 'react';

import { List } from 'antd';

import { ITodo } from '../../store/todo/models/todo.model';
import { TodoItem } from '../TodoItem';

interface ITodoListProps {
  todos: ITodo[];
  onTodoLike: (todo: ITodo) => void;
}

export const TodoList: React.FC<ITodoListProps> = ({
  todos,
  onTodoLike
}) => (
  <List
    locale={{
      emptyText: "",
    }}
    dataSource={todos}
    renderItem={(todo) => (
      <TodoItem
        todo={todo}
        onTodoLike={onTodoLike}
      />
    )}
    pagination={{
      position: 'bottom',
      pageSize: 10,
    }}
  />
);
