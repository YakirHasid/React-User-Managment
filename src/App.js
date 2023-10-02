import "./App.css";
import AddUserForm from "./components/AddUserForm/AddUserForm.js";
import Card from "./UI/Card/Card";
import UsersList from "./components/Users/UsersList";

function App() {
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
        <UsersList />
      </Card>
    </div>
  );
}

export default App;
