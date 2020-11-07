import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person"; //from person folder

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App!</h1>
        <p>This is working!</p>
        <button>Switch Name</button>
        <Person name="Max" age="28" />
        <Person name="Manu" age="29">
          My Hobbies: Racing
        </Person>
        <Person name="Stephnie" age="26" />
      </div>
      //<h1>Can't add another part</h1>
    );
    // return React.createElement( //we don't use this cuz it gets too complecated when nested
    //   "div",
    //   { className: "App" },
    //   React.createElement("h1", null, "Does this work now?")
    // );
  }
}

export default App;
