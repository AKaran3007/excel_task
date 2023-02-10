import React from "react";
import { useState } from "react";
function Todo() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: Math.random(),
      task,
    };
    if (task) {
      setList([...list, newItem]);
      setTask("");
    }
  };
  return (
    <>
      <h1>TODO</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button>Add</button>
      </form>
      <div>
        {list.map((item) => {
          return (
            <div key={item.id}>
              <li>{item.task}</li>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default Todo;
