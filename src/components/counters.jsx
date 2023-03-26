import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 1 },
      { id: 2, value: 2 },
      { id: 3, value: 3 },
      { id: 4, value: 4 },
      { id: 5, value: 0 },
    ],
  };

  handelincrement = (count) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(count);

    counters[index] = { ...count };
    counters[index].value++;

    this.setState({ counters });
  };

  handelDelete = (count) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(count);
    counters.splice(index, 1);

    this.setState({ counters });
  };

  render() {
    return (
      <div>
        {this.state.counters.map((count) => (
          <Counter
            key={count.id}
            count={count}
            onIncrement={() => this.handelincrement(count)}
            onDelete={() => this.handelDelete(count)}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
