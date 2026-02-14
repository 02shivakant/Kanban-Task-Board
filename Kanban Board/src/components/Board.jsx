import Column from "./Column";
import TaskForm from "./TaskForm";

const Board = ({ tasks, setTasks }) => {
  return (
    <div>
      <TaskForm setTasks={setTasks} />

      <div className="board">
        <Column title="To Do" status="todo" tasks={tasks} setTasks={setTasks} />
        <Column title="In Progress" status="inprogress" tasks={tasks} setTasks={setTasks} />
        <Column title="Done" status="done" tasks={tasks} setTasks={setTasks} />
      </div>
    </div>
  );
};

export default Board;