import React from "./react-zero";
import "./stylesheet.css";

// Sidebar component definition
function Sidebar(attrs: { count: number; setCount: Function }) {
  return (
    <div>
      <div>Count: {attrs.count}</div>
      <button onClick={() => attrs.setCount(attrs.count + 1)}>Click me</button>
    </div>
  );
}

// Main App component
function App() {
  const [count, setCount] = React.useState(0); // Initial count state

  return (
    <>
      <Sidebar count={count} setCount={setCount} />
      <button onClick={() => alert("Hello!")}>
        Hello, world
      </button>
    </>
  );
}

export default App;
