import React, { useState } from "react";
import UserInput from "../../UI/UserInput/UserInput";
import Button from "../../UI/Button/Button";

const AddUserForm = (props) => {
  const [userInput, setUserInput] = useState({ 'username-field': "", 'age-field': "" });

  const submitHandler = (event) => {
    event.preventDefault();

    /* user input checks */
    if (
      userInput.username.trim().length === 0 ||
      userInput.age.trim().length === 0
    ) {
      props.onError(
        "Invalid input",
        "Please enter a valid name and age (non-empty values)."
      );
      return;
    }
    if (+userInput.age < 1) {
      props.onError("Invalid age", "Please enter a valid age (> 0).");
      return;
    }

    /* add user after all checks passed successfully */
    props.onAddUser(userInput);
    setUserInput({ username: "", age: "" });
  };

  const userInputChangeHandler = (event) => {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [event.target.id]: event.target.value,
      };
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <UserInput
        onChange={userInputChangeHandler}
        value={userInput['username-field']}
        id="username-field"
        label="Username"
      />
      <UserInput
        onChange={userInputChangeHandler}
        value={userInput['age-field']}
        id="age-field"
        label="Age (Years)"
      />
      <Button type="submit">Add User</Button>
    </form>
  );
};

export default AddUserForm;
