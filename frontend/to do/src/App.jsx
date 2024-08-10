import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";

import ToDo from "./components/ToDo";
import CreateTodo from "./components/CreateToDo";

function App() {
  const [todos, setTodos] = useState([
    { title: "todo1", status: "Done" },
    { title: "todo2", status: "InProgress" },
    { title: "todo3", status: "InProgress" },
    { title: "todo4", status: "Done" },
  ]);

  return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto my-5">
            <CreateTodo />
            <ToDo todos={todos} setTodos={setTodos}/>
          </div>
        </div>
      </div>
  );
}

export default App;
