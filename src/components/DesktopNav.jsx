//==============================
//       COMPONENTS
//==============================
import React, { Component } from "react";

//==============================
//       DEPENDENCIES
//==============================
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class DesktopNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: {
        Home: false,
        Portfolio: false,
        Blog: false,
        Contact: false,
        Resume: false
      }
    };
    this.handleHover = this.handleHover.bind(this);
  }

  handleHover(button) {
    switch (button) {
      case "Home":
        this.setState(prevState => ({
          isHovered: {
            ...prevState.isHovered,
            Home: !prevState.isHovered["Home"]
          }
        }));
        break;
      case "Portfolio":
        this.setState(prevState => ({
          isHovered: {
            ...prevState.isHovered,
            Portfolio: !prevState.isHovered["Portfolio"]
          }
        }));
        break;
      case "Blog":
        this.setState(prevState => ({
          isHovered: {
            ...prevState.isHovered,
            Blog: !prevState.isHovered["Blog"]
          }
        }));
        break;
      case "Contact":
        this.setState(prevState => ({
          isHovered: {
            ...prevState.isHovered,
            Contact: !prevState.isHovered["Contact"]
          }
        }));
        break;
      case "Resume":
        this.setState(prevState => ({
          isHovered: {
            ...prevState.isHovered,
            Resume: !prevState.isHovered["Resume"]
          }
        }));
        break;
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <div
            data-target="slide-out"
            className="sidenav-trigger hide-on-large-only"
          >
            <i className="material-icons">menu</i>
          </div>
          <ul className="hide-on-med-and-down">
            {this.props.linkUrl.map((value, index) => {
              return (
                <li
                  key={this.props.linkName[index]}
                  className="waves-effect waves-light nav-button"
                >
                  <Link
                    onMouseEnter={() => {
                      this.handleHover(this.props.linkName[index]);
                    }}
                    onMouseLeave={() => {
                      this.handleHover(this.props.linkName[index]);
                    }}
                    to={value}
                  >
                    {this.state.isHovered[this.props.linkName[index]] ? (
                      <i className="material-icons">
                        {this.props.linkIcon[index]}
                      </i>
                    ) : (
                      this.props.linkName[index]
                    )}
                  </Link>
                </li>
              );
            })}
            <li className="waves-effect waves-light nav-button">
              <a
                onMouseEnter={() => {
                  this.handleHover("Resume");
                }}
                onMouseLeave={() => {
                  this.handleHover("Resume");
                }}
                href="https://resume.creddle.io/resume/jdkgfnt8ko0"
                className
              >
                {this.state.isHovered["Resume"] ? (
                  <i className="material-icons">cake</i>
                ) : (
                  "Resume"
                )}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default DesktopNav;
