//==============================
//       COMPONENTS
//==============================
import React, { Component } from "react";

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Hobbies",
      links: null
    };
  }
  render() {
    return (
      <div className="page-blog">
        <div className="page-title">
          <h1>Let's Talk About That</h1>
          <p>
            There are some of the adventures and experiences I've had. I will be
            writing more in the not so distant future.
          </p>
        </div>
      </div>
    );
  }
}

export default Blog;
