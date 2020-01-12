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
      hsk: {
        id: "hskflashcard",
        thumbnail: "/images/hsk.png",
        title: "HSK Flashcards",
        subtitle: "A Simple App For Studying Chinese Vocabulary",
        liveSite: "https://joshuakiley.github.io/",
        github: "https://github.com/joshuakiley/joshuakiley.github.io",
        description:
          "A flashcard application to help people study Chinese vocabulary. This web app makes API calls using Ajax with Express.js, Node.js, JavaScript, accesses an external API for audio files as well as a local API for accessing vocabulary, phonetics, definitions, and examples. Some challenges I faced while building this application was to be able to save study data over different sessions without creating a database. To solve this I used browser local storage to keep track of vocabulary words that the user felt comfortable with and didn't need to study again. I also created an option for the user to return retired cards to the deck for review that would gather this information from local storage. My role in this project was as the sole developer and designer."
      },
      budge: {
        id: "budge",
        thumbnail: "/images/budge.png",
        title: "Budge: A Budgeting App",
        subtitle: "Day to Day Budgeting.",
        liveSite: "https://budgemanager.herokuapp.com/",
        github: "https://github.com/joshuakiley/budge",
        description:
          "A budgeting application that helps users who have trouble with mid to long term budgeting by taking a user's income and expenses from the previous month and creating daily budgets for the current month. This web app uses Express.js, Node.js, MongoDB (a NoSQL database), JavaScript, and Materializecss (a CSS framework similar to Bootstrap that follows Google's Material Design principles). This app creates users, handles user login, and takes input from the user to create a monthly budget. Each monthly budget is a database that holds the user's income and expenses from the previous month, then creates a calendar for the current month. Each day in the calendar holds an itemized list of expenses and incomes and gives the difference to the user. The user can create new expenses on a day to day basis, the user can create new monthly budgets, the user can remove monthly budgets, and the user can view their daily and monthly savings. My role in this project was as the sole developer and designer."
      },
      getaway: {
        id: "getaway",
        thumbnail: "/images/getaway.png",
        title: "Getaway",
        subtitle:
          "A trip planner for people who have an idea for a trip but aren't sure when they may want to go.",
        liveSite: "http://getaway.surge.sh/",
        github: "https://github.com/joshuakiley/getaway-frontend",
        description:
          "This web app was built by a group of people using React, Node.js, JavaScript, MongoDB (a NoSQL database), and Materializecss (a CSS framework similar to Bootstrap that follows Google's Material Design principles). It accesses an external API for flight prices and data. It creates a local database of user data that includes places the user would like to visit, possible activities that the user may want to partake in during the trip. This app handles user creation and user login."
      }
    };
  }
  render() {
    return (
      <main>
        <Hero title={this.state.title} links={this.state.links} />
        <ProjectSection info={this.state.hsk} />
        <ProjectSection info={this.state.budge} />
        <ProjectSection info={this.state.getaway} />
      </main>
    );
  }
}

export default Projects;
