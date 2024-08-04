import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";

import ToDo from "./components/ToDo";
import CreateTodo from "./components/CreateToDo";

function App() {

  const todos =['react', 'bootstrap', 'vite']
  return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto my-5">
            <ToDo todos={todos}/>
            <CreateTodo />
          </div>
        </div>
      </div>
  );
}

export default App;
