import { Reducer, useReducer } from "react";
import { textChangeRangeIsUnchanged } from "typescript";
import { Todo as TodoData } from "./type";

export type State = {
  todoList: TodoData[];
  text: string;
  editId: number | undefined;
};

export type Action = {
  type: 'addTodo';
  text: string;
} | {
  type: 'deleteTodo';
  id: number;
} | {
  type: 'editTodo';
  text: string;
} | {
  type: 'setEditId';
  id: number | undefined;
} | {
  type: 'changeIsChecked';
  id: number;
};

const initialState: State = {
  todoList: [],
  text: '',
  editId: undefined,
};

const reducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case 'addTodo': {
      if (action.text == '') return state;
      const nextState = { ...state };
      const max = state.todoList.length === 0 ? 0 : state.todoList.map((todo) => todo.id)
        .reduce((acc, curVal) => Math.max(acc, curVal));
      const nextTodoList = state.todoList.concat({ id: max+1, text: action.text, isChecked: false});
      nextState.todoList = nextTodoList;
      return nextState;
    }
    case 'deleteTodo': {
      const nextState = { ...state };
      const index = state.todoList.findIndex((todo) => todo.id === action.id );
      const nextTodoList = state.todoList.slice(0, index).concat(state.todoList.slice(index + 1));
      nextState.todoList = nextTodoList;
      return nextState;
    }
    case 'editTodo': {
      if (state.editId === undefined) return state;
      const nextState = { ...state };
      const index = state.todoList.findIndex((todo) => todo.id === state.editId );
      const nextTodoList = state.todoList.slice(0, index)
      .concat({ id: state.editId, text: action.text, isChecked: state.todoList[index].isChecked }).concat(state.todoList.slice(index + 1));
      nextState.todoList = nextTodoList;
      nextState.editId = undefined;
      return nextState;
    }
    case 'setEditId': {
      const nextState = { ...state };
      nextState.editId = action.id;
      return nextState;
    }
    case 'changeIsChecked': {
      const nextState = { ...state };
      const index = state.todoList.findIndex((todo) => todo.id === action.id );
      const nextTodoList = state.todoList.slice(0, index)
      .concat({ id: action.id, text: state.todoList[index].text, isChecked: !state.todoList[index].isChecked }).concat(state.todoList.slice(index + 1));
      nextState.todoList = nextTodoList;
      return nextState;
    }
    default: {
      return state;
    }
  }
};

export const useTodoApp = () => useReducer(reducer, initialState);