import React from "react";
import { useSelector } from "react-redux";
import { NavLink, HashRouter as Router, Switch, Route } from "react-router-dom";

import TeamPage from "../Pages/TeamPage";
import EditPage from "../Pages/EditPage";
import { TeamType } from "./interfaces";

import "../index.scss";
//--------------------------------------------

function Navbar() {
  const state = useSelector((state: TeamType[]) => state);

  return (
    <Router>
      <div className="head-nav">
        <NavLink to="/" exact className="navbar-link">
          <li>Home</li>
        </NavLink>

        {state.map((team: TeamType) => (
          <NavLink to={`/${team.id}`} className="navbar-link" key={team.id}>
            <li>{team.name}</li>
          </NavLink>
        ))}
        <NavLink to="/options" className="navbar-link">
          <li>Options</li>
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
