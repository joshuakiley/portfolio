//==============================
//       COMPONENTS
//==============================
import React, { Component } from "react";

class Hero extends Component {
  render() {
    return (
      <section id="hero" className="hero">
        <div className="hero-inner">
          <h1>{this.props.title}</h1>
        </div>
        <div className={this.props.links === null ? "hidden" : "show"}>
          {this.props.links === null
            ? null
            : this.props.links.map((value, index) => {
                return (
                  <a
                    key={index}
                    href={value}
                    className="btn white black-text waves-effect"
                  >
                    {this.props.linkTitles[index]}
                  </a>
                );
              })}
        </div>
      </section>
    );
  }
}

export default Hero;
