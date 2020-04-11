import React from "react";
import { useSelector, useDispatch } from "react-redux";
import frontPic from "../frontDog.png";
import sidePic from "../sideDog.png";
import { toggle } from "../actions/toogleActions";
import Btn from "../components/Button";

const CreateToggle = () => {
  const dispatch = useDispatch();
  const View = useSelector((state) => state);
  // debugger;
  const handleClick = () => {
    View.viewside === "front"
      ? dispatch(toggle("side"))
      : dispatch(toggle("front"));
  };
  // debugger;

  const displayImg = () => {
    return <img src={View.viewside === "front" ? frontPic : sidePic}></img>;
  };

  return (
    <div>
      {displayImg()}
      <h1>{View.viewside}</h1>
      {View.viewside === "front" ? <Btn /> : null}
      <button onClick={handleClick}>TOGGLE</button>
    </div>
  );
};

export default CreateToggle;
