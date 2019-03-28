import React from "react";
import { Link, NavLink } from "react-router-dom";
// Use Link tag to allow react router to take over linking within react app so that no need for server request/page refresh

const Navbar = () => {
  return (
    <nav className="nav-wrapper red arken-3">
      <div className="container">
        <a className="brand-logo" href="/">
          Blog
        </a>
        <ul className="right">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
