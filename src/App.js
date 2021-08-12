import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [binder, setBinder] = useState("");

  useEffect(() => {
    // Using the useEffect hook as a way to update the site title
    document.title = `useEffect updated ${counter} times`;
  });

  return (
    <div className="App">
      <h2>onClick and useState</h2>
      <p>Counter: {counter}</p>
      <div className="button-group">
        {/* Using the useState hook to update counter value */}
        <button onClick={() => setCounter(counter + 1)}>Increment</button>
        <button onClick={() => setCounter(counter - 1)}>Decrement</button>
      </div>

      <div className="binding-group">
        {/* using useState and onChange to bind input */}
        <h2>onChange and useState</h2>
        <p>{binder}</p>
        <input type="text" onChange={(e) => setBinder(e.target.value)} />
      </div>
    </div>
  );
}

export default App;
