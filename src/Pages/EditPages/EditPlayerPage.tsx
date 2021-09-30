import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import actions from "../../Redux/actions";
import { PlayerType, TeamType } from "../../Components/interfaces";
import Modal from "../../Components/Modal";

function EditPlayerPage() {
  const { EDIT_PLAYER } = actions;

  const dispatch = useDispatch();

  const stateTeams = useSelector((state: any) => state.teams);
  const statePlayers = useSelector((state: any) => state.players);

  const [birthDate, setBirthDate] = useState("");
  const [birthPlace, setBirthPlace] = useState("");
  const [firstName, setFirstName] = useState("");
  const [foto, setFoto] = useState("");
  const [id, setId] = useState("");
  const [popup, setPopup] = useState(false);
  const [role, setRole] = useState("");
  const [secondName, setSecondName] = useState("");
  const [team, setTeam] = useState("");
  console.log(birthDate);
  console.log(birthPlace);
  console.log(firstName);
  console.log(team);
  console.log(id);

  const editPlayer = () => {
    return {
      type: EDIT_PLAYER,
      player: {
        firstName,
        secondName,
        role,
        birthDate,
        birthPlace,
        foto,
        id,
        team,
      },
    };
  };

  const editPlayerPopup = () => {
    setPopup(true);
    dispatch(editPlayer());
  };

  const setProps = () => {
    if (id) {
      let player = statePlayers.find(
        (selectedPlayer: any) => selectedPlayer.id === id
      );
      setFirstName(player.firstName);
      setSecondName(player.secondName);
      setRole(player.role);
      setBirthDate(player.birthDate);
      setBirthPlace(player.birthPlace);
      setFoto(player.foto);
    }
  };

  useEffect(setProps, [id, statePlayers]);

  const setTeamAndResetId = (e: any) => {
    setTeam(e.target.defaultValue);
    setId("");
  };

  //----------------------------------

  return (
    <div className="form-fields">
      <p>Select the team:</p>
      {stateTeams.map((equipe: TeamType) => (
        <div key={equipe.name}>
          <input
            onChange={setTeamAndResetId}
            type="radio"
            value={equipe.name}
            name="team"
          />
          <label>{equipe.name}</label>
        </div>
      ))}
      {team && <p>Now select the right player:</p>}
      {team &&
        statePlayers
          .filter((player: PlayerType) => player.team === team)
          .map((player: PlayerType) => (
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
      {id && (
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
