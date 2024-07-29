import React, { Component } from "react";

class Greetings extends Component {
  state = {};
  render() {
    return (
      <h1>
        Hello this name coming from props{" "}
        <span className='text-2xl text-red-700'>{this.props.name}</span>
      </h1>
    );
  }
}

export default Greetings;
