import { Link } from "react-router-dom";

function Button({ text, link }) {
  return (
    <Link to={link}>
      <div className="button-container">
        {text}
      </div>
    </Link>
  );
}

export default Button;