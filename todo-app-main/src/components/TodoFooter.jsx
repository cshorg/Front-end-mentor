import { useContext } from "react";
import { MainContext } from "../context/MainContext";

function TodoFooter() {

  const { setFilter } = useContext(MainContext)

  const handleFilter = (value) => {
    setFilter(value);
    console.log(value)
  };

  return (
    <>
    <div className="footer-container">
      <button onClick={() => handleFilter('all')}>All</button>
      <button onClick={() => handleFilter('active')}>Active</button>
      <button onClick={() => handleFilter('completed')}>Completed</button>
    </div>
    <div className="footer-text">
      Drag and drop the reorder list
    </div>
    </>
  );
}

export default TodoFooter;