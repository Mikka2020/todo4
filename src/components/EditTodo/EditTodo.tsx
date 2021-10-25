/** @jsxImportSource @emotion/react */
import { container } from "./style";
import { Dispatch, SetStateAction, FC, useState, ChangeEventHandler } from "react";
import {Todo as TodoData} from '../App/type';
import { Action } from "../App/useTodo";

type Props = {
  text: string;
  editId: number;
  isChecked: boolean;
  dispatch: Dispatch<Action>
}

const EditTodo: FC<Props> = ({ text, dispatch }) => {
  const [editText, setEditText] = useState(text);
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setEditText(e.target.value)
  };
  return (
    <div css={container}>
      <div css={{ marginLeft:'2rem' }}>
        <input
          type="text"
          value={editText}
          onChange={ handleChange }
          />
      </div>
      <div>
        <button
          css={{ marginRight:'1rem' }}
          onClick={() => {
            dispatch({ type: 'editTodo', text: editText});
          }}
        >OK</button>
        <button
          onClick={() => {
            dispatch({ type: 'setEditId', id: undefined})
          }}
        >Cancel</button>
      </div>
    </div>
  )
};

export default EditTodo;