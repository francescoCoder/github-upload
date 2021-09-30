import { AnyAction } from "redux";
import actions from "../actions";

const { ADD_TEAM, REMOVE_TEAM, EDIT_TEAM, UPDATE_STATE_TEAMS } = actions;
export default function reducer(
  state = JSON.parse(localStorage.teams),
  action: AnyAction
) {
  switch (action.type) {
    case UPDATE_STATE_TEAMS:
      state = action.teams;
      return state;

    case ADD_TEAM:
      return [...state, action.team];

    case REMOVE_TEAM:
      const newState = state.filter((team: any) => team.name !== action.name);
      return newState;

    case EDIT_TEAM:
      const teamIndex = action.teamIndex;
      return state
        .slice(0, teamIndex)
        .concat(action.team)
        .concat(state.slice(teamIndex + 1));

    default:
      return state;
  }
}
