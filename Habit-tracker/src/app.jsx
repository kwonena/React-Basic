import React, { Component } from "react";
import "./app.css";
import Habits from "./components/habits";
import Navbar from "./components/navbar";

class App extends Component {
  // 데이터를 가지고 있는 곳에서 처리 해주는 것이 가장 좋음
  state = {
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Running", count: 0 },
      { id: 3, name: "Coding", count: 0 },
    ],
  };

  // this.handleIncrement가 habit 인자로 전달됨
  // 리액트는 state를 직접 수정하는 것이 안 좋음
  handleIncrement = (habit) => {
    const habits = [...this.state.habits];
    // ...(spread operator)은 기존의 배열을 복붙해줌
    // 직접적으로 배열의 state를 수정하는 것은 좋지 않아서 새롭게 만든 것
    const index = habits.indexOf(habit);
    habits[index].count++;
    this.setState({ habits }); // key와 value의 값이 같다면 하나만 적어줘도 됨
  };

  handleDecrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    const count = habits[index].count - 1;
    habits[index].count = count < 0 ? 0 : count;
    this.setState({ habits });
  };

  handleDelete = (habit) => {
    // filter() -> 특정한 곳을 제외 또는 포함할 수 있게 하는 API
    const habits = this.state.habits.filter((item) => item.id !== habit.id);
    this.setState({ habits });
  };

  handleAdd = (name) => {
    const habits = [...this.state.habits, {id:Date.now(), name, count: 0}];
    this.setState({ habits });
  };

  render() {
    return (
      <>
        <Navbar
          tatalCount={this.state.habits.filter((item) => item.count > 0).length}
        />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
        />
      </>
    );
  }
}

export default App;
