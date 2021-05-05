import React, { Suspense } from "react";
import "./TodoTemplate.scss";
import { Box, Heading } from "theme-ui";
import TodoList from "components/TodoList";
import TodoTitle from "components/TodoTitle";
import Navigation from "components/Navigation/Navigation";
import TodoStats from "components/TodoStats";

const TodoTemplate = ({ todoType = "" }): JSX.Element => {
  return (
    <Box
      sx={{
        margin: 0,
        padding: 0,
        width: "100%",
        minHeight: "100vh",
      }}
    >
      <div className="TodoTemplate-Contents">
        <TodoTitle headline="TodoList with recoil" />
        <Navigation />
        <Suspense fallback={<Heading>Loading todos...</Heading>}>
          <TodoStats />
          <TodoList todoType={todoType} />
        </Suspense>
      </div>
    </Box>
  );
};

export default TodoTemplate;
