import React from "react";
import "./Person.css"; //add css

const person = (props) => {
  //we are using function to create component not class
  return (
    <div className="Person">
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
    //we use {} to use js in jsx
    //props are used to add properies when the function is called
    //children takes anything between the opening and closing tag
  );
};

export default person;
