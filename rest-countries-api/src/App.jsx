import { useState, useContext } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./sass/app.scss";
import { ThemeContext } from "./context/ThemeContext";
import { MainContext } from "./context/MainContext";
import Navbar from "./components/Navbar";
import Input from "./components/InputBar";
import Filter from "./components/Filter";
import Card from "./components/Card";
import Country from "./pages/Country.jsx"

function App() {
  const { data, query, filteredData } = useContext(MainContext);
  const { theme } = useContext(ThemeContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route
            path="countries"
            element={
              <div className={`App ${theme}`}>
                <Navbar />
                <article className="search-bar">
                  <Input />
                  <Filter />
                </article>
                <article className="country-container">
                  {filteredData &&
                    filteredData.map((country, index) => (
                      <Link key={index} to={`/countries/${country.name}`}>
                        <Card country={country} />
                      </Link>
                    ))}
                </article>
              </div>
            }
          ></Route>
          <Route path="countries/:country" element={<Country />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;