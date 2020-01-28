//==============================
//       COMPONENTS
//==============================
import React from "react";

// HEADER
import DesktopNav from "./components/DesktopNav.jsx";
import MobileNav from "./components/MobileNav.jsx";

// PAGES
import Home from "./components/Home.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Blog from "./components/Blog.jsx";
import Contact from "./components/Contact.jsx";

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
      linkUrl: ["/", "/portfolio", "/blog", "/contact"],
      linkName: ["Home", "Portfolio", "Blog", "Contact"],
      linkIcon: ["home", "work", "toys", "chat"],
      routeComponent: [Home, Portfolio, Blog, Contact]
    };
  }
  render() {
    return (
      <Router>
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
        <main>
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
        </main>
      </Router>
    );
  }
}

export default App;
