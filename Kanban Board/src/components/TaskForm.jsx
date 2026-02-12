import { useState } from "react";

const TaskForm = ({ setTasks }) => {
  const [text, setText] = useState("");
  const [priority, setPriority] = useState("low");

  const addTask = () => {
    if (!text) return;

    setTasks(prev => [
      ...prev,
      {
        id: Date.now(),
        text,
        priority,
        status: "todo"
      }
    ]);

    setText("");
    setPriority("low");
  };

  return (
    <div style={{ padding: "20px" }}>
      <input
        placeholder="Enter task"
        value={text}
        onChange={e => setText(e.target.value)}
      />

      <select onChange={e => setPriority(e.target.value)}>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>

      <button onClick={addTask}>Add Task</button>
    </div>
  );
};

export default TaskForm;
