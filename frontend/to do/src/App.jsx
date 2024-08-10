import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";

import ToDo from "./components/ToDo";
import CreateTodo from "./components/CreateToDo";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/todo/")
      .then((response) => response.json())
      .then((date) => setTodos(date));
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 mx-auto my-5">
          <CreateTodo />
          <ToDo todos={todos} setTodos={setTodos} />
        </div>
      </div>
    </div>
  );
}

export default App;
