//src/App.tsx
import React from "./react-zero";
import "./stylesheet.css"
let hp = 0;
function Sidebar(){
  return(
    <>
      <div>
      this is a test
      </div>
    </>
  )
}

function App() {
  return (
    <>
      <Sidebar/>
      <button onClick={() => alert("Hello!")}>
        hello, world
      </button>
    </>
  );
}

export default App;
