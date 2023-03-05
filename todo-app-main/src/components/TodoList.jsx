import { useContext, useState } from "react";
import { MainContext } from "../context/MainContext";

function TodoList() {
  const { list, setList, filter, filteredList } = useContext(MainContext);

  const removeRow = (index) => {
    const updatedList = list.filter((item) => item.task !== list[index].task);
    setList(updatedList);
  };

  const clearCompleted = () => {
    setList(list.filter(item => !item.completed));
  };

  const handleCheck = (index) => {
    const updatedList = [...list];
    const item = updatedList[index];
    
    item.completed = !item.completed;
    item.active = !item.completed;
  
    setList(updatedList);
    console.log(list)
  };

  return (
    <div className="list-container">
      <ul>
        {filteredList.map((row, index) => (
          <div key={index}>
            <li className="row">
              <div className="data">
                <label className="check-label">
                  <input
                    type="checkbox"
                    onChange={() => handleCheck(index)}
                  />
                  <span className={row.completed ? 'check-round' : ''}></span>
                </label>
                {row.task}
              </div>
              <div className="list-icon-cross">
                <img
                  onClick={() => removeRow(index)}
                  src="public/images/icon-cross.svg"
                  alt="remove"
                />
              </div>
            </li>
            <hr />
          </div>
        ))}
      </ul>
      {list.length > 0 && (
        <div className="list-footer">
          <div>{list.length} items left</div>
          <div className="completed" onClick={clearCompleted}>
            Clear Completed
          </div>
        </div>
      )}
    </div>
  );
}

export default TodoList;