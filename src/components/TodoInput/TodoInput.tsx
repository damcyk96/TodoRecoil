import React, { ChangeEvent, useCallback, KeyboardEvent } from "react";
import { Input, Flex, Box } from "theme-ui";

import { FaPlus } from "react-icons/fa";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { inputState, todosState } from "../../recoil/todo";
import { ITodoTypes } from "interface/todo";

const TodoInput = (): JSX.Element => {
  const [title, setTitle] = useRecoilState<string>(inputState);
  const todos = useRecoilValue<ITodoTypes[]>(todosState);
  const setTodos = useSetRecoilState<ITodoTypes[]>(todosState);

  const addTodo = useCallback((): void => {
    if (!title.trim()) {
      return;
    }

    const nextId: number =
      todos.length > 0 ? todos[todos.length - 1].id + 1 : 0;
    const todo: ITodoTypes = {
      id: nextId,
      title,
      completed: false,
    };

    setTodos([...todos, todo]);
    setTitle("");
  }, [title, setTitle, setTodos, todos]);

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>): void => {
      const { value } = e.target;
      setTitle(value);
    },
    [setTitle]
  );

  const onKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>): void => {
      if (e.key === "Enter") {
        addTodo();
      }
    },
    [addTodo]
  );

  return (
    <>
      <Flex>
        <Input
          data-testid="addTodo"
          type="text"
          value={title}
          onChange={onChange}
          placeholder="Add your todo"
          onKeyDown={onKeyDown}
        />
        <Box
          sx={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <FaPlus
            data-testid="btnAdd"
            className="TodoInput-Button"
            onClick={addTodo}
          />
        </Box>
      </Flex>
    </>
  );
};

export default TodoInput;
