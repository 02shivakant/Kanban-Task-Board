import { useState } from "react";

const TaskCard = ({ task, setTasks }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  const deleteTask = () => {
    setTasks(prev => prev.filter(t => t.id !== task.id));
  };

  const moveTask = (status) => {
    setTasks(prev =>
      prev.map(t =>
        t.id === task.id ? { ...t, status } : t
      )
    );
  };

  const saveEdit = () => {
    setTasks(prev =>
      prev.map(t =>
        t.id === task.id ? { ...t, text: editText } : t
      )
    );
    setIsEditing(false);
  };

  return (
    <div className={`card ${task.priority}`}>
      {isEditing ? (
        <>
          <input
            value={editText}
            onChange={e => setEditText(e.target.value)}
          />
          <button onClick={saveEdit}>Save</button>
        </>
      ) : (
        <p onClick={() => setIsEditing(true)}>{task.text}</p>
      )}

      <button onClick={() => moveTask("inprogress")}>In Progress</button>
      <button onClick={() => moveTask("done")}>Done</button>
      <button onClick={deleteTask}>X</button>
    </div>
  );
};

export default TaskCard;