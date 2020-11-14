import React, { Component } from "react";
import "./App.css";
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
    //const persons = this.state.persons.slice(); //it fixes the flaw. it merely creates a copy of the main array
    const persons = [...this.state.persons]; //alternative is to use the spread operator
    persons.splice(personIndex, 1); //this removes the object in the given element
    //this has a flaw. that it permanently deletes data from main array and is a bad practice
    this.setState({ persons: persons });
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    }); //works like map. takes a function and apply it on every element of the array

    const person = { ...this.state.persons[personIndex] };

    //Object.assign({},this.state.persons[personsIndex]) alternative but will not be use it

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState({
      persons: persons,
    });

    //this whole thing can be done using the input as an argument then we wont need the findIndex method
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };

    let persons = null;

    if (this.state.showPersons) {
      //keep it before return then put in variable when the showpersons is true
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            //for every element person(like in python)
            //applies a function to all the objects
            return (
              <Person
                name={person.name}
                age={person.age}
                click={() => this.deletePersonHandler(index)} //this does the delete persons handler with the argument
                key={person.id} //adding key is important cuz it helps react to identyfy changes
                changed={(event) => this.nameChangeHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>This is a React App!</h1>
        <p>This is working!</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
