import { createStore } from "redux";
import combinedReducer from "./Reducers/combinedReducer";

const store = createStore(combinedReducer);

export default store;
