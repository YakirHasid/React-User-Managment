import React from "react";

const UserInput = (props) => {
  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <input type="text" id={props.id} />
    </div>
  );
};

export default UserInput;
