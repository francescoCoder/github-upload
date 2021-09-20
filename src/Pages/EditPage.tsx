import React from "react";
import { HashRouter as Router, Route, NavLink, Switch } from "react-router-dom";

import AddPlayerPage from "./EditPages/AddPlayerPage";
import AddTeamPage from "./EditPages/AddTeamPage";
import EditPlayerPage from "./EditPages/EditPlayerPage";
import EditTeamPage from "./EditPages/EditTeamPage";
import RemovePlayerPage from "./EditPages/RemovePlayerPage";
import RemoveTeamPage from "./EditPages/RemoveTeamPage";

import "../index.scss";
//-------------------------------------------------------------

function EditPage() {
  return (
    <Router>
      <div className="edit-form">
        <p className="incipit-question">Hi! What would you like to do now?</p>
        <div>
          <NavLink
            to="/options/add-player"
            activeStyle={{ color: "red" }}
            style={{
              textDecoration: "none",
              color: "black",
            }}
          >
            <li> Add a player</li>
          </NavLink>
          <NavLink
            to="/options/remove-player"
            activeStyle={{ color: "red" }}
            style={{
              textDecoration: "none",
              color: "black",
            }}
          >
            <li>Remove a player</li>
          </NavLink>

          <NavLink
            to="/options/add-team"
            activeStyle={{ color: "red" }}
            style={{
              textDecoration: "none",
              color: "black",
            }}
          >
            <li>Add a Team</li>
          </NavLink>
          <NavLink
            to="/options/remove-team"
            activeStyle={{ color: "red" }}
            style={{
              textDecoration: "none",
              color: "black",
            }}
          >
            <li> Remove a team </li>
          </NavLink>
          <NavLink
            to="/options/edit-team"
            activeStyle={{ color: "red" }}
            style={{
              textDecoration: "none",
              color: "black",
            }}
          >
            <li> Edit a team</li>
          </NavLink>
          <NavLink
            to="/options/edit-player"
            activeStyle={{ color: "red" }}
            style={{
              textDecoration: "none",
              color: "black",
            }}
          >
            <li>Edit a player</li>
          </NavLink>
        </div>
      </div>
      <Switch>
        <Route path="/options/add-player" component={AddPlayerPage} />
        <Route path="/options/remove-player" component={RemovePlayerPage} />
        <Route path="/options/add-team" component={AddTeamPage} />
        <Route path="/options/remove-team" component={RemoveTeamPage} />
        <Route path="/options/edit-team" component={EditTeamPage} />
        <Route path="/options/edit-player" component={EditPlayerPage} />
      </Switch>
    </Router>
  );
}

export default EditPage;
