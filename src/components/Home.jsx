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
            {/* INTRO */}
            <h1>Just get on the boat.</h1>
            <h2>
              When I was 17 years old I learned one of the most important
              lessons of my life.
            </h2>
            <hr></hr>
            <div className="paragraphs">
              <h3>The Lesson</h3>
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
              {/* PARAGRAPH 1 - GETTING THE OFFER */}
              <hr></hr>
              <h3>The Job Hunt</h3>
              <p>
                I was hot and tired. I went into my dad's office after walking
                around town applying to jobs all afternoon. My dad was giving me
                advice about job hunting when one of his business partners
                overheard us talking and came into the office.
              </p>
              <p>
                He said something along the lines of, "You looking for a summer
                job? What about sailing?"
              </p>
              <p>
                He said that when he was my age he worked for the Coastwise
                Packet Company, better known as The Black Dog, out of Martha's
                Vineyard. He promptly said that if I was interested he would
                contact the captain and have me go out to work with them for the
                summer.
              </p>
              <p>I was intersted.</p>
              <hr></hr>
              <h3>The Journey</h3>
              <p>
                Everything was set up. I was told that the captain agreed. I got
                a bus ticket to Rhode Island and a train ticket to
                Massachusettes, another bus ticket to Martha's Vineyard ferry,
                and a ferry ticket to the island.
              </p>
              <h3>to be continued...</h3>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default Home;
