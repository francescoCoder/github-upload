import React from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
} from "react-router-dom";

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
        <div className="edit-column">
          <p className="incipit-question">Hi! What would you like to do now?</p>
          <NavLink to="/options/add-player" className="edit-option">
            <li> Add a player</li>
          </NavLink>
          <NavLink to="/options/remove-player" className="edit-option">
            <li>Remove a player</li>
          </NavLink>

          <NavLink to="/options/add-team" className="edit-option">
            <li>Add a Team</li>
          </NavLink>
          <NavLink to="/options/remove-team" className="edit-option">
            <li> Remove a team </li>
          </NavLink>
          <NavLink to="/options/edit-team" className="edit-option">
            <li> Edit a team</li>
          </NavLink>
          <NavLink to="/options/edit-player" className="edit-option">
            <li>Edit a player</li>
          </NavLink>
        </div>
        <Switch>
          <Route path="/options/add-player" component={AddPlayerPage} />
          <Route path="/options/remove-player" component={RemovePlayerPage} />
          <Route path="/options/add-team" component={AddTeamPage} />
          <Route path="/options/remove-team" component={RemoveTeamPage} />
          <Route path="/options/edit-team" component={EditTeamPage} />
          <Route path="/options/edit-player" component={EditPlayerPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default EditPage;
