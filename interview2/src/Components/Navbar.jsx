import React from "react";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div className="Navbar">
      <div className="navbar">
        <NavLink to="/" exact activeClassName="active" className="common nav1">
          DashBoard
        </NavLink>
        <NavLink
          to="/ranklist"
          exact
          activeClassName="active"
          className="common nav2"
        >
          RankList
        </NavLink>
        <NavLink
          to="/calc"
          exact
          activeClassName="active"
          className="common nav3"
        >
          DashBoard
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
