import React, { Component } from "react";
import "./App.css";
import Radium, { StyleRoot } from "radium"; //this a tool that lets us use hover or @media
//while using another component we have to enclose final return with style root!
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: "ahfe", name: "Max", age: 28 },
      { id: "efef", name: "Manu", age: 29 },
      { id: "gegg", name: "Stephney", age: 26 },
    ],
    otherState: "some other value",
    showPersons: false,
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState({
      persons: persons,
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
      ":hover": {
        backgroundColor: "lightgreen", //using radium
        color: "black",
      },
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                click={() => this.deletePersonHandler(index)}
                key={person.id}
                changed={(event) => this.nameChangeHandler(event, person.id)}
              />
            );
          })}
        </div>
      );

      style.backgroundColor = "red";
      style[":hover"] = {
        backgroundColor: "salmon",
        color: "black",
      }; //this is done with help of radium
    }

    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red"); //classes=['red']
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold"); //class=['red','bold]
    }

    return (
      //styleroot is a must have for the external component
      <StyleRoot>
        <div className="App">
          <h1>This is a React App!</h1>
          <p className={classes.join(" ")}>This is working!</p>
          <button style={style} onClick={this.togglePersonsHandler}>
            Toggle Persons
          </button>
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
