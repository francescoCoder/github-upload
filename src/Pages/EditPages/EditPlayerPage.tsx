import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function EditPlayerPage() {
  const state: any = useSelector((state) => state);
  const [team, setTeam] = useState("");
  const dispatch = useDispatch();
  const [teamIndex, setTeamIndex] = useState(-1);
  const [playerIndex, setPlayerIndex] = useState(-1);
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [role, setRole] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [birthPlace, setBirthPlace] = useState("");
  const [foto, setFoto] = useState("");
  const [id, setId] = useState("");

  const editPlayer = () => {
    return {
      type: "EDIT_PLAYER",
      teamIndex,
      playerIndex,
      player: { firstName, secondName, role, birthDate, birthPlace, foto, id },
    };
  };

  useEffect(
    () =>
      setTeamIndex(state.findIndex((element: any) => element.name === team)),
    [state, team]
  );

  useEffect(
    () =>
      setPlayerIndex(
        teamIndex !== -1
          ? state[teamIndex].players.findIndex(
              (element: any) => element.id === id
            )
          : -1
      ),
    [id, state, teamIndex]
  );

  const setProps = () => {
    if (teamIndex > -1 && playerIndex > -1) {
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
    <div>
      <p>Select the team:</p>
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
      {teamIndex > -1 && <p>Now select the right player:</p>}
      {teamIndex >= 0 &&
        state[teamIndex].players.map((player: any) => (
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
      {playerIndex > -1 && (
        <div>
          <div>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label>Modify first name</label>
          </div>
          <div>
            <input
              type="text"
              value={secondName}
              onChange={(e) => setSecondName(e.target.value)}
            />
            <label>Modify second name</label>
          </div>

          <div>
            <input
              type="radio"
              value="forward"
              name="role"
              checked={role === "forward" ? true : false}
              onChange={(e) => setRole(e.target.defaultValue)}
            />{" "}
            Forward
            <input
              type="radio"
              value="goalkeeper"
              name="role"
              checked={role === "goalkeeper" ? true : false}
              onChange={(e) => setRole(e.target.defaultValue)}
            />{" "}
            Goalkeeper
            <input
              type="radio"
              value="defender"
              name="role"
              checked={role === "defender" ? true : false}
              onChange={(e) => setRole(e.target.defaultValue)}
            />{" "}
            Defender
            <input
              type="radio"
              value="midfielder"
              name="role"
              checked={role === "midfielder" ? true : false}
              onChange={(e) => setRole(e.target.defaultValue)}
            />{" "}
            Midfielder
          </div>
          <div>
            <input
              type="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
            />
            <label>Modify the date of birth</label>
          </div>
          <div>
            <input
              type="text"
              value={birthPlace}
              onChange={(e) => setBirthPlace(e.target.value)}
            />
            <label>Modify birth place (format {"=>"} City, Country)</label>
          </div>

          <div>
            <input
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
            <label>Modify id</label>
          </div>
          <div>
            <input
              type="text"
              value={foto}
              onChange={(e) => setFoto(e.target.value)}
            />
            <label>Modify foto url</label>
          </div>
          <button
            disabled={
              team &&
              firstName &&
              secondName &&
              role &&
              birthDate &&
              birthPlace &&
              foto &&
              id
                ? false
                : true
            }
            onClick={() => dispatch(editPlayer())}
          >
            Apply the changes
          </button>
        </div>
      )}
    </div>
  );
}

export default EditPlayerPage;
