import { createStore } from "redux";
import CombinedReducer from "./reducer/index";

const store = createStore(CombinedReducer);

export default store;
