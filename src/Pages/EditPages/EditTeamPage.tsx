import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function EditTeamPage() {
  const state: any = useSelector((state) => state);
  const dispatch = useDispatch();
  const [team, setTeam] = useState("");
  const [teamIndex, setTeamIndex] = useState(-1);
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [logo, setLogo] = useState("");
  const [firstColor, setFirstColor] = useState("");
  const [secondColor, setSecondColor] = useState("");
  const [id, setId] = useState("");

  useEffect(
    () =>
      setTeamIndex(state.findIndex((element: any) => element.name === team)),
    [state, team]
  );

  const setProps = () => {
    if (teamIndex > -1) {
      let equipe = state[teamIndex];
      setName(equipe.name);
      setCity(equipe.city);
      setLogo(equipe.logo);
      setFirstColor(equipe.firstColor);
      setSecondColor(equipe.secondColor);
      setId(equipe.id);
    }
  };

  const setNewPlayersArr = () => {
    return state[teamIndex].players;
  };

  useEffect(setProps, [state, teamIndex]);

  const editTeam = () => {
    return {
      type: "EDIT_TEAM",
      teamIndex,
      team: {
        name,
        city,
        logo,
        firstColor,
        secondColor,
        id,
        players: setNewPlayersArr(),
      },
    };
  };

  return (
    <div>
      <div>
        <p>Select the team to edit</p>
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
      {teamIndex > -1 && (
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
            team && name && city && logo && firstColor && secondColor && id
              ? false
              : true
          }
          onClick={() => dispatch(editTeam())}
        >
          Apply the changes
        </button>
      </div>
    </div>
  );
}

export default EditTeamPage;
