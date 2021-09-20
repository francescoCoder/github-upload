import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function RemovePlayerPage() {
  const state: any = useSelector((state) => state);
  const dispatch = useDispatch();
  const [team, setTeam] = useState("");
  const [teamIndex, setTeamIndex] = useState(-1);
  const [id, setId] = useState("");
  const removePlayer: any = () => {
    return {
      type: "REMOVE_PLAYER",
      team: team,
      id: id,
    };
  };

  useEffect(
    () =>
      setTeamIndex(state.findIndex((element: any) => element.name === team)),
    [state, team]
  );

  return (
    <div>
      <div>
        <p>Select the team:</p>
        {state.map((equipe: any) => (
          <div key={equipe.name}>
            <input
              onChange={(e) => setTeam(e.target.defaultValue)}
              type="radio"
              value={equipe.name}
              name="team"
            />
            <label>{equipe.name}</label>
          </div>
        ))}
      </div>
      <div>
        <p>Select the player:</p>
        {teamIndex >= 0 &&
          state[teamIndex].players.map((player: any) => (
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
      </div>
      <button
        disabled={team && id ? false : true}
        onClick={() => dispatch(removePlayer())}
      >
        Remove the selected Player
      </button>
    </div>
  );
}

export default RemovePlayerPage;
