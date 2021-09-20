import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import actions from "../../Redux/actions";

function AddPlayerPage() {
  const { ADD_PLAYER } = actions;

  const dispatch = useDispatch();

  const state: any = useSelector((state) => state);

  const [birthDate, setBirthDate] = useState("");
  const [birthPlace, setBirthPlace] = useState("");
  const [firstName, setFirstName] = useState("");
  const [id, setId] = useState("");
  const [pictureUrl, setPictureUrl] = useState("");
  const [role, setRole] = useState("");
  const [secondName, setSecondName] = useState("");
  const [team, setTeam] = useState("");

  const addPlayer: any = () => {
    return {
      type: ADD_PLAYER,
      team: team,
      player: {
        firstName: firstName,
        secondName: secondName,
        role: role,
        birthDate: birthDate,
        birthPlace: birthPlace,
        id: id,
        foto: pictureUrl,
      },
    };
  };

  // const passDataToStateAndLocalStorage = () => {
  //   dispatch(addPlayer());
  //   localStorage.setItem("teams", JSON.stringify(state));
  // };

  return (
    <div>
      <div>
        <p>Select the team</p>
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
        <input
          type="text"
          placeholder="insert here the first name"
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
        />
        <label>First name</label>
      </div>
      <div>
        <input
          type="text"
          placeholder="insert here the second name"
          onChange={(e) => setSecondName(e.target.value)}
          value={secondName}
        />
        <label>Second name</label>
      </div>
      <div>
        <input
          type="radio"
          value="forward"
          name="role"
          onChange={(e) => setRole(e.target.defaultValue)}
        />{" "}
        Forward
        <input
          type="radio"
          value="goalkeeper"
          name="role"
          onChange={(e) => setRole(e.target.defaultValue)}
        />{" "}
        Goalkeeper
        <input
          type="radio"
          value="defender"
          name="role"
          onChange={(e) => setRole(e.target.defaultValue)}
        />{" "}
        Defender
        <input
          type="radio"
          value="midfielder"
          name="role"
          onChange={(e) => setRole(e.target.defaultValue)}
        />{" "}
        Midfielder
      </div>
      <div>
        <input type="date" onChange={(e) => setBirthDate(e.target.value)} />
        <label>Birthdate</label>
      </div>
      <div>
        <input
          type="text"
          placeholder="insert here the place of birth"
          onChange={(e) => setBirthPlace(e.target.value)}
        />
        <label>Birthplace format {"=>"} City, Country</label>
      </div>
      <div>
        <input
          type="text"
          placeholder="insert here the picture URL"
          onChange={(e) => setPictureUrl(e.target.value)}
        />
        <label>Picture URL</label>
      </div>
      <div>
        <input
          type="text"
          placeholder="insert here the player's id"
          onChange={(e) => setId(e.target.value)}
        />
      </div>

      <button
        disabled={
          team &&
          firstName &&
          secondName &&
          role &&
          birthDate &&
          birthPlace &&
          pictureUrl &&
          id
            ? false
            : true
        }
        onClick={() => dispatch(addPlayer())}
      >
        Add the Player
      </button>
    </div>
  );
}

export default AddPlayerPage;
