import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./functions";

function App() {
  const counter = useSelector(state => state.counterReducer);
  const dispatch = useDispatch();
  return (
    <div className="App">
      Counter {counter} <br />
      <button onClick={() => dispatch(increment())}> inc</button>
      <button onClick={() => dispatch(decrement())}>dsc</button>
    </div>
  );
}

export default App;
