import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  //for clean codes.
  const [title, setTitle] = useState(props.title);

  //using arrow function
  const clickHandler = () => {
    setTitle("Updated");
    console.log(title);
  };
  //without arrow function
  // function clickHander() {
  //   console.log("Clicked!!!!!");
  // }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;

// export function ExerciseComponent() {
//   return <p>First Exercise - done!</p>
// }
