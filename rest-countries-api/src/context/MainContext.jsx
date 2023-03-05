import { createContext, useState } from "react";
import useFetch from "../hooks/useFetch";

const MainContext = createContext();

function MainContextProvider({ children }) {

  const [data] = useFetch('src/data/data.json')
  const [query, setQuery] = useState('')
  const [byRegion, setByRegion] = useState('')

  const updateRegion = (region) => {
    setByRegion(region)
  }

  const search = (data, query, byRegion) => {
    if (!data) return []; // Check if data is null or undefined
  
    return data.filter((item) =>
      item.name.toLowerCase().includes(query) &&
      (byRegion === '' || item.region.toLowerCase() === byRegion.toLowerCase())
    );
  };

  const filteredData = search(data, query, byRegion);

  return (
    <MainContext.Provider value = {{ data, query, setQuery, byRegion, updateRegion, filteredData }}>
      {children}
    </MainContext.Provider>
  );
}

export { MainContext, MainContextProvider };