import { useContext } from "react"
import { MainContext } from "../context/MainContext"
import { Link } from "react-router-dom"

import Input from "../components/InputBar"
import Filter from "../components/Filter"
import Card from "../components//Card"

function Home() {
  const { filteredData } = useContext(MainContext)

  return (
    <div>
      <article className="country-container">
        <div className="country-filtering">
          <Input />
          <Filter />
        </div>
        <div className="countries">
          {filteredData &&
            filteredData.map((country, index) => (
              <Link key={index} to={`/${country.name}`}>
                <Card country={country} />
              </Link>
            ))}
        </div>
      </article>
    </div>
  )
}

export default Home
