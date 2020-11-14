import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person"; //from person folder

const app = (props) => {
  //statefull/smart components : use less( highest 2 )
  const [personsState, setPersonsState] = useState({
    //exclusive for class that extends to components
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Stephney", age: 26 },
    ],
    otherState: "some other value", //while changing this hooks does not merge instead it replaces the whole state
  });

  const [anotherState, setAnotherState] = useState("Some other state!");
  //setState can be used any time you want. This is different from not using hooks

  console.log(personsState, anotherState);

  const switchNameHandler = () => {
    console.log("Was clicked");
    // personsState.persons[0].name = "Hartz"; Don't do this!!
    setPersonsState({
      persons: [
        { name: "Hartz", age: 28 },
        { name: "Manu", age: 29 },
        { name: "Stephney", age: 27 },
      ], //this updates and keeps the rest!
      otherState: personsState.otherState, //now this will add the untouched parts as well
    });
  };

  return (
    <div className="App">
      <h1>Hi, I'm a React App!</h1>
      <p>This is working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      >
        My Hobbies: Racing
      </Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
    //<h1>Can't add another part</h1>
  );
  // return React.createElement( //we don't use this cuz it gets too complecated when nested
  //   "div",
  //   { className: "App" },
  //   React.createElement("h1", null, "Does this work now?")
  // );
};

export default app;
