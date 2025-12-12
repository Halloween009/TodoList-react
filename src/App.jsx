import { useState } from "react";
import Footer from "./components/Footer";
import TaskList from "./components/TaskList";
import NewTaskForm from "./components/NewTaskForm";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      description: "Complete React project",
      created: new Date(2025, 11, 11, 10, 0),
      completed: false,
      editing: false,
    },
    {
      id: 2,
      description: "Learn useState hook",
      created: new Date(2025, 11, 12, 8, 30),
      completed: false,
      editing: false,
    },
    {
      id: 3,
      description: "Build TODO app",
      created: new Date(2025, 11, 12, 9, 15),
      completed: false,
      editing: false,
    },
  ]);

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, editing: true }
          : { ...task, editing: false }
      )
    );
  };

  const saveTask = (id, newDescription) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, description: newDescription, editing: false }
          : task
      )
    );
  };

  const itemsLeft = tasks.filter((task) => !task.completed).length;

  return (
    <section className="todoapp">
      <NewTaskForm />
      <section className="main">
        <TaskList
          tasks={tasks}
          onToggle={toggleTask}
          onDelete={deleteTask}
          onEdit={editTask}
          onSave={saveTask}
        />
        <Footer itemCount={itemsLeft} />
      </section>
    </section>
  );
}
export default App;
