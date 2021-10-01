import React, { useContext } from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Link,
  RouteComponentProps,
} from "react-router-dom";

import { ToggledPlayersContext } from "./TeamPage";
import { PlayerParams, PlayerType, StateType } from "../Components/interfaces";

import "../index.scss";
//-------------------------------------------------------------

function PlayerPage({ match }: RouteComponentProps<PlayerParams>) {
  const statePlayers = useSelector((state: StateType) => state.players);
  const Context: any = useContext(ToggledPlayersContext);
  const player = match.params.playerId; //selected player's id

  const selectedPlayer = statePlayers.find(
    (teammate: PlayerType) => teammate.id === player
  );

  //----------------RETURN--------------------

  return (
    <Router>
      {Context.isPlayersToggled ? (
        <div className="player-card">
          <Link
            to={`/${selectedPlayer && selectedPlayer.team}`}
            style={{
              textDecoration: "none",
              color: "black",
            }}
            onClick={() => Context.setIsPlayersToggled(false)}
          >
            <h3 className="exit-tab">{"<<"}</h3>{" "}
          </Link>
          <h3 className="first-second-name">{`${
            selectedPlayer && selectedPlayer.firstName
          } ${selectedPlayer && selectedPlayer.secondName}`}</h3>
          <img
            src={selectedPlayer && selectedPlayer.foto}
            alt="A The player playing"
          />
          <h5>{selectedPlayer && selectedPlayer.role}</h5>
          <h5>{selectedPlayer && selectedPlayer.birthDate}</h5>
          <h5>{selectedPlayer && selectedPlayer.birthPlace}</h5>
        </div>
      ) : null}
    </Router>
  );
}

export default PlayerPage;
