//==============================
//       COMPONENTS
//==============================
import React, { Component } from "react";

class Hero extends Component {
  render() {
    return (
      <section className="hero">
        <div className="hero-inner">
          <h1>{this.props.title}</h1>
          <div className={this.props.links === null ? "hidden" : "show"}>
            {this.props.links === null
              ? null
              : this.props.links.map((value, index) => {
                  return (
                    <a key={index} href={value} className="btn waves-effect">
                      meow
                    </a>
                  );
                })}
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
