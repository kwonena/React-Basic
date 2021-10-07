import React, { Component } from "react";

class Habits extends Component {
  // state를 직접 수정하면 안됨
  state = {
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Running", count: 0 },
      { id: 3, name: "Coding", count: 0 },
    ],
  };

  handleIncrement = (habit) => {
    // ... -> spread operator
    // habits 배열 안에 있는 아이템들을 하나하나씩
    // 새로운 배열 안으로 복사해오는 것
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    // indexOf() : 몇 번째 인덱스인지 알려주는 함수
    habits[index].count++;
    this.setState({ habits });
    // key와 value가 동일하면 하나로 적어줘도 됨
  };

  handleDecrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    const count = habits[index].count - 1;
    habits[index].count = count < 0 ? 0 : count;
    this.setState({ habits });
  };

  handleDelete = (habit) => {
    const habits = this.state.habits.filter(item => item.id !== habit.id);
    // filter API는 특정한 곳을 제외 또는 포함해서 배열을 만들 수 있음
    this.setState({ habits });
  };

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
