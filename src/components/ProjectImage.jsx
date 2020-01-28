//==============================
//       COMPONENTS
//==============================
import React, { Component } from "react";

class ProjectImage extends Component {
  render() {
    return <img className="project-image" src={this.props.src}></img>;
  }
}

export default ProjectImage;
