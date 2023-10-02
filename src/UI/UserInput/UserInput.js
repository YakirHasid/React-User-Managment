import React from "react";

import styles from "./UserInput.module.css";

const UserInput = (props) => {
  return (
    <div className={styles["user-input"]}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type="text"
        onChange={props.onChange}
        value={props.value}
        id={props.id}
      />
    </div>
  );
};

export default UserInput;
