import { createStore } from "redux";
import toggleReducer from "../reducers/toggleReducer";

const store = createStore(toggleReducer, { viewside: "front" });

export default store;
