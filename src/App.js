import React, { useState } from "react";

import "./App.css";
import AddUserForm from "./components/AddUserForm/AddUserForm.js";
import Card from "./UI/Card/Card";
import UsersList from "./components/Users/UsersList";
import ErrorModal from "./UI/ErrorModal/ErrorModal";

function App() {
  const [usersList, setUsersList] = useState([]);
  const [error, setError] = useState(null); // [title, message

  const addUserHandler = (user) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        {
          ...user,
          id: Math.random().toString(),
        },
      ];
    });
  };

  const errorHandler = (title, message) => {
    setError({ title, message });
    console.log("error modal opened");
  };

  const abortErrorHandler = () => {
    setError(null);
    console.log("error modal closed");
  };

  return (
    <div className="App">
      <Card>
        <AddUserForm onError={errorHandler} onAddUser={addUserHandler} />
      </Card>
      {usersList.length > 0 && (
        <Card style={{'margin-top': '50px'}}>
          <UsersList items={usersList} />
        </Card>
      )}

      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={abortErrorHandler}
        />
      )}
    </div>
  );
}

export default App;
