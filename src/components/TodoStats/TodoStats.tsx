import React from "react";
import { useRecoilValue } from "recoil";
import { todoListStatsState } from "../../recoil/todo";
import { Flex, Box, Donut, Text } from "theme-ui";

// ------ Component: TodoListStats ---
export default function TodoListStats() {
  const { totalNum, totalCompletedNum, totalUncompletedNum } = useRecoilValue(
    todoListStatsState
  );

  return (
    <Flex
      pt={4}
      bg="primary"
      sx={{
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
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
          Items completed: {totalCompletedNum}
          <Donut value={totalCompletedNum / totalNum} />
        </Text>
      </Box>
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
          Total items: {totalNum}
        </Text>
      </Box>
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
          Items not completed: {totalUncompletedNum}
          <Donut value={totalUncompletedNum / totalNum} />
        </Text>
      </Box>
    </Flex>
  );
}
