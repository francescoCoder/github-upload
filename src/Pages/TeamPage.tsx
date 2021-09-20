import React, { createContext, useState } from "react";
import { useSelector } from "react-redux";
import { HashRouter as Router, Link, Route, Switch } from "react-router-dom";

import PlayerPage from "./PlayerPage";

import "../index.scss";
//-------------------------------------------------------------


export const ToggledPlayersContext = createContext({});
//---------------------------------------------

function TeamPage(props: any) {
  const state: any = useSelector((state) => state);
  const teamId = props.match.params.idTeam;
  const team = state.find((equipe: any) => equipe.id === teamId);
  const players = team.players;
  const teamName = team.name;

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
              style={{ backgroundColor: team.firstColor }}
            />
            <div
              className="right"
              style={{ backgroundColor: team.secondColor }}
            />
          </div>
          <div className="team-logo">
            <img src={team.logo} alt="the team logo" />
          </div>
          <div>
            <h2 className="team-name">{teamName}</h2>
            <ul className="players-list">
              <strong>Players:</strong>
              <p></p>
              {players.map((player: any) => (
                <Link
                  to={`/${teamId}/${player.id}`}
                  key={player.id}
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                  onClick={() => setIsPlayersToggled(true)}
                >
                  <li>{`${player.firstName} ${player.secondName}`}</li>
                </Link>
              ))}
            </ul>
          </div>
          <div className="color-stripes">
            <div style={{ backgroundColor: team.firstColor }} />
            <div style={{ backgroundColor: team.secondColor }} />
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
