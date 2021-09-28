import React, { Component } from "react";

class Habits extends Component {
  state = {
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Running", count: 0 },
      { id: 3, name: "Coding", count: 0 },
    ],
  };

  handleIncrement = (habit) => {};

  handleDecrement = (habit) => {};

  handleDelete = (habit) => {};

  render() {
    return (
      <ul>
        {this.state.habits.map((habit) => (
          <Habits
            key={habit.id}
            habit={habit}
            onIncreament={this.handleIncrement}
            onDecreament={this.handleDecrement}
            onIDelete={this.handleDelete}
          />
        ))}
      </ul>
    );
  }
}

export default Habits;
