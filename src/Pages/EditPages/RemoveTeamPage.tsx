import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import actions from "../../Redux/actions";

function RemoveTeamPage() {
  const { REMOVE_TEAM } = actions;
  const state: any = useSelector((state) => state);
  const [index, setIndex] = useState("");
  const dispatch = useDispatch();
  const [team, setTeam] = useState("");

  useEffect(
    () => setIndex(state.findIndex((element: any) => element.name === team)),
    [state, team]
  );

  const removeTeam = () => {
    return {
      type: REMOVE_TEAM,
      teamIndex: index,
    };
  };
  return (
    <div>
      <p>Select the team you want to remove:</p>
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
      <button
        disabled={team ? false : true}
        onClick={() => dispatch(removeTeam())}
      >
        Remove the selected team
      </button>
      <p>{index}</p>
    </div>
  );
}

export default RemoveTeamPage;
