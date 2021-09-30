import React, { useContext } from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Link,
  RouteComponentProps,
} from "react-router-dom";

import { ToggledPlayersContext } from "./TeamPage";
import { PlayerParams } from "../Components/interfaces";

import "../index.scss";
//-------------------------------------------------------------

function PlayerPage({ match }: RouteComponentProps<PlayerParams>) {
  const statePlayers: any = useSelector((state: any) => state.players);
  const Context: any = useContext(ToggledPlayersContext);
  const player = match.params.playerId; //selected player's id

  const selectedPlayer = statePlayers.find(
    (teammate: any) => teammate.id === player
  );

  //----------------RETURN--------------------

  return (
    <Router>
      {Context.isPlayersToggled ? (
        <div className="player-card">
          <Link
            to={`/${selectedPlayer.team}`}
            style={{
              textDecoration: "none",
              color: "black",
            }}
            onClick={() => Context.setIsPlayersToggled(false)}
          >
            <h3 className="exit-tab">{"<<"}</h3>{" "}
          </Link>
          <h3 className="first-second-name">{`${selectedPlayer.firstName} ${selectedPlayer.secondName}`}</h3>
          <img src={selectedPlayer.foto} alt="A The player playing" />
          <h5>{selectedPlayer.role}</h5>
          <h5>{selectedPlayer.birthDate}</h5>
          <h5>{selectedPlayer.birthPlace}</h5>
        </div>
      ) : null}
    </Router>
  );
}

export default PlayerPage;
