import { useState, useContext } from "react";
import { ThemeContext } from "./context/ThemeContext.jsx";
import "./sass/app.scss";
import Header from "./components/Header.jsx";
import CreateTodo from "./components/CreateTodo.jsx";
import TodoList from "./components/TodoList.jsx";
import TodoFooter from "./components/TodoFooter.jsx";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`app ${theme}`}>
      <div className="container">
        <Header />
        <CreateTodo />
        <TodoList />
        <TodoFooter />
      </div>
    </div>
  );
}

export default App;
