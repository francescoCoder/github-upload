import { combineReducers } from "redux";
import teamReducer from "./teamReducer";
import playerReducer from "./playerReducer";

const combinedReducer = combineReducers({
  teams: teamReducer,
  players: playerReducer,
});

export default combinedReducer;
