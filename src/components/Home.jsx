//==============================
//       COMPONENTS
//==============================
import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <main>
        <section id="hero" className="hero">
          <div className="hero-inner">
            <h1>Joshua Kiley</h1>
            <h2>SOFTWARE ENGINEER</h2>
          </div>
        </section>
        <section id="about" className="hero">
          <div className="hero-inner">
            <h1>ABOUT ME</h1>
            <h2>all of the things</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto nemo, laboriosam vero veniam voluptatibus ut eos, error
              amet dicta distinctio excepturi consequuntur ipsa, ratione atque
              quibusdam. Nobis labore maxime nulla!
            </p>
          </div>
        </section>
      </main>
    );
  }
}

export default Home;
