//we'll add a component. just react and function
import React from "react";
import ReactDom from "react-dom"; //connect with root div in index.html

// CSS
import "./index.css";

//adding props
const firstBook = {
  img:
    "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg",
  title: "I Love You to the Moon and Back",
  author: "Amelia Hepworth",
};

const secondBook = {
  img:
    "https://images-na.ssl-images-amazon.com/images/I/91gWqmuOdCL._AC_UL200_SR200,200_.jpg",
  title: "Room on the Broom",
  author: "Julia Donaldson",
};

function BookList() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      {/*this is away to add property in props object */}
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

const Book = (props) => {
  console.log(props);
  return (
    <article className="book">
      <img src={props.img}></img>
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root")); //this is how we connect in react
