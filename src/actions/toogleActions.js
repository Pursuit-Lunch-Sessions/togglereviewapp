import { TOGGLE } from "./actionTypes";

export const toggle = (view) => {
  return {
    type: TOGGLE,
    payload: {
      view: view,
    },
  };
};
