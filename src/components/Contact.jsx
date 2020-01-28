//==============================
//       COMPONENTS
//==============================
import React, { Component } from "react";

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
        <p>contact</p>
      </main>
    );
  }
}

export default Contact;
