/** @jsxImportSource @emotion/react */
import { FC, Dispatch, SetStateAction } from "react";
import { Action } from "../App/useTodo";
import { container } from "./style";

type Props = {
  id: number;
  text: string;
  isChecked: boolean;
  dispatch: Dispatch<Action>;
};

const Todo: FC<Props> = ({text, id, isChecked, dispatch }) => {
  return (
    <div css={ container }>
      <div>
        <button
          css={{ marginRight:'1rem' }}
          // onClickでsetIsChecked関数を呼び出す
          onClick={() => {
            dispatch({ type: 'changeIsChecked', id: id})
          }}
        >
          {isChecked ? "●" : "○"}
        </button>
        <span css={{ maxWidth:'5rem' }}>
          {text}
        </span>
      </div>
      <div>
        <button css={{ marginRight:'1rem' }}
          onClick={() => {
            dispatch({ type:'setEditId', id: id})
          }}
        >
          Edit
        </button>
        <button
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;