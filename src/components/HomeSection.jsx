//==============================
//       COMPONENTS
//==============================
import React, { Component } from "react";

class HomeSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Contact",
      links: null
    };
  }
  render() {
    return (
      <section>
        <article>
          <h1>Lorem Ipsum</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sint
            vero maxime! Fugiat ut, voluptates neque dolorem nostrum alias
            facilis saepe voluptatem enim corporis quod similique, reiciendis,
            nemo magnam non.
          </p>
        </article>
      </section>
    );
  }
}

export default HomeSection;
