import React, { useState } from "react";

function Counter() {
  const [num, setNum] = useState(0);

  const onIncrease = () => {
    setNum(num + 1);
  };
  const onDecrease = () => {
    setNum(num - 1);
  };

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;
