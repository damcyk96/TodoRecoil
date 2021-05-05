import React, { ChangeEvent, useCallback, KeyboardEvent } from "react";
import "./TodoSearch.scss";
import { Input } from "theme-ui";
import { FaPen } from "react-icons/fa";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { inputState, todosState } from "../../recoil/todo";
import { ITodoTypes } from "interface/todo";

const TodoSearch = (): JSX.Element => {
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
      <Input
        type="text"
        className="TodoInput-Input"
        value={title}
        onChange={onChange}
        placeholder="Type your todo"
        onKeyDown={onKeyDown}
      />
      <FaPen className="TodoInput-Button" onClick={addTodo} />
    </>
  );
};

export default TodoSearch;
