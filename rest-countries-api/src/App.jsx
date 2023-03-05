import { useContext } from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { ThemeContext } from "./context/ThemeContext"
import Navbar from "./components/Navbar"
import Country from "./pages/Country.jsx"
import Home from "./pages/Home"

function App() {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={`App ${theme}`}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:country" element={<Country />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
