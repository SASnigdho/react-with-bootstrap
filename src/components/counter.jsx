import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
  };

  increment = () => {
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    return (
      <div className="mt-2">
        <span className="text-success pr-3">
          {this.state.value === 0 ? "Zero" : this.state.value}
        </span>

        <button
          onClick={this.increment}
          type="button"
          className="btn btn-primary btn-sm"
        >
          Add
        </button>

        <button
          className="btn btn-danger btn-sm ml-2"
          onClick={this.props.onDelete}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;
