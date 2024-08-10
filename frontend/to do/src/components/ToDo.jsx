import { useState } from "react";

function ToDo({ todos, setTodos }) {
  const handleStatus = (todo) => {
    const updateTodo = todo.status === "Done" ? "InProgress" : "Done";
    fetch(`http://127.0.0.1:8000/todo/${todo.id}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: todo.title, status: updateTodo }),
    });
  };

  return (
    <div className="container mt-4">
      <ul className="list-group">
        {todos.map((todo, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between"
          >
            <span>{todo.title}</span>
            <button
              className="btn btn-sm border btn-primary"
              onClick={() => handleStatus(todo)}
            >
              {todo.status}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDo;
