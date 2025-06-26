import { useState } from "react";

function init() {
  console.log("Init Was Executed");
  return Math.random();
}

export default function Counter() {
  let [count, setCount] = useState(init);  // Never do this if you had to pass function in useState jus paa refrence not the function call - init() ❌, init ✅
  console.log("component is re-executed");
  console.log(`count = ${count}`);

  function incCount() {
    setCount(count + 1);
    console.log(`new value of count = ${count}`); // Value Doesnot change on calling the function It is chnaged on the complete re-render
  }

  return (
    <div>
      <h3>Count = {count}</h3>
      <button onClick={incCount}>Increase Cont</button>
    </div>
  );
}
