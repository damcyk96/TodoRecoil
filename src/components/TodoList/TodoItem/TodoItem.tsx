import React, { useCallback, useState } from "react";
import TodoModal from "components/TodoModal";
import { ITodoTypes } from "interface/todo";
import { FaPen, FaCheck, FaTrash } from "react-icons/fa";
import { SetterOrUpdater } from "recoil";
import { Flex, Box } from "theme-ui";
import "./TodoItem.scss";

interface PropTypes {
  id: number;
  title: string;
  completed: boolean;

  onComplete: (id: number) => void;
  onDelete: (id: number) => void;

  todos: ITodoTypes[];
  setTodos: SetterOrUpdater<ITodoTypes[]>;
}

const TodoItem = ({
  id,
  title,
  completed,
  onComplete,
  onDelete,
  todos,
  setTodos,
}: PropTypes): JSX.Element => {
  const [isModal, setIsModal] = useState<boolean>(false);
  const [modifyTitle, setModifyTitle] = useState<string>("");

  const onModify = useCallback((): void => {
    setIsModal(true);
    setModifyTitle(title);
  }, [title]);

  const onModifyTodo = useCallback((): void => {
    if (!modifyTitle.trim()) {
      return;
    }

    setTodos(
      todos.map((todo: ITodoTypes) => {
        return todo.id === id ? { ...todo, title: modifyTitle } : todo;
      })
    );

    setIsModal(false);
  }, [id, modifyTitle, setTodos, todos]);

  return (
    <>
      <Box
        p={3}
        sx={{
          border: "1px solid black",
          maxWidth: "1000px",
          margin: "1rem auto",
          borderRadius: "1rem",
        }}
      >
        <Flex sx={{ alignItems: "center", justifyContent: "center" }}>
          <div
            data-testid={title}
            title={title}
            className={completed ? "TodoItem-Completed" : ""}
          >
            <p>{title}</p>
          </div>
        </Flex>
        <Flex sx={{ alignItems: "center", justifyContent: "center" }}>
          <div className="TodoItem-Icons">
            <FaPen
              data-testid={"edit " + title}
              className="TodoItem-Icons-Pen"
              onClick={onModify}
            />

            <FaCheck
              data-testid={"done " + title}
              className="TodoItem-Icons-Check"
              onClick={() => onComplete(id)}
            />
            <FaTrash
              data-testid={"trash " + title}
              className="TodoItem-Icons-Close"
              onClick={() => onDelete(id)}
            />
          </div>
        </Flex>
      </Box>

      {isModal && (
        <TodoModal
          setIsModal={setIsModal}
          modifyTitle={modifyTitle}
          setModifyTitle={setModifyTitle}
          onModifyTodo={onModifyTodo}
        />
      )}
    </>
  );
};

export default TodoItem;
