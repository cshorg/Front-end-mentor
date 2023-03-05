import { useContext, useState } from "react";
import { MainContext } from "../context/MainContext";

function CreateTodo() {
  const { create, setCreate, list, setList } = useContext(MainContext);

  const handleInput = (e) => {
    setCreate(e.target.value);
  };

  const submitList = (e) => {
    e.preventDefault();
    if (create) {
      const newTodo = {
        task: create,
        active: true,
        completed: false,
      };
      setList([...list, newTodo]);
      setCreate("");
    }

    console.log(list)
  };

  return (
    <form className="create-container" onSubmit={submitList}>
      <label className="check-label">
        <input type="checkbox" />
        <span className="check-round"></span>
      </label>
      <input
        className="input"
        type="text"
        name="input"
        onChange={handleInput}
        value={create}
        placeholder="Create a new todo..."
      />
    </form>
  );
}

export default CreateTodo;
