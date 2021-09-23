import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import actions from "../../Redux/actions";
import {
  NullInitState,
  PlayerType,
  TeamType,
} from "../../Components/interfaces";
import Modal from "../../Components/Modal";

function EditPlayerPage() {
  const { EDIT_PLAYER } = actions;

  const dispatch = useDispatch();

  const state = useSelector((state: TeamType[]) => state);

  const [birthDate, setBirthDate] = useState("");
  const [birthPlace, setBirthPlace] = useState("");
  const [firstName, setFirstName] = useState("");
  const [foto, setFoto] = useState("");
  const [id, setId] = useState("");
  const [playerIndex, setPlayerIndex] = useState<NullInitState>(null);
  const [popup, setPopup] = useState(false);
  const [role, setRole] = useState("");
  const [secondName, setSecondName] = useState("");
  const [team, setTeam] = useState("");
  const [teamIndex, setTeamIndex] = useState<NullInitState>(null);

  const editPlayer = () => {
    return {
      type: EDIT_PLAYER,
      teamIndex,
      playerIndex,
      player: { firstName, secondName, role, birthDate, birthPlace, foto, id },
    };
  };

  const editPlayerPopup = () => {
    setPopup(true);
    dispatch(editPlayer());
  };

  useEffect(
    () =>
      setTeamIndex(state.findIndex((equipe: TeamType) => equipe.name === team)),
    [state, team]
  );

  useEffect(
    () =>
      setPlayerIndex(
        teamIndex !== null && state[teamIndex]
          ? state[teamIndex].players.findIndex(
              (player: PlayerType) => player.id === id
            )
          : null
      ),
    [id, state, teamIndex]
  );

  const setProps = () => {
    if (
      teamIndex !== null &&
      playerIndex !== null &&
      state[teamIndex].players[playerIndex]
    ) {
      let player = state[teamIndex].players[playerIndex];
      setFirstName(player.firstName);
      setSecondName(player.secondName);
      setRole(player.role);
      setBirthDate(player.birthDate);
      setBirthPlace(player.birthPlace);
      setFoto(player.foto);
      setId(player.id);
    }
  };

  useEffect(setProps, [playerIndex, state, teamIndex]);
  return (
    <div className="form-fields">
      <p>Select the team:</p>
      {state.map((equipe: TeamType) => (
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
      {teamIndex !== null && <p>Now select the right player:</p>}
      {teamIndex !== null &&
        state[teamIndex] !== undefined &&
        state[teamIndex].players.map((player: PlayerType) => (
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
      {playerIndex !== null && (
        <div>
          <div className="input-and-label">
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label>Modify first name</label>
          </div>
          <div className="input-and-label">
            <input
              type="text"
              value={secondName}
              onChange={(e) => setSecondName(e.target.value)}
            />
            <label>Modify second name</label>
          </div>
          <div className="main-role-list">
            <div className="role-list">
              <span className="role-item">
                <input
                  type="radio"
                  value="forward"
                  name="role"
                  checked={role === "forward" ? true : false}
                  onChange={(e) => setRole(e.target.defaultValue)}
                />{" "}
                Forward
              </span>

              <span className="role-item">
                <input
                  type="radio"
                  value="goalkeeper"
                  name="role"
                  checked={role === "goalkeeper" ? true : false}
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
                  checked={role === "defender" ? true : false}
                  onChange={(e) => setRole(e.target.defaultValue)}
                />{" "}
                Defender
              </span>
              <span className="role-item">
                <input
                  type="radio"
                  value="midfielder"
                  name="role"
                  checked={role === "midfielder" ? true : false}
                  onChange={(e) => setRole(e.target.defaultValue)}
                />{" "}
                Midfielder
              </span>
            </div>
          </div>
          <div className="input-and-label">
            <input
              type="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
            />
            <label>Modify the date of birth</label>
          </div>
          <div className="input-and-label">
            <input
              type="text"
              value={birthPlace}
              onChange={(e) => setBirthPlace(e.target.value)}
            />
            <label>Modify birth place (format {"=>"} City, Country)</label>
          </div>

          <div className="input-and-label">
            <input
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
            <label>Modify id</label>
          </div>
          <div className="input-and-label">
            <input
              type="text"
              value={foto}
              onChange={(e) => setFoto(e.target.value)}
            />
            <label>Modify foto url</label>
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
            onClick={editPlayerPopup}
          >
            Apply the changes
          </button>
        </div>
      )}
      {popup === true && (
        <Modal
          action={() => setPopup(false)}
          message="The edit has been uploaded"
        />
      )}
    </div>
  );
}

export default EditPlayerPage;
