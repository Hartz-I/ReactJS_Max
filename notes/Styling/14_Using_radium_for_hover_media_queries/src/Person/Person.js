import React from "react";
import "./Person.css"; //add css
import Radium from "radium";

const person = (props) => {
  const style = {
    "@media ( min-width: 500px )": {
      //adding media queary
      width: "450px",
    },
  };

  return (
    <div className="Person" style={style}>
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} defaultValue={props.name} />
    </div>
  );
};

export default Radium(person);
