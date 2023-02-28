import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div className="mt-1">
        <span className="text-success pr-3">{this.state.count}</span>

        <button
          onClick={this.increment}
          type="button"
          className="btn btn-primary btn-sm"
        >
          Add
        </button>
      </div>
    );
  }
}

export default Counter;
