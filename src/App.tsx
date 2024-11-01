import React from "./react-zero";
import "./stylesheet.css";

// Sidebar component definition
function Counter() 
{
  const [count, setCount] = React.useState(0); // Initial count state

  return (
    <div class="counter">
      <div>Count: {count}</div>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

// Main App component
function App() {

  return (
    <>
      <Counter/>
      <button onClick={() => alert("Hello!")}>
        Hello, world
      </button>
    </>
  );
}

export default App;
