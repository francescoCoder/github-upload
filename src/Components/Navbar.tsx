import React from "react";
import { useSelector } from "react-redux";
import {
  NavLink,
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import TeamPage from "../Pages/TeamPage";
import EditPage from "../Pages/EditPage";

import "../index.scss";
//--------------------------------------------

function Navbar() {
  const state: any = useSelector((state) => state);

  return (
    <Router>
      <div className="head-nav">
        <NavLink
          to="/"
          exact
          style={{
            textDecoration: "none",
            color: "black",
            alignItems: "end",

          }}
          activeStyle={{
            fontWeight: "bold",
            fontSize: "20px",
          }}
        >
          <li>Home</li>
        </NavLink>

        {state.map((item: any) => (
          <NavLink
            to={`/${item.id}`}
            key={item.id}
            style={{
              textDecoration: "none",
              color: "black",
        
            }}
            activeStyle={{
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            <li>{item.name}</li>
          </NavLink>
        ))}
        <NavLink
          to="/options"
          style={{
            textDecoration: "none",
            color: "black",

          }}
          activeStyle={{
            fontWeight: "bold",
            fontSize: "20px",
          }}
        >
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
