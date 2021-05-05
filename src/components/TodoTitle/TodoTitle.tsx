import React from "react";
import { Heading } from "theme-ui";

const TodoTitle = ({ headline }): JSX.Element => {
  return (
    <Heading as="h1" color="white">
      {headline}
    </Heading>
  );
};

export default TodoTitle;
