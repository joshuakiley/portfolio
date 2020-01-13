//==============================
//       COMPONENTS
//==============================
import React, { Component } from "react";
import Hero from "./Hero.jsx";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Contact",
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

export default Contact;
