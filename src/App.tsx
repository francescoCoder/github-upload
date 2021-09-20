import React, { useEffect } from "react";
import { useDispatch , useSelector} from "react-redux";

import Navbar from "./Components/Navbar";
import localStorage from "./localStorage";

import "./index.scss";
//-------------------------------------------------------------


function App() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const updateState: any = () => {
    return {
      type: "UPDATE_STATE",
      state: JSON.parse(localStorage.teams),
    };
  };

  useEffect(() => dispatch(updateState()), [dispatch]);

  useEffect(
    () => localStorage.setItem("teams", JSON.stringify(state)),
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
