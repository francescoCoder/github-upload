import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PlayerType, TeamType } from "../../Components/interfaces";
import Modal from "../../Components/Modal";

import actions from "../../Redux/actions";

//------------------------------------------------------------

function RemovePlayerPage() {
  const { REMOVE_PLAYER } = actions;

  const dispatch = useDispatch();

  const stateTeams = useSelector((state: any) => state.teams);
  const statePlayers = useSelector((state: any) => state.players);

  const [id, setId] = useState("");
  const [popup, setPopup] = useState(false);
  const [team, setTeam] = useState("");

  const removePlayer = () => {
    return {
      type: REMOVE_PLAYER,
      id,
    };
  };

  const removePlayerPopup = () => {
    setPopup(true);
    dispatch(removePlayer());
  };

  return (
    <div className="form-fields">
      <div>
        <p>Select the team:</p>
        {stateTeams.length > 0 ? (
          stateTeams.map((equipe: TeamType) => (
            <div key={equipe.name}>
              <input
                onChange={(e) => setTeam(e.target.defaultValue)}
                type="radio"
                value={equipe.name}
                name="team"
              />
              <label>{equipe.name}</label>
            </div>
          ))
        ) : (
          <p className="alert">
            No teams means no players... but you can add them whenever you want!
          </p>
        )}
      </div>
      <div>
        {team !== "" && <p>Now select the player:</p>}
        {statePlayers
          .filter((player: PlayerType) => player.team === team)
          .map((player: PlayerType) => (
            <div key={player.id}>
              <input
                onChange={(e) => setId(e.target.defaultValue)}
                type="radio"
                value={player.id}
                name="player"
              />
              <label>{`${player.firstName} ${player.secondName}`}</label>
            </div>
          ))}
        {team !== "" &&
          statePlayers.filter((player: PlayerType) => player.team === team)
            .length === 0 && <p className="alert">No players to display</p>}
      </div>
      <button disabled={!(team && id)} onClick={removePlayerPopup}>
        Remove the selected Player
      </button>
      {popup === true && (
        <Modal
          action={() => setPopup(false)}
          message="The player you chose has been removed"
        />
      )}
    </div>
  );
}

export default RemovePlayerPage;
