import "./App.css";
import Footer from "./components/Footer";
import TaskList from "./components/TaskList";
import NewTaskForm from "./components/NewTaskForm";

function App() {
  // Пример данных для отображения
  const tasks = [
    {
      id: 1,
      description: "Make todo list",
      created: new Date(2024, 11, 9, 10, 0), // вчера
      completed: true,
    },
    {
      id: 2,
      description: "Make functional",
      created: new Date(2024, 11, 10, 8, 0), // 2 часа назад
      completed: false,
    },
    {
      id: 3,
      description: "Do better",
      created: new Date(2024, 11, 10, 9, 50), // 10 минут назад
      completed: false,
    },
  ];

  const itemsLeft = tasks.filter((task) => !task.completed).length;

  return (
    <section className="todoapp">
      <NewTaskForm />
      <section className="main">
        <TaskList tasks={tasks} />
        <Footer itemCount={itemsLeft} />
      </section>
    </section>
  );
}
export default App;
