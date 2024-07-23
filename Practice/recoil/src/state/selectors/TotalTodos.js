import { selector } from "recoil";
import { todoState } from "../atoms/TodoState";

export const totalTodos = selector({
  key: 'totalTodos', // Unique id with respect to other atoms/selectors
  get: ({ get }) => {
    const todoStat = get(todoState);
    return todoStat.length;
  }
})
