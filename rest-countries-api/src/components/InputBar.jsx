import { useState, useContext } from "react"
import { MainContext } from "../context/MainContext"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

function Input() {
  const { query, setQuery } = useContext(MainContext)

  return (
    <div className="input-container">
      <div className="input-wrapper">
        <FontAwesomeIcon icon={faSearch} size="sm" />
        <input
          type="text"
          placeholder="Search for a country..."
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
    </div>
  )
}

export default Input
