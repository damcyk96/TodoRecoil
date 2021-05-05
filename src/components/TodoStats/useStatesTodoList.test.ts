// eslint-disable-next-line camelcase
import { snapshot_UNSTABLE } from "recoil";
import { todoListStatsState, todosState } from "../../recoil/todo";

const testTodoList = [
  { id: 1, title: "uncompleted", completed: false },
  { id: 2, title: "completed", completed: true },
];

describe("state", () => {
  test("updated state", () => {
    const snapshot = snapshot_UNSTABLE(({ set }) =>
      set(todosState, testTodoList)
    );
    expect(snapshot.getLoadable(todoListStatsState).valueOrThrow()).toEqual({
      totalNum: 2,
      totalCompletedNum: 1,
      totalUncompletedNum: 1,
    });
  });
});
