import { atom } from "recoil";

export const todoState = atom({
  key: 'todoState', //Unique ID with respect to other atoms/selectors.
  default: []
});
