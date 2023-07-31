import React from "react";
import ReactDOM from "react-dom/client";

// JSX => Babel transpiles it to React.createElement => JS Object => HTMLELEMENT(render)
// This is a React Element
const heading = <h1 id="heading">Hello World from jsx</h1>;

const Title = () => <h1 id="heading">Hello World from jsx</h1>;

// This is a React Functional Component
const HeadingComponent = () => (
  <div className="container">
    {Title()}
    <Title />
    <Title></Title>
    <h1 className="heading">Hello From Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
