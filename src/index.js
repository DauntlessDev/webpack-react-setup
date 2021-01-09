import React from "react";
import reactDOM from "react-dom";
import "./styles/style.scss"
// import "./styles/style.css"

// const template = React.createElement('h1', {className: 'title'}, 'Hello world');

const App = () => {
  return <h1>Hello from Dauntless</h1>;
};

reactDOM.render(<App />, document.getElementById("root"));
