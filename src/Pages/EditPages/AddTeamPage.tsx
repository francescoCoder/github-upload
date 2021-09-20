import React, { useState } from "react";
import { useDispatch } from "react-redux";

import actions from "../../Redux/actions";

function AddTeamPage() {
  const { ADD_TEAM } = actions;
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [logo, setLogo] = useState("");
  const [firstColor, setFirstColor] = useState("");
  const [secondColor, setSecondColor] = useState("");
  const [id, setId] = useState("");

  const addTeam: any = () => {
    return {
      type: ADD_TEAM,
      team: {
        name,
        city,
        logo,
        firstColor,
        secondColor,
        id,
        players: [],
      },
    };
  };

  return (
    <div>
      <div>
        <p>Fill the form below to add the new team</p>
        <input
          className="set-name"
          type="text"
          placeholder="insert here the name of the team"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <label>Team name</label>
      </div>
      <div>
        <input
          className="set-city"
          type="text"
          placeholder="insert here the city of the team"
          onChange={(e) => setCity(e.target.value)}
          value={city}
        />
        <label>City</label>
      </div>
      <div>
        <input
          className="set-logo"
          type="text"
          placeholder="insert here the logo url"
          onChange={(e) => setLogo(e.target.value)}
          value={logo}
        />
        <label>Logo</label>
      </div>
      <div>
        <input
          className="set-first"
          type="text"
          placeholder="insert here the first color"
          onChange={(e) => setFirstColor(e.target.value)}
          value={firstColor}
        />
        <label>First color</label>
      </div>
      <div>
        <input
          className="set-second"
          type="text"
          placeholder="insert here the second color"
          onChange={(e) => setSecondColor(e.target.value)}
          value={secondColor}
        />
        <label>Second color</label>
      </div>
      <div>
        <input
          className="set-id"
          type="text"
          placeholder="insert here the id"
          onChange={(e) => setId(e.target.value)}
          value={id}
        />
        <label>Id</label>
      </div>
      <button
        disabled={
          name && city && logo && firstColor && secondColor && id ? false : true
        }
        onClick={() => dispatch(addTeam())}
      >
        Add the Team
      </button>
    </div>
  );
}

export default AddTeamPage;
