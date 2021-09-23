import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Modal from "../../Components/Modal";

import actions from "../../Redux/actions";

function AddTeamPage() {
  const { ADD_TEAM } = actions;

  const dispatch = useDispatch();

  const [city, setCity] = useState("");
  const [firstColor, setFirstColor] = useState("");
  const [id, setId] = useState("");
  const [logo, setLogo] = useState("");
  const [name, setName] = useState("");
  const [popup, setPopup] = useState(false);
  const [secondColor, setSecondColor] = useState("");

  const addTeam = () => {
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

  const addTeamPopup = () => {
    setPopup(true);
    dispatch(addTeam());
  };

  return (
    <div className="form-fields">
      <div>
        <p>Fill the form below to add the new team</p>
        <div className="input-and-label">
          <input
            className="set-name"
            type="text"
            placeholder="insert here the name of the team"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <label>Team name</label>
        </div>
      </div>
      <div className="input-and-label">
        <input
          className="set-city"
          type="text"
          placeholder="insert here the city of the team"
          onChange={(e) => setCity(e.target.value)}
          value={city}
        />
        <label>City</label>
      </div>
      <div className="input-and-label">
        <input
          className="set-logo"
          type="text"
          placeholder="insert here the logo url"
          onChange={(e) => setLogo(e.target.value)}
          value={logo}
        />
        <label>Logo</label>
      </div>
      <div className="input-and-label">
        <input
          className="set-first"
          type="text"
          placeholder="insert here the first color"
          onChange={(e) => setFirstColor(e.target.value)}
          value={firstColor}
        />
        <label>First color</label>
      </div>
      <div className="input-and-label">
        <input
          className="set-second"
          type="text"
          placeholder="insert here the second color"
          onChange={(e) => setSecondColor(e.target.value)}
          value={secondColor}
        />
        <label>Second color</label>
      </div>
      <div className="input-and-label">
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
        disabled={!(name && city && logo && firstColor && secondColor && id)}
        onClick={addTeamPopup}
      >
        Add the Team
      </button>
      {popup === true && (
        <Modal
          action={() => setPopup(false)}
          message="Your team has been added"
        />
      )}
    </div>
  );
}

export default AddTeamPage;
