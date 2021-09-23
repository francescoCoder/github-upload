import { AnyAction } from "redux";
import { PlayerType, TeamType } from "../../Components/interfaces";
import localStorage from "../../localStorage";

export default function reducer(
  state = JSON.parse(localStorage.teams),
  action: AnyAction
) {
  switch (action.type) {
    case "ADD_PLAYER": {
      const teamIndex = state.findIndex(
        (team: TeamType) => team.name === action.team
      );
      const newState = [...state];
      newState[teamIndex].players.push(action.player);

      return newState;
    }
    case "REMOVE_PLAYER": {
      const teamIndex = state.findIndex(
        (team: TeamType) => team.name === action.team
      );
      const playerIndex = state[teamIndex].players.findIndex(
        (player: PlayerType) => player.id === action.id
      );
      const newPlayersArr = state[teamIndex].players
        .slice(0, playerIndex)
        .concat(state[teamIndex].players.slice(playerIndex + 1));
      const newTeamObj = { ...state[teamIndex] };
      newTeamObj.players = newPlayersArr;
      const newState = [...state];
      newState[teamIndex] = newTeamObj;
      return newState;
    }
    case "ADD_TEAM":
      return [...state, action.team];
    case "REMOVE_TEAM":
      return state
        .slice(0, action.teamIndex)
        .concat(state.slice(action.teamIndex + 1));
    case "EDIT_PLAYER": {
      const teamIndex = action.teamIndex;
      const playerIndex = action.playerIndex;
      const newPlayersArr = state[teamIndex].players
        .slice(0, playerIndex)
        .concat(action.player)
        .concat(state[teamIndex].players.slice(playerIndex + 1));
      const newTeamObj = { ...state[teamIndex] };
      newTeamObj.players = newPlayersArr;
      return state
        .slice(0, teamIndex)
        .concat(newTeamObj)
        .concat(state.slice(teamIndex + 1));
    }
    case "EDIT_TEAM": {
      const teamIndex = action.teamIndex;
      return state
        .slice(0, teamIndex)
        .concat(action.team)
        .concat(state.slice(teamIndex + 1));
    }
    case "UPDATE_STATE":
      return action.state;

    default:
      return state;
  }
}

// const newPlayersArr = state.slice(0, teamIndex).concat(state.slice(teamIndex + 1));
