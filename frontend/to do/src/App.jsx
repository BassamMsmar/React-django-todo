import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";

import ToDo from "./components/ToDo";
import CreateTodo from "./components/CreateToDo";

function App() {
  return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto my-5">
            <ToDo />
            <CreateTodo />
          </div>
        </div>
      </div>
  );
}

export default App;
