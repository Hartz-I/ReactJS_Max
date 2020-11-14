import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person"; //from person folder

class App extends Component {
  state = {
    //exclusive for class that extends to components
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Stephney", age: 26 },
    ],
    otherState: "some other value",
  };

  switchNameHandler = (newName) => {
    console.log("Was clicked");
    // this.state.persons[0].name = "Hartz"; Don't do this!!
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: "Manu", age: 29 },
        { name: "Stephney", age: 27 },
      ], //this updates and keeps the rest!
    });
  };

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: "Max", age: 28 },
        { name: event.target.value, age: 29 },
        { name: "Stephney", age: 26 },
      ], //this updates and keeps the rest!
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App!</h1>
        <p>This is working!</p>
        <button
          onClick={
            this.switchNameHandler.bind(
              this,
              "Ahnaf Sadik"
            ) /* bind uses the mathod
             with this and the argument
             and use this way more often */
          }
        >
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={
            () => this.switchNameHandler("Hartz_I") /* don't use it often */
          } //you can pass mathods as props!!
          changed={this.nameChangeHandler} //new property call it in the dumb component
        >
          My Hobbies: Racing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
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
