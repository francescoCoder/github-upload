import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import localStorage from "../../localStorage";

function AddTeamPage() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [logo, setLogo] = useState("");
  const [firstColor, setFirstColor] = useState("");
  const [secondColor, setSecondColor] = useState("");
  const [id, setId] = useState("");

  const updateState: any = () => {
    return {
      type: "UPDATE_STATE",
      state: JSON.parse(localStorage.teams),
    };
  };

  const updateAll = () => {
    localStorage.setItem("teams", JSON.stringify(state));
    console.log(localStorage.teams);
    dispatch(updateState());
  };

  const addTeam: any = () => {
    return {
      type: "ADD_TEAM",
      team: {
        name: name,
        city: city,
        logo: logo,
        firstColor: firstColor,
        secondColor: secondColor,
        id: id,
        players: [],
      },
    };
  };

  // const dispatchAll = () => {
  //   dispatch(addTeam());
  //   dispatch(updateState());
  // };

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
        // onMouseLeave={updateAll}
      >
        Add the Team
      </button>
    </div>
  );
}

export default AddTeamPage;

// "city": "Turin",
//       "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Juventus_Logo.png/1200px-Juventus_Logo.png",
//       "firstColor": "white",
//       "secondColor": "black",
//       "id": "JVNTRN97",
//       "players": [
