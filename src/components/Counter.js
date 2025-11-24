import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Interactive Counter</h2>
      <p data-testid="count-value">{count}</p>
      <button onClick={() => setCount(count + 1)} data-testid="increment-btn">
        Increment
      </button>
    </div>
  );
};

export default Counter;
