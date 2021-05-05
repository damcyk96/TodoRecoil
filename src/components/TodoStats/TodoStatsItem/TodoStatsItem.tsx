import React from "react";
import { useRecoilValue } from "recoil";
import { todoListStatsState } from "../../../recoil/todo";
import { Flex, Box, Donut, Text } from "theme-ui";

const TodoStatsItem = ({ donut = false, text, amount }) => {
  const { totalNum } = useRecoilValue(todoListStatsState);
  return (
    <>
      <Box p={2} bg="primary" sx={{ flex: "1 1 auto" }}>
        <Text
          m={2}
          sx={{
            color: "black",
            border: "1px solid blue",
            padding: "0.5rem 1rem",
            borderRadius: "1rem",
            display: "flex",
            alignItems: "center",
            height: "100%",
          }}
        >
          {text}: {amount}
          {donut ? <Donut value={amount / totalNum} /> : null}
        </Text>
      </Box>
    </>
  );
};

export default TodoStatsItem;
