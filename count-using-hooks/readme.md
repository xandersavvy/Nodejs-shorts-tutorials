### use useState to declare the  count at 0 now add two button with onclick function which will decrement and increment the count using setCount 

````javscript
// @ts-check
import React, { useState } from "react"; //impporting react

function App() {
  let [count, setCount] = useState(0); //state hook to initialize statehook at 0
  return (
    <>
      <button onClick={() => (count > 0 ? setCount(count - 1) : 0)}> - </button>
      {/* substraction button */}
      <div> {count} </div> {/* rendering the count */}
      <button onClick={() => setCount(count + 1)}> + </button>
      {/* addition button */}
    </>
  );
}

export default App;

````
