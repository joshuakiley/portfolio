//==============================
//       COMPONENTS
//==============================
import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <main>
        <section className="hero">
          <div className="hero-inner">
            <img className="avatar" src="/images/avatar-work.jpg"></img>
            <h1>Joshua Kiley</h1>
            <h2>SOFTWARE ENGINEER</h2>
          </div>
        </section>
        <section>
          <div>
            <h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem et
              nihil sapiente! Veritatis perspiciatis voluptatibus rerum saepe
              blanditiis, quidem enim ullam nam, ratione aperiam laudantium
              velit soluta nobis, possimus temporibus! Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. Adipisci doloribus repellat,
              at autem sapiente consectetur! Temporibus veritatis, tenetur
              accusantium asperiores vel in, recusandae tempora iure non harum
              officia, aspernatur facilis!
            </h1>
          </div>
        </section>
      </main>
    );
  }
}

export default Home;
