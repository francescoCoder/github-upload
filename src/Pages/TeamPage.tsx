import React, { createContext, useState } from "react";
import { useSelector } from "react-redux";
import {
  HashRouter as Router,
  Link,
  Route,
  Switch,
  RouteComponentProps,
} from "react-router-dom";

import PlayerPage from "./PlayerPage";
import { PlayerType, TeamType, TeamParams } from "../Components/interfaces";

import "../index.scss";
//-------------------------------------------------------------

export const ToggledPlayersContext = createContext({});
//---------------------------------------------

function TeamPage({ match }: RouteComponentProps<TeamParams>) {
  const state = useSelector((state: TeamType[]) => state);
  const teamId = match.params.idTeam;
  const team = state.find((equipe: TeamType) => equipe.id === teamId);
  const players = team && team.players;
  const teamName = team && team.name;

  const [isPlayersToggled, setIsPlayersToggled] = useState(false);
  return (
    <ToggledPlayersContext.Provider
      value={{
        isPlayersToggled,
        setIsPlayersToggled,
      }}
    >
      <Router>
        <div className="container">
          <div className="color-stripes">
            <div
              className="left"
              style={{ backgroundColor: team && team.firstColor }}
            />
            <div
              className="right"
              style={{ backgroundColor: team && team.secondColor }}
            />
          </div>
          <div className="team-logo">
            <img src={team && team.logo} alt="the team logo" />
          </div>
          <div>
            <h2 className="team-name">{teamName}</h2>
            <ul className="players-list">
              <strong>Players:</strong>
              <p></p>
              <div className="list-players">
                {players &&
                  players.map((player: PlayerType) => (
                    <Link
                      className="player-name"
                      to={`/${teamId}/${player.id}`}
                      key={player.id}
                      style={{
                        textDecoration: "none",
                        color: "black",
                      }}
                      onClick={() => setIsPlayersToggled(true)}
                    >
                      <li className="player-name">{`${player.firstName} ${player.secondName}`}</li>
                    </Link>
                  ))}
              </div>
            </ul>
          </div>
          <div className="color-stripes">
            <div style={{ backgroundColor: team && team.firstColor }} />
            <div style={{ backgroundColor: team && team.secondColor }} />
          </div>
        </div>

        <Switch>
          <Route path={`/:teamId/:playerId`} component={PlayerPage}></Route>
        </Switch>
      </Router>
    </ToggledPlayersContext.Provider>
  );
}

export default TeamPage;
