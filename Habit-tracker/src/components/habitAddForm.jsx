import React, { memo } from "react";
// PureComponent : 최상위 데이터가 변하지 않으면, rende함수 실행X (re-rendering)

// memo라는 함수 안에 function component를 전달
// props가 변경되지 않으면 함수 호출X
const HabitAddForm = memo((props) => {
  const formRef = React.createRef();
  const inputRef = React.createRef();

  // 함수형 component는 this를 호출하지 않아도 됨
  const onSubmit = (event) => {
    event.preventDefault();
    const name = inputRef.current.value;
    name && props.onAdd(name);
    // this.inputRef.current.value = "";
    formRef.current.reset();
  };
  return (
    <form ref={formRef} className="add-form" onSubmit={onSubmit}>
      <input
        ref={inputRef}
        type="text"
        className="add-input"
        placeholder="Habit"
      />
      <button className="add-button">Add</button>
    </form>
  );
});

export default HabitAddForm;