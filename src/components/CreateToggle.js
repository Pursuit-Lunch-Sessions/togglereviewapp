import React from "react";
import { useSelector, useDispatch } from "react-redux";
import frontpic from "../frontDog.png";
// import { addTodo } from "../actions/todoActions";

const CreateToggle = () => {
  const dispatch = useDispatch();
  const View = useSelector((state) => state);
  debugger;
  const handleClick = () => {};

  return (
    <div>
      <img src={frontpic}></img>
      <h1>{}</h1>
      <button onClick={handleClick}>TOGGLE</button>
    </div>
  );
};

export default CreateToggle;
