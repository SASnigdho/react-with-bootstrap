import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div className="mt-2">
        <span className="text-success pr-3">
          {this.props.count.value === 0 ? "Zero" : this.props.count.value}
        </span>

        <button
          onClick={this.props.onIncrement}
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
