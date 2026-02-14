import TaskCard from "./TaskCard";

const Column = ({ title, status, tasks, setTasks }) => {
  return (
    <div className="column">
      <h2>{title}</h2>

      {tasks
        .filter(task => task.status === status)
        .map(task => (
          <TaskCard key={task.id} task={task} setTasks={setTasks} />
        ))}
    </div>
  );
};

export default Column;