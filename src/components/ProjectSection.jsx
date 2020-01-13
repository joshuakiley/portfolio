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
            <a href="#hero" className="btn black white-text waves-effect">
              top
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
            {this.props.info.description.map((value, index) => {
              return <p key={index}>{value}</p>;
            })}
          </article>
          <aside className="project-aside">
            <div className="project-aside-category">
              <h3>Technologies</h3>
              <ul>
                {this.props.info.tech.map((value, index) => {
                  return <li key={index}>{value}</li>;
                })}
              </ul>
            </div>
            <div className="project-aside-category">
              <h3>Obstacles</h3>
              {this.props.info.obstacles.map((value, index) => {
                return <p key={index}>{value}</p>;
              })}
            </div>
          </aside>
        </div>
      </section>
    );
  }
}

export default ProjectSection;
