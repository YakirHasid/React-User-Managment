import "./App.css";
import AddUserForm from "./components/AddUserForm/AddUserForm.js";
import Card from "./UI/Card/Card";

function App() {
  return (
    <div className="App">
      <Card>
        <AddUserForm />
      </Card>
    </div>
  );
}

export default App;
