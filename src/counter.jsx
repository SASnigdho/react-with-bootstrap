import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  getValue() {
    const { count } = this.state;

    return count === 0 ? "ZERO!" : count;
  }

  render() {
    return (
      <React.Fragment>
        <h1>{this.getValue()}</h1>

        <button className="btn btn-success">Increment</button>
      </React.Fragment>
    );
  }
}

export default Counter;
