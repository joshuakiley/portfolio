//==============================
//       COMPONENTS
//==============================
import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

//==============================
//       DEPENDENCIES
//==============================
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class MobileNav extends Component {
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function() {
      var elems = document.querySelectorAll(".sidenav");
      var instances = M.Sidenav.init(elems, {});
    });
  }

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
        {this.props.linkUrl.map((value, index) => {
          return (
            <li>
              <Link className="waves-effect" to={value}>
                <i className="material-icons">{this.props.linkIcon[index]}</i>
                {this.props.linkName[index]}
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default MobileNav;
