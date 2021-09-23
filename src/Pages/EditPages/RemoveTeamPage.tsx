import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { NullInitState, TeamType } from "../../Components/interfaces";
import Modal from "../../Components/Modal";
import actions from "../../Redux/actions";

function RemoveTeamPage() {
  const { REMOVE_TEAM } = actions;
  const state = useSelector((state: TeamType[]) => state);
  const [index, setIndex] = useState<NullInitState>(null);
  const dispatch = useDispatch();
  const [popup, setPopup] = useState(false);
  const [team, setTeam] = useState("");

  useEffect(
    () => setIndex(state.findIndex((equipe: TeamType) => equipe.name === team)),
    [state, team]
  );

  const removeTeam = () => {
    return {
      type: REMOVE_TEAM,
      teamIndex: index,
    };
  };

  const removeTeamPopup = () => {
    setPopup(true);
    dispatch(removeTeam());
  };
  return (
    <div className="form-fields">
      <p>Select the team you want to remove:</p>
      {state.length > 0 ? (
        state.map((equipe: TeamType) => (
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
        <p className="alert">No teams</p>
      )}
      <button disabled={!team} onClick={removeTeamPopup}>
        Remove the selected team
      </button>
      {popup === true && (
        <Modal
          action={() => setPopup(false)}
          message="The team you chose was removed"
        />
      )}
    </div>
  );
}

export default RemoveTeamPage;
