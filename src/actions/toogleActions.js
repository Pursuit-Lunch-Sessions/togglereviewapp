import { TOGGLE } from "./actionTypes";

export const toggle = (viewside) => {
  return {
    type: TOGGLE,
    payload: {
      viewside: viewside,
    },
  };
};
