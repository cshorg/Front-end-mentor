import { Link } from "react-router-dom"
import { useContext } from "react"
import { MainContext } from "../context/MainContext"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"

function Button({ text, link, icon, style }) {
  const { clearQuery } = useContext(MainContext)

  return (
    <Link to={link} onClick={clearQuery}>
      <div className="button-container">
        {icon && <FontAwesomeIcon icon={faArrowLeft} />}
        {style === false ? (
          <div>{text}</div>
        ) : (
          <div className="button-style">{text}</div>
        )}
      </div>
    </Link>
  )
}

export default Button
