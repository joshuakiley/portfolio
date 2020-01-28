//==============================
//       COMPONENTS
//==============================
import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Joshua Kiley",
      links: null
    };
  }
  render() {
    return (
      <div className="page-title">
        <img className="home-avatar" src="images/avatar.jpg"></img>
        <h1>Joshua Kiley</h1>
        <h2>Full Stack Developer</h2>
        <p>
          Whether it's a foreign language, an RPG, or a puzzle; finding the path
          is all the fun.
        </p>
      </div>
    );
  }
}

export default Home;
