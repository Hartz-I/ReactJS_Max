import React from "react";

const person = (props) => {
  //stateless/ dumb components/presentational components: use this a lot
  //we are using function to create component not class
  return (
    <div>
      <p>
        I'm {props.name} and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
    </div>
    //we use {} to use js in jsx
    //props are used to add properies when the function is called
    //children takes anything between the opening and closing tag
  );
};

export default person;
