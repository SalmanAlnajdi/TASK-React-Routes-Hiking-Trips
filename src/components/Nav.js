import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav
      className="navbar navbar-expand-lg bg-secondary text-uppercase "
      id="mainNav"
    >
      <div className="container">
        <NavLink to="/home" className={"nav-bar-logo"}><h1>Hike</h1></NavLink>
      

        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-0 mx-lg-1">
              <NavLink to="/home" className={"nav-bar"}>Home</NavLink>
            </li>
            <li className="nav-item mx-0 mx-lg-1">
              <NavLink to="/TripsList" className={"nav-bar"}>Trips</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
