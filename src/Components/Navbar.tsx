import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, HashRouter as Router, Switch, Route } from "react-router-dom";

import TeamPage from "../Pages/TeamPage";
import EditPage from "../Pages/EditPage";
import { TeamType } from "./interfaces";

import "../index.scss";
//--------------------------------------------

function Navbar() {
  const state = useSelector((state: TeamType[]) => state);
  const [teamSelected, setTeamSelected] = useState(false);

  return (
    <Router>
      <div className="head-nav">
        <NavLink
          to="/"
          exact
          className="navbar-link"
          onClick={() => setTeamSelected(false)}
        >
          <li className="navli">Home</li>
        </NavLink>
        <div className={teamSelected ? "dropdown active" : "dropdown"}>
          <li className="navli">Teams</li>
          <div className="dropdown-content">
            {state.map((team: TeamType) => (
              <NavLink
                to={`/${team.id}`}
                onClick={() => setTeamSelected(true)}
                className="navbar-link teams"
                key={team.id}
              >
                <li className="navli">{team.name}</li>
              </NavLink>
            ))}
          </div>
        </div>

        <NavLink
          to="/options"
          className="navbar-link"
          onClick={() => setTeamSelected(false)}
        >
          <li className="navli">Options</li>
        </NavLink>
      </div>
      <Switch>
        <Route path="/options" component={EditPage} />
        <Route path="/:idTeam" component={TeamPage} />
        <Route path="/">{null}</Route>
      </Switch>
    </Router>
  );
}

export default Navbar;
