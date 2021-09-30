import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NullInitState, TeamType } from "../../Components/interfaces";
import Modal from "../../Components/Modal";

import actions from "../../Redux/actions";

function EditTeamPage() {
  const { EDIT_TEAM } = actions;

  const dispatch = useDispatch();

  const stateTeams = useSelector((state: any) => state.teams);

  const [city, setCity] = useState("");
  const [firstColor, setFirstColor] = useState("");
  const [id, setId] = useState("");
  const [logo, setLogo] = useState("");
  const [name, setName] = useState("");
  const [popup, setPopup] = useState(false);
  const [secondColor, setSecondColor] = useState("");
  const [team, setTeam] = useState("");
  const [teamIndex, setTeamIndex] = useState<NullInitState>(null);

  useEffect(
    () =>
      setTeamIndex(
        stateTeams.findIndex((eqipe: TeamType) => eqipe.name === team)
      ),
    [stateTeams, team]
  );

  const setProps = () => {
    if (teamIndex !== null && stateTeams[teamIndex] !== undefined) {
      let equipe = stateTeams[teamIndex];
      setName(equipe.name);
      setCity(equipe.city);
      setLogo(equipe.logo);
      setFirstColor(equipe.firstColor);
      setSecondColor(equipe.secondColor);
      setId(equipe.id);
    }
  };

  useEffect(setProps, [stateTeams, teamIndex]);

  const editTeam = () => {
    return {
      type: EDIT_TEAM,
      teamIndex,
      team: {
        name,
        city,
        logo,
        firstColor,
        secondColor,
        id,
      },
    };
  };
  const editTeamPopup = () => {
    setPopup(true);
    dispatch(editTeam());
  };

  return (
    <div className="form-fields">
      <div>
        <p>Select the team to edit</p>
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
            No teams to edit at the moment. Try adding a new one
          </p>
        )}
      </div>
      {teamIndex !== null && (
        <div>
          <div>
            <input
              className="set-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label>Modify the team name</label>
          </div>
          <div>
            <input
              className="set-city"
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <label>Modify the city</label>
          </div>
          <div>
            <input
              className="set-logo"
              type="text"
              value={logo}
              onChange={(e) => setLogo(e.target.value)}
            />
            <label>Modify the logo</label>
          </div>
          <div>
            <input
              className="set-first"
              type="text"
              value={firstColor}
              onChange={(e) => setFirstColor(e.target.value)}
            />
            <label>Modify the first color</label>
          </div>
          <div>
            <input
              className="set-second"
              type="text"
              value={secondColor}
              onChange={(e) => setSecondColor(e.target.value)}
            />
            <label>Modify the second color</label>
          </div>
          <div>
            <input
              className="set-id"
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
            <label>Modify the id</label>
          </div>
        </div>
      )}
      <div>
        <button
          disabled={
            !(team && name && city && logo && firstColor && secondColor && id)
          }
          onClick={editTeamPopup}
        >
          Apply the changes
        </button>
      </div>
      {popup === true && (
        <Modal
          action={() => setPopup(false)}
          message="The edit has been uploaded"
        />
      )}
    </div>
  );
}

export default EditTeamPage;
