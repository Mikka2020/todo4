/** @jsxImportSource @emotion/react */
import { Dispatch, useState, SetStateAction, FC, useCallback} from "react";
import { container, addButton, inputBox } from "./style";
import { Action } from './../App/useTodo'

type Props = {
  dispatch: Dispatch<Action>;
};

const Input: FC<Props> = ({ dispatch }) => {
  const [text, setText] = useState('');

  return (
    <div css={ container }>
      <input
        type="text"
        css={ inputBox }
        value={ text }
        // textの値をchangeText関数で入力した値に変更する
        onChange={(e) => {
          setText(e.target.value)
        }}
      />
      <button
        css={ addButton }
        onClick = {
          () => {
            dispatch({ type: 'addTodo', text: text})
            setText('');
          }
        }
      >+</button>
    </div>
  );
};

export default Input;