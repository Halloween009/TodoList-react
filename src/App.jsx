import { useState } from "react";
import Footer from "./components/Footer";
import TaskList from "./components/TaskList";
import NewTaskForm from "./components/NewTaskForm";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  const addTask = (description) => {
    const newTask = {
      id: Date.now(),
      description: description,
      completed: false,
      editing: false,
      created: new Date(),
    };
    setTasks([newTask, ...tasks]);
  };

  const toggleTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const clearCompleted = () => {
    setTasks((prevTasks) => prevTasks.filter((task) => !task.completed));
  };

  const editTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? { ...task, editing: true }
          : { ...task, editing: false }
      )
    );
  };

  const saveTask = (id, newDescription) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? { ...task, description: newDescription, editing: false }
          : task
      )
    );
  };

  const cancelEdit = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, editing: false } : task
      )
    );
  };

  const itemsLeft = tasks.filter((task) => !task.completed).length;

  const showAllTasks = () => {
    setFilter("all");
  };
  const showActiveTasks = () => {
    setFilter("active");
  };
  const showCompletedTasks = () => {
    setFilter("completed");
  };

  const getFilteredTasks = () => {
    switch (filter) {
      case "active":
        return tasks.filter((task) => !task.completed);
      case "completed":
        return tasks.filter((task) => task.completed);
      default:
        return tasks;
    }
  };
  const filteredTasks = getFilteredTasks();

  return (
    <section className="todoapp">
      <NewTaskForm onCreate={addTask} />
      <section className="main">
        <TaskList
          tasks={filteredTasks}
          onToggle={toggleTask}
          onDelete={deleteTask}
          onEdit={editTask}
          onSave={saveTask}
          onCancelEdit={cancelEdit}
        />
        <Footer
          itemCount={itemsLeft}
          onFilterAll={showAllTasks}
          onFilterActive={showActiveTasks}
          onFilterCompleted={showCompletedTasks}
          clearCompleted={clearCompleted}
        />
      </section>
    </section>
  );
}
export default App;
