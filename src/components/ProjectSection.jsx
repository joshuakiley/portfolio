//==============================
//       COMPONENTS
//==============================
import React, { Component } from "react";

class ProjectSection extends Component {
  render() {
    return (
      <section className="project" id={this.props.info.id}>
        <figure className="project-figure">
          <img
            className="project-figure-image"
            src={this.props.info.thumbnail}
            alt="project homepage"
          ></img>
          <figcaption className="project-figure-figcaption">
            <a
              className="btn blue darken-1 white-text waves-effect"
              href={this.props.info.liveSite}
            >
              Live Site
            </a>
            <a
              className="btn blue darken-1 white-text waves-effect"
              href={this.props.info.github}
            >
              Github
            </a>
          </figcaption>
        </figure>
        <br></br>
        <div className="project-text">
          <article className="project-article">
            <h1 className="project-article-title">{this.props.info.title}</h1>
            <h2 className="project-article-subtitle">
              {this.props.info.subtitle}
            </h2>
            <p className="project-article-description">
              {this.props.info.description}
            </p>
          </article>
          <aside className="project-aside">
            <div className="project-aside-category">
              <h3>Technologies</h3>
              <ul>
                <li>one</li>
                <li>one</li>
                <li>one</li>
                <li>one</li>
              </ul>
            </div>
            <div className="project-aside-category">
              <h3>Obstacles</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                assumenda sed rem soluta minima eius saepe, delectus facilis
                asperiores nesciunt sunt quae incidunt provident aperiam, dicta
                ratione illo totam temporibus!
              </p>
            </div>
          </aside>
        </div>
        <br></br>
        <hr></hr>
        <br></br>
      </section>
    );
  }
}

export default ProjectSection;

{
  /* <a href="#projects" className="btn black white-text waves-effect">
  top
</a>; */
}
