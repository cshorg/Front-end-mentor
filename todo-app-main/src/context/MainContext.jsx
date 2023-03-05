import { createContext, useState } from "react";

const MainContext = createContext();

function MainContextProvider({ children }) {
  const [create, setCreate] = useState("");
  const [list, setList] = useState([]);
  const [filter, setFilter] = useState("all")

  const filteredList = filter === 'active' 
  ? list.filter(item => !item.completed) 
  : filter === 'completed' 
  ? list.filter(item => item.completed) 
  : list;

  return (
    <MainContext.Provider value={{ create, setCreate, list, setList, filter, setFilter, filteredList }}>
      {children}
    </MainContext.Provider>
  );
}

export { MainContext, MainContextProvider };
