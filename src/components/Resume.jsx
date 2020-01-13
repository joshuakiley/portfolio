//==============================
//       COMPONENTS
//==============================
import React, { Component } from "react";
import Hero from "./Hero.jsx";

class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Resume",
      links: null
    };
  }
  render() {
    return (
      <main>
        <Hero title={this.state.title} links={this.state.links} />
      </main>
    );
  }
}

export default Resume;
