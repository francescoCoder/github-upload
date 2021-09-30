import { AnyAction } from "redux";

import actions from "../actions";
const { ADD_PLAYER, REMOVE_PLAYER, EDIT_PLAYER, UPDATE_STATE_PLAYERS } =
  actions;
export default function reducer(
  state = JSON.parse(localStorage.players),
  action: AnyAction
) {
  switch (action.type) {
    case UPDATE_STATE_PLAYERS:
      state = action.players;
      return state;

    case ADD_PLAYER:
      return [...state, action.player];

    case REMOVE_PLAYER:
      const newState = state.filter((player: any) => player.id !== action.id);
      return newState;

    case EDIT_PLAYER:
      const playerIndex = state.findIndex(
        (player: any) => player.id === action.player.id
      );
      return state
        .slice(0, playerIndex)
        .concat(action.player)
        .concat(state.slice(playerIndex + 1));

    default:
      return state;
  }
}
