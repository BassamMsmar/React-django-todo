import { useState } from "react";

function ToDo({ todos, setTodos }) {
  return (
    <div className="container mt-4">
      <ul className="list-group">
        {todos.map((todo, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between"
          >
            <span>{todo.title}</span>
            <button className="btn btn-sm border btn-primary">
              {todo.status}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDo;
