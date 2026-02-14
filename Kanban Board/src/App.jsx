import { useState, useEffect } from "react";
import Board from "./components/Board";
import "./App.css"
const App = () => {
  const [tasks, setTasks] = useState([]);

  // Load from localStorage
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks) setTasks(savedTasks);
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return <Board tasks={tasks} setTasks={setTasks} />;
};

export default App;