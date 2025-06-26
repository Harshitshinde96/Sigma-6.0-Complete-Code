import { useState, useEffect } from "react";

export default function CounterUseEffect() {
  let [countx, setCountx] = useState(0);
  let [county, setCounty] = useState(0);

  let incCountx = () => {
    setCountx((curCount) => curCount + 1);
  };
  let incCounty = () => {
    setCounty((curCount) => curCount + 1);
  };

  useEffect(function printSomething() {
    console.log("This is side effect of usEffect");
  },[ county]);
  return (
    <div>
      <h3>Countx = {countx}</h3>
      <button onClick={incCountx}>+1</button>
      <br />
      <h3>County = {county}</h3>
      <button onClick={incCounty}>+1</button>
    </div>
  );
}
