import React, { useCallback, useMemo, useState } from "react";
import { useRecoilState } from "recoil";
import { todosState } from "recoil/todo";
import { ITodoTypes } from "interface/todo";
import TodoItem from "./TodoItem";
import { Text, Flex } from "theme-ui";

import { TODO_TYPE } from "../../pages/constants";
import { Box, Input } from "theme-ui";
import TodoInput from "components/TodoInput/TodoInput";

const TodoList = ({ todoType }): JSX.Element => {
  const [todos, setTodos] = useRecoilState<ITodoTypes[]>(todosState);
  const [filter, setFilter] = useState("");

  const filteredTodos = useMemo(() => {
    const data = todos.filter((t) => t.title.includes(filter));
    if (todoType === TODO_TYPE.COMPLETED) {
      return data.filter((i) => i.completed);
    }

    if (todoType === TODO_TYPE.UNCOMPLETED) {
      return data.filter((i) => !i.completed);
    }

    return data;
  }, [filter, todos, todoType]);

  const onComplete = useCallback(
    (id: number): void => {
      setTodos(
        todos.map((todo: ITodoTypes) => {
          return todo.id === id
            ? { ...todo, completed: !todo.completed }
            : todo;
        })
      );
    },
    [setTodos, todos]
  );

  const onDelete = useCallback(
    (id: number) => {
      setTodos(todos.filter((todo: ITodoTypes) => todo.id !== id));
    },
    [setTodos, todos]
  );

  return (
    <Box sx={{ margin: 50, padding: 0, width: "80%" }}>
      <Input
        sx={{ marginBottom: 50 }}
        placeholder="Find by title"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <TodoInput />
      {filteredTodos.length > 0 ? (
        filteredTodos.map(({ id, title, completed }: ITodoTypes) => (
          <TodoItem
            key={id}
            id={id}
            title={title}
            completed={completed}
            onComplete={onComplete}
            onDelete={onDelete}
            todos={todos}
            setTodos={setTodos}
          />
        ))
      ) : (
        <Flex sx={{ alignItems: "center", justifyContent: "center" }}>
          <Text color="red">No todos</Text>
        </Flex>
      )}
    </Box>
  );
};

export default TodoList;
