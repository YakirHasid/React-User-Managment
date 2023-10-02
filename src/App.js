import React, {useState} from 'react'

import "./App.css";
import AddUserForm from "./components/AddUserForm/AddUserForm.js";
import Card from "./UI/Card/Card";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (user) => {
    console.log(user);
  };

  const errorHandler = (title, message) => {
    console.log(title, message);
  };

  return (
    <div className="App">
      <Card>
        <AddUserForm onError={errorHandler} onAddUser={addUserHandler} />
      </Card>
      <Card>
        <UsersList items={usersList} />
      </Card>
    </div>
  );
}

export default App;
