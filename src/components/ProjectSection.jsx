//==============================
//       COMPONENTS
//==============================
import React, { Component } from "react";

class ProjectSection extends Component {
  render() {
    return (
      <section id={this.props.info.id} className="hero">
        <div className="hero-inner">
          <h1>{this.props.info.title}</h1>
          <h2>{this.props.info.subtitle}</h2>
          <a href={this.props.info.liveSite} className="btn waves-effect">
            Live Site
          </a>
          <a href={this.props.info.github} className="btn waves-effect">
            Github
          </a>
          <p>{this.props.info.description}</p>
          <div className="image-gallery">
            <img className="project-image" src="/images/avatar-work.jpg"></img>
            <img className="project-image" src="/images/avatar-work.jpg"></img>
            <img className="project-image" src="/images/avatar-work.jpg"></img>
          </div>
          <a
            href="#projects"
            className="btn green darken-4 waves-light waves-effect"
          >
            top
          </a>
        </div>
      </section>
    );
  }
}

export default ProjectSection;
