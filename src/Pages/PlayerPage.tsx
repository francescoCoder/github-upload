import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { HashRouter as Router, Link } from "react-router-dom";

import { ToggledPlayersContext } from "./TeamPage";

import "../index.scss";
//-------------------------------------------------------------

function PlayerPage(props: any) {
  const state: any = useSelector((state) => state);
  const player = props.match.params.playerId; //selected player's id
  const team = props.match.params.teamId; //selected team id
  const teamPlayersArr = state.find(
    (equipe: any) => equipe.id === team
  ).players; //selected team array
  const playerArr = teamPlayersArr.find(
    (teammate: any) => teammate.id === player
  ); //selected player's array
  const Context: any = useContext(ToggledPlayersContext);

  //----------------RETURN--------------------

  return (
    <Router>
      {Context.isPlayersToggled ? (
        <div className="player-card">
          <Link
            to={`/${team}`}
            style={{
              textDecoration: "none",
              color: "black",
            }}
            onClick={() => Context.setIsPlayersToggled(false)}
          >
            <h3 className="exit-tab">{"<<"}</h3>{" "}
          </Link>
          <h3 className="first-second-name">{`${playerArr.firstName} ${playerArr.secondName}`}</h3>
          <img src={playerArr.foto} alt="A The player playing" />
          <h5>{playerArr.role}</h5>
          <h5>{playerArr.birthDate}</h5>
          <h5>{playerArr.birthPlace}</h5>
        </div>
      ) : null}
    </Router>
  );
}

export default PlayerPage;
