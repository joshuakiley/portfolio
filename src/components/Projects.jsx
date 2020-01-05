//==============================
//       COMPONENTS
//==============================
import React, { Component } from "react";

class Projects extends Component {
  render() {
    return (
      <main>
        <section id="projects" className="hero">
          <div className="hero-inner">
            <h1>PROJECTS</h1>
            <div className="links">
              <a
                href="#hskflashcard"
                className="btn green darken-4 waves-light waves-effect"
              >
                hsk flashcards
              </a>
              <a className="btn green darken-4 waves-light waves-effect">
                budge
              </a>
              <a className="btn green darken-4 waves-light waves-effect">
                getaway
              </a>
            </div>
          </div>
        </section>
        <section id="hskflashcard" className="hero">
          <div className="hero-inner">
            <h1>HSK Flashcards</h1>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea
              molestiae, consequuntur voluptates error quasi vitae reiciendis
              dolorum impedit, amet accusantium, iusto libero velit consequatur
              facere nesciunt autem sunt nobis consectetur.
            </p>
            <div className="image-gallery">
              <img src="/images/avatar-work.jpg"></img>
              <img src="/images/avatar-work.jpg"></img>
              <img src="/images/avatar-work.jpg"></img>
            </div>
            <a
              href="#projects"
              className="btn green darken-4 waves-light waves-effect"
            >
              top
            </a>
          </div>
        </section>
        <section className="hero">
          <div className="hero-inner">
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
        <section className="hero">
          <div className="hero-inner">
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

export default Projects;
