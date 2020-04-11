import { TOGGLE } from "../actions/actionTypes.js";

const _defaultState = {};

const toggleReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  const newState = { ...state };

  switch (action.type) {
    case TOGGLE:
      newState.viewside = action.payload.viewside;
      return newState;
    default:
      return state;
  }
};
export default toggleReducer;
