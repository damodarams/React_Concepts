import { useState } from "react";
import { Link } from "react-router-dom";

const CounterHooks = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Counter App using React hooks </h1>
      <button onClick={increment}>you clicked {count} times</button>
      <Link to="/">Go Back to home page</Link>
    </div>
  );
};

export default CounterHooks;
