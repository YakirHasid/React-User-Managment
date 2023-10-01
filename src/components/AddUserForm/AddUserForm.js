import React from "react";
import UserInput from "../../UI/UserInput/UserInput";
import Button from "../../UI/Button/Button"

const AddUserForm = (props) => {
  return (
    <form>
        <UserInput id="username-field" label="Username" />
        <UserInput id="age-field" label="Age (Years)" />        
        <Button>Add User</Button>
    </form>
  );
};

export default AddUserForm;
