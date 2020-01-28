//==============================
//       COMPONENTS
//==============================
import React, { Component } from "react";

class Button extends Component {
  render() {
    return (
      <a className="btn-large waves-effect custom-btn" href={this.props.url}>
        {this.props.name}
      </a>
    );
  }
}

export default Button;
