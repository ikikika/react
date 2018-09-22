import React, {Component} from 'react';

//stateless functional component
// no state, no data

//react will pass props as argument to this function at runtime

//property we are interested in
const NavBar = ({totalCounters}) => {
  return(
    <nav className="navbar navbar-light bg-light">
      <a href="" className="navbar-brand">
        Navbar
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
}

// class NavBar extends Component {
//   render() {
//
//   }
// }

export default NavBar;
