import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TeamType } from "../../Components/interfaces";
import Modal from "../../Components/Modal";

import actions from "../../Redux/actions";

function AddPlayerPage() {
  const { ADD_PLAYER } = actions;

  const dispatch = useDispatch();

  const state = useSelector((state: TeamType[]) => state);

  const [birthDate, setBirthDate] = useState("");
  const [birthPlace, setBirthPlace] = useState("");
  const [firstName, setFirstName] = useState("");
  const [id, setId] = useState("");
  const [foto, setFoto] = useState("");
  const [popup, setPopup] = useState(false);
  const [role, setRole] = useState("");
  const [secondName, setSecondName] = useState("");
  const [team, setTeam] = useState("");

  const addPlayer = () => {
    return {
      type: ADD_PLAYER,
      team,
      player: {
        firstName,
        secondName,
        role,
        birthDate,
        birthPlace,
        id,
        foto,
      },
    };
  };

  const addPlayerPopup = () => {
    setPopup(true);
    dispatch(addPlayer());
  };

  return (
    <div className="form-fields">
      <div>
        <p>Select the team</p>
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
          <p className="alert">You need to add a team first!</p>
        )}
      </div>
      <div className="input-and-label">
        <input
          type="text"
          placeholder="insert here the first name"
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
        />
        <label>First name</label>
      </div>
      <div className="input-and-label">
        <input
          type="text"
          placeholder="insert here the second name"
          onChange={(e) => setSecondName(e.target.value)}
          value={secondName}
        />
        <label>Second name</label>
      </div>
      <div className="main-role-list">
        <div className="role-list">
          <span className="role-item">
            <input
              type="radio"
              value="forward"
              name="role"
              onChange={(e) => setRole(e.target.defaultValue)}
            />{" "}
            Forward
          </span>
          <span className="role-item">
            <input
              type="radio"
              value="goalkeeper"
              name="role"
              onChange={(e) => setRole(e.target.defaultValue)}
            />{" "}
            Goalkeeper
          </span>
        </div>
        <div className="role-list">
          <span className="role-item">
            <input
              type="radio"
              value="defender"
              name="role"
              onChange={(e) => setRole(e.target.defaultValue)}
            />{" "}
            Defender
          </span>
          <span className="role-item">
            <input
              type="radio"
              value="midfielder"
              name="role"
              onChange={(e) => setRole(e.target.defaultValue)}
            />{" "}
            Midfielder
          </span>
        </div>
      </div>
      <div className="input-and-label">
        <input type="date" onChange={(e) => setBirthDate(e.target.value)} />
        <label>Birthdate</label>
      </div>
      <div className="input-and-label">
        <input
          type="text"
          placeholder="insert here the place of birth"
          onChange={(e) => setBirthPlace(e.target.value)}
        />
        <label>Birthplace format {"=>"} City, Country</label>
      </div>
      <div className="input-and-label">
        <input
          type="text"
          placeholder="insert here the picture URL"
          onChange={(e) => setFoto(e.target.value)}
        />
        <label>Picture URL</label>
      </div>
      <div className="input-and-label">
        <input
          type="text"
          placeholder="insert here the player's id"
          onChange={(e) => setId(e.target.value)}
        />
        <label>ID</label>
      </div>

      <button
        disabled={
          !(
            team &&
            firstName &&
            secondName &&
            role &&
            birthDate &&
            birthPlace &&
            foto &&
            id
          )
        }
        onClick={addPlayerPopup}
      >
        Add the Player
      </button>
      {popup === true && (
        <Modal
          action={() => setPopup(false)}
          message="Your player has been added"
        />
      )}
    </div>
  );
}

export default AddPlayerPage;
