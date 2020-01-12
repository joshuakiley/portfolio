//==============================
//       COMPONENTS
//==============================
import React, { Component } from "react";
import Hero from "./Hero.jsx";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Contact"
    };
  }
  render() {
    return (
      <main>
        <Hero title={this.state.title} />
      </main>
    );
  }
}

export default Contact;
