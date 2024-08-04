import { useState } from "react";
function ToDo() {
  const [name, setName] = useState("Bassam");
  const updateName = () => {

    if (name === "Ahmed") {
      setName("Bassam");
    } else {
      setName("Ahmed");
    }

  };

  return (
    <div>
      <h3>ToDo</h3>
      <h4>{name}</h4>
      <button onClick={updateName}>Click me</button>
    </div>
  );
}

export default ToDo;
