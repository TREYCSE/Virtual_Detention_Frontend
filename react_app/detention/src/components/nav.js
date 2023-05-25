import { Link } from "react-router-dom";

export default function Nav({Tryme , Home, Learn}) {
  return (
    <div>
      <nav className="nav-container">
          <Link to={Tryme}> | Need the Virtual Tutor? 🧑‍🏫 | </Link>
          <Link to={Home}> | Escaping Detention?🤖 | </Link>
          <Link to={Learn}> | Learn on Your Own! | </Link>
      </nav>
    </div>
  );
}