//==============================
//       COMPONENTS
//==============================
import React, { Component } from "react";
import Button from "./Button";

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
      <div className="page-container">
        <div className="page-title">
          <h1>Come Say Hey</h1>
          <p>Add me on LinkedIn or GitHub if you've got any project ideas.</p>
          <p>I'm always open to partnerships and colaboration.</p>
          <p>P.S. I'm a huge fan of open-source.</p>
          <Button
            name="LinkedIn"
            url="https://www.linkedin.com/in/joshua-kiley/"
          />
          <Button name="GitHub" url="https://github.com/joshuakiley" />
        </div>
      </div>
    );
  }
}

export default Contact;
