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
        <li>
          <a href="https://resume.creddle.io/resume/jdkgfnt8ko0">
            <i className="material-icons">cake</i>
            Resume
          </a>
        </li>
      </ul>
    );
  }
}

export default MobileNav;
