/** @jsxImportSource @emotion/react */
import "destyle.css";
import { container } from "./style";
import TodoList from "../TodoList/TodoList";
import Input from "./../Input/Input";
import { useTodoApp } from "./useTodo";

const App =() => {
  const [{ todoList, text, editId }, dispatch] = useTodoApp();
   return (
    <div css= { container }>
      <TodoList
        todoList={todoList}
        dispatch={dispatch}
        editId={editId}
      />
      <Input
        dispatch={dispatch}
      />
    </div>
  );
};

export default App;