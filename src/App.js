//==============================
//       COMPONENTS
//==============================
import React from "react";

// HEADER
import DesktopNav from "./components/DesktopNav.jsx";
import MobileNav from "./components/MobileNav.jsx";

// PAGES
import Home from "./components/Home.jsx";
import Projects from "./components/Projects.jsx";
import Hobbies from "./components/Hobbies.jsx";
import Contact from "./components/Contact.jsx";
import Resume from "./components/Resume.jsx";

// FOOTER
import Footer from "./components/Footer.jsx";

//==============================
//       DEPENDENCIES
//==============================
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//==============================
//       STYLING
//==============================
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      linkUrl: ["/", "/projects", "/hobbies", "/contact", "/resume"],
      linkName: ["Home", "Projects", "Hobbies", "Contact", "Resume"],
      linkIcon: ["home", "work", "toys", "chat", "cake"],
      routeComponent: [Home, Projects, Hobbies, Contact, Resume]
    };
  }
  render() {
    return (
      <Router>
        {/* HEADER */}
        <header>
          <DesktopNav
            linkUrl={this.state.linkUrl}
            linkName={this.state.linkName}
            linkIcon={this.state.linkIcon}
          />
          <MobileNav
            linkUrl={this.state.linkUrl}
            linkName={this.state.linkName}
            linkIcon={this.state.linkIcon}
          />
        </header>
        {/* MAIN */}
        {this.state.routeComponent.map((value, index) => {
          return (
            <Route
              key={index}
              path={this.state.linkUrl[index]}
              exact
              component={value}
            />
          );
        })}
      </Router>
    );
  }
}

export default App;
