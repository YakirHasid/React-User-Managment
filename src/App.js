import "./App.css";
import AddUserForm from "./components/AddUserForm/AddUserForm.js";
import Card from "./UI/Card/Card";
import Users from "./components/Users/Users";

function App() {
  return (
    <div className="App">
      <Card>
        <AddUserForm />
      </Card>
      <Card>
        <Users />
      </Card>
    </div>
  );
}

export default App;
