import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";

class Navbar extends Component {
  componentDidMount() {
    let elem = document.querySelector(".sidenav");
    M.Sidenav.init(elem, {
      edge: "left",
      inDuration: 250
    });
  }
  render() {
    return (
      <React.Fragment>
        <nav>
          <div className="nav-wrapper">
            <Link to="/" className="brand-logo">
              Logo
            </Link>
            <button
              href="#"
              data-target="mobile-demo"
              className="sidenav-trigger red lighten-2"
            >
              <i className="material-icons">menu</i>
            </button>
            <ul id="slide-out" className="right hide-on-med-and-down">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/todos">Todos</NavLink>
              </li>
            </ul>
          </div>
        </nav>

        <ul className="sidenav" id="mobile-demo">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/todo">Todo</NavLink>
          </li>
        </ul>
      </React.Fragment>
    );
  }
}

export default Navbar;
