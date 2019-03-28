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
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
