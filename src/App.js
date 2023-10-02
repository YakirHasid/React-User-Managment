import "./App.css";
import AddUserForm from "./components/AddUserForm/AddUserForm.js";
import Card from "./UI/Card/Card";
import UsersList from "./components/Users/UsersList";

function App() {
  return (
    <div className="App">
      <Card>
        <AddUserForm />
      </Card>
      <Card>
        <UsersList />
      </Card>
    </div>
  );
}

export default App;
