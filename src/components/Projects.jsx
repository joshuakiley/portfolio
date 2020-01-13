//==============================
//       COMPONENTS
//==============================
import React, { Component } from "react";
import ProjectSection from "./ProjectSection.jsx";
import Hero from "./Hero.jsx";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Projects",
      links: ["#hskflashcard", "#budge", "#getaway"],
      linkTitles: ["Flashcards", "Budge", "Getaway"],
      hsk: {
        id: "hskflashcard",
        thumbnail: "/images/hsk.png",
        title: "HSK Flashcards",
        subtitle: "The HSK is the official Chinese language exam in China.",
        liveSite: "https://joshuakiley.github.io/",
        github: "https://github.com/joshuakiley/joshuakiley.github.io",
        description: [
          "Toward the end of my stay in China I needed to pass the HSK in order to qualify for a temporary residence visa, so I made this webapp modeled after the simple flashcard exercises I would use with my students to help them learn English.",
          "We use the official HSK vocabulary list, which includes Chinese vocabulary, English translations, and phonetics (拼音). For the pronunciation audio files I pull from a reliable API accessing www.forvo.com. Forvo is a website that crowd-sources pronunciation of many languages and dialects around the world.",
          "This app allows you to choose the number of cards you want to study in any given session. It allows you to choose the HSK level you want to study. It also allows you to retire cards that you’re sure you know.",
          "Future releases of this application will focus on migrating from Express to either React or Angular. The localstorage system for storing retired cards will be replaced with a NoSQL database run on Google Firebase. Sign-in through Google Firebase.",
          "I am the sole developer of this project."
        ],
        tech: [
          "HTML",
          "CSS",
          "JavaScript",
          "MaterializeCSS",
          "Express",
          "Node",
          "3rd party API calls using AJAX"
        ],
        obstacles: [
          "One of the obstacles that I came across while developing this application is that I would have preferred to have built it in React now that I know how to use React.",
          "Another issue was that I wanted to app to be small and contained, so rather than make a database to store user study information I used localstorage in the browser to contain this information. I would like to change this in the future by adding a login and a database (I haven’t decided on SQL or NoSQL yet)."
        ]
      },
      budge: {
        id: "budge",
        thumbnail: "/images/budge.png",
        title: "Budge: A Budgeting App",
        subtitle: "Day to Day Budgeting.",
        liveSite: "https://budgemanager.herokuapp.com/",
        github: "https://github.com/joshuakiley/budge",
        description: [
          "A budgeting application that helps users who have trouble with mid to long term budgeting by taking a user's income and expenses from the previous month and creating daily budgets for the current month. This web app uses Express.js, Node.js, MongoDB (a NoSQL database), JavaScript, and Materializecss (a CSS framework similar to Bootstrap that follows Google's Material Design principles). This app creates users, handles user login, and takes input from the user to create a monthly budget. Each monthly budget is a database that holds the user's income and expenses from the previous month, then creates a calendar for the current month. Each day in the calendar holds an itemized list of expenses and incomes and gives the difference to the user. The user can create new expenses on a day to day basis, the user can create new monthly budgets, the user can remove monthly budgets, and the user can view their daily and monthly savings. My role in this project was as the sole developer and designer."
        ],
        tech: [
          "HTML",
          "CSS",
          "JavaScript",
          "MaterializeCSS",
          "Express",
          "Node",
          "3rd party API calls using AJAX"
        ],
        obstacles: [
          "One of the obstacles that I came across while developing this application is that I would have preferred to have built it in React now that I know how to use React.",
          "Another issue was that I wanted to app to be small and contained, so rather than make a database to store user study information I used localstorage in the browser to contain this information. I would like to change this in the future by adding a login and a database (I haven’t decided on SQL or NoSQL yet)."
        ]
      },
      getaway: {
        id: "getaway",
        thumbnail: "/images/getaway.png",
        title: "Getaway",
        subtitle:
          "A trip planner for people who have an idea for a trip but aren't sure when they may want to go.",
        liveSite: "http://getaway.surge.sh/",
        github: "https://github.com/joshuakiley/getaway-frontend",
        description: [
          "This web app was built by a group of people using React, Node.js, JavaScript, MongoDB (a NoSQL database), and Materializecss (a CSS framework similar to Bootstrap that follows Google's Material Design principles). It accesses an external API for flight prices and data. It creates a local database of user data that includes places the user would like to visit, possible activities that the user may want to partake in during the trip. This app handles user creation and user login."
        ],
        tech: [
          "HTML",
          "CSS",
          "JavaScript",
          "MaterializeCSS",
          "Express",
          "Node",
          "3rd party API calls using AJAX"
        ],
        obstacles: [
          "One of the obstacles that I came across while developing this application is that I would have preferred to have built it in React now that I know how to use React.",
          "Another issue was that I wanted to app to be small and contained, so rather than make a database to store user study information I used localstorage in the browser to contain this information. I would like to change this in the future by adding a login and a database (I haven’t decided on SQL or NoSQL yet)."
        ]
      }
    };
  }
  render() {
    return (
      <main>
        <Hero
          title={this.state.title}
          links={this.state.links}
          linkTitles={this.state.linkTitles}
        />
        <ProjectSection info={this.state.hsk} />
        <ProjectSection info={this.state.budge} />
        <ProjectSection info={this.state.getaway} />
      </main>
    );
  }
}

export default Projects;
