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
        <section className="home-intro">
          <div>
            <h1>Just get on the boat.</h1>
            <h2>
              When I was 17 years old I learned one of the most important
              lessons of my life.
            </h2>
            <div className="paragraphs">
              <p>
                Summer of 2004 I was looking for a job. I had a job, a part-time
                job at a restaurant, but I wanted a full-time job for the
                summer. I wanted to know what it felt like to have something
                other than my studies take up my day to day, and something other
                than the lull of other summers. This summer I found just that,
                and I found a piece of wisdom that I unknowingly kept with me
                for a long time. It wasn't until much later in life when I
                relaized that this philosophy had helped me navigate through
                many predicaments.
              </p>
              <hr></hr>
              <p></p>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default Home;
