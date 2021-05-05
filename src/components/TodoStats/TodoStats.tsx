import React from "react";
import { useRecoilValue } from "recoil";
import { todoListStatsState } from "../../recoil/todo";
import { Flex } from "theme-ui";
import TodoStatsItem from "./TodoStatsItem/TodoStatsItem";

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
      <TodoStatsItem donut text="Items completed:" amount={totalCompletedNum} />
      <TodoStatsItem text="Total items:" amount={totalNum} />
      <TodoStatsItem donut text="Items to do:" amount={totalUncompletedNum} />
    </Flex>
  );
}
