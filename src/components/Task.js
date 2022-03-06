import Cancel from "./Cancel";

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      style={{ backgroundColor: "#ccc", cursor: "pointer" }}
      className={`px-2 pt-1 my-1 ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h5>
        {task.text}
        <Cancel id={task.id} onDelete={onDelete} />
      </h5>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
