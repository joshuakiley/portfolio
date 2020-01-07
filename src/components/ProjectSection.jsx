//==============================
//       COMPONENTS
//==============================
import React, { Component } from "react";

class ProjectSection extends Component {
  render() {
    return (
      <section className="project-section" id={this.props.info.id}>
        <div className="project-main">
          <h1 className="project-title">{this.props.info.title}</h1>
          <h2 className="project-subtitle">{this.props.info.subtitle}</h2>
          <div className="project-links">
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
          </div>
          <p className="project-description">{this.props.info.description}</p>
          <a href="#projects" className="btn black white-text waves-effect">
            top
          </a>
        </div>
        <hr></hr>
      </section>
    );
  }
}

export default ProjectSection;
