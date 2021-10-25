/** @jsxImportSource @emotion/react */
import {container} from './style';
import Todo from './../Todo/Todo';
import {Todo as TodoData} from '../App/type';
import { useState, FC, SetStateAction, Dispatch } from 'react';
import EditTodo from '../EditTodo/EditTodo';
import { Action } from '../App/useTodo';

type Props = {
  todoList: TodoData[];
  dispatch: Dispatch<Action>;
  editId: number | undefined;
};

const TodoList: FC<Props>= ({todoList, dispatch, editId}) => {

  return (
    <ul css={ container }>

      {todoList.map((todo) =>
        (todo.id !== editId ?
          <Todo
            key={todo.id}
            id={todo.id}
            text={todo.text}
            isChecked={todo.isChecked}
            dispatch={dispatch}
          />
          :
          <EditTodo
            text={todo.text}
            isChecked={todo.isChecked}
            dispatch={dispatch}
            editId={editId}
          />
        )

      )}
    </ul>
  );
};

export default TodoList;