//==============================
//       COMPONENTS
//==============================
import React, { Component } from "react";

//==============================
//       DEPENDENCIES
//==============================
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class DesktopNav extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper black">
          <div
            data-target="slide-out"
            className="sidenav-trigger hide-on-large-only"
          >
            <i className="material-icons">menu</i>
          </div>
          <ul className="hide-on-med-and-down">
            {this.props.linkUrl.map((value, index) => {
              return (
                <li key={index} className="waves-effect waves-light nav-button">
                  <Link to={value}>{this.props.linkName[index]}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    );
  }
}

export default DesktopNav;
