//==============================
//       COMPONENTS
//==============================
import React, { Component } from "react";

//==============================
//       DEPENDENCIES
//==============================
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class MobileNav extends Component {
  render() {
    return (
      <ul id="slide-out" className="sidenav">
        <li className="first-li">
          <img className="dirk" src="/images/dirk.png"></img>
          <div className="user-view">
            <div className="logo"></div>
            <a href="#">
              <span className="white-text name center">Joshua Kiley</span>
            </a>
            <a href="#">
              <span className="white-text name center">SOFTWARE ENGINEER</span>
            </a>
          </div>
        </li>
        <li>
          <Link className="waves-effect" to="/">
            <i className="material-icons">home</i>
            Home
          </Link>
        </li>
        <li>
          <Link className="waves-effect" to="/">
            <i className="material-icons">work</i>
            Projects
          </Link>
        </li>
        <li>
          <Link className="waves-effect" to="/">
            <i className="material-icons">toys</i>
            Hobbies
          </Link>
        </li>
        <li>
          <Link className="waves-effect" to="/">
            <i className="material-icons">chat</i>
            Contact
          </Link>
        </li>
        <li>
          <Link className="waves-effect" to="/">
            <i className="material-icons">cake</i>
            Resume
          </Link>
        </li>
      </ul>
    );
  }
}

export default MobileNav;
