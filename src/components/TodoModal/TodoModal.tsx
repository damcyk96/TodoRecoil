import React, {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useCallback,
  useState,
} from "react";
import { FaPen } from "react-icons/fa";
import { Button } from "theme-ui";

import "./TodoModal.scss";

interface PropTypes {
  setIsModal: Dispatch<SetStateAction<boolean>>;
  modifyTitle: string;
  setModifyTitle: Dispatch<SetStateAction<string>>;
  onModifyTodo: () => void;
}

const TodoModal = ({
  setIsModal,
  modifyTitle,
  setModifyTitle,
  onModifyTodo,
}: PropTypes): JSX.Element => {
  const onCloseModal = useCallback((): void => {
    setIsModal(false);
  }, [setIsModal]);
  const [charCount, setCharCount] = useState<number>(modifyTitle?.length || 0);

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>): void => {
      const { value } = e.target;
      setModifyTitle(value);
      setCharCount(value.length);
    },
    [setModifyTitle]
  );

  return (
    <>
      <div className="TodoModal-Overlay" onClick={onCloseModal}></div>
      <div className="TodoModal">
        <div className="TodoModal-Title">
          <div>Todo </div>
          <FaPen />
        </div>
        <div>CHAR COUNT: {charCount}</div>
        <div className="TodoModal-Contents">
          <input
            type="text"
            className="TodoModal-Contents-Input"
            value={modifyTitle}
            onChange={onChange}
            placeholder="Todo"
          />

          <Button
            data-testid="update"
            backgroundColor="blue"
            onClick={onModifyTodo}
          >
            Update
          </Button>
        </div>
      </div>
    </>
  );
};

export default TodoModal;
