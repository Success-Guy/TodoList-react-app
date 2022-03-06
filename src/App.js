import { useState, useEffect } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 7th at 12p:00pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at school",
      day: "Feb 5th at 3:00pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Food Shopping",
      day: "Feb 1st at 1:30pm",
      reminder: false,
    },
  ]);
  useEffect(() => {
    async function fetchTasks() {
      const res = await fetch("http://localhost:5000/taks");
      const data = await res.json();
      console.log(data);
    }
  }, []);
  // Add tesk
  function addTask(task) {
    const id = Math.floor(Math.random() * 1000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  }

  // deleteTask
  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }
  // const deleteTask = (id) => {
  // setTasks(tasks.filter((task) => task.id !== id));
  // };

  // toggleReminder
  function toggleReminder(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  }

  return (
    <div className="container" style={{ minHeight: "250px" }}>
      <Header
        title="Task Tracker"
        color="#5522ff"
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No task to show"
      )}
    </div>
  );
}

export default App;
