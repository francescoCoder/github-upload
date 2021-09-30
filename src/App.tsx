import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Navbar from "./Components/Navbar";
import localStorage from "./localStorage";
import actions from "./Redux/actions";

import "./index.scss";
//-------------------------------------------------------------

function App() {
  const state: any = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    const { UPDATE_STATE_TEAMS } = actions;
    const updateStateTeams: any = () => {
      return {
        type: UPDATE_STATE_TEAMS,
        teams: JSON.parse(localStorage.teams),
      };
    };
    dispatch(updateStateTeams());
  }, [dispatch]);

  useEffect(() => {
    const { UPDATE_STATE_PLAYERS } = actions;
    const updateStatePlayers: any = () => {
      return {
        type: UPDATE_STATE_PLAYERS,
        players: JSON.parse(localStorage.players),
      };
    };
    dispatch(updateStatePlayers());
  }, [dispatch]);

  useEffect(
    () => localStorage.setItem("teams", JSON.stringify(state.teams)),
    [dispatch, state]
  );
  useEffect(
    () => localStorage.setItem("players", JSON.stringify(state.players)),
    [dispatch, state]
  );
  return (
    <div className="header">
      <h1>SERIE A </h1>
      <h2>TEAMS & PLAYERS</h2>
      <Navbar />
    </div>
  );
}

export default App;
