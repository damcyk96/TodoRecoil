import { atom, selector } from "recoil";
import { ITodoTypes } from "interface/todo";

export const inputState = atom<string>({
  key: "inputState",
  default: "",
});

const asyncDefault = selector({
  key: "asyncDefault",
  get: async () => {
    const url = `https://gorest.co.in/public-api/todos`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    console.log(data);
    return data;
  },
});

export const todosState = atom<ITodoTypes[]>({
  key: "todos",
  default: asyncDefault,
});

export const todoListStatsState = selector({
  key: "todoListStatsState",
  get: ({ get }) => {
    const todoList = get(todosState);
    const totalNum = todoList.length;
    const totalCompletedNum = todoList.filter((item) => item.completed).length;
    const totalUncompletedNum = totalNum - totalCompletedNum;

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
    };
  },
});

export const todoListFilterState = atom({
  key: "todoListFilterState",
  default: "Show All",
});

export const filteredTodoListState = selector({
  key: "filteredTodoListState",
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todosState);
    console.log(list);

    switch (filter) {
      case "Show Completed":
        return list.filter((item) => item.completed);
      case "Show Uncompleted":
        return list.filter((item) => !item.completed);
      default:
        return list;
    }
  },
});
