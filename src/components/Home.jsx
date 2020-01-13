//==============================
//       COMPONENTS
//==============================
import React, { Component } from "react";
import Hero from "./Hero.jsx";
import HomeSection from "./HomeSection.jsx";

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
      <main>
        <Hero title={this.state.title} links={this.state.links} />
        <HomeSection />
      </main>
    );
  }
}

export default Home;
