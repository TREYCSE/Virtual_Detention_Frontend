import { Link } from "react-router-dom";

export default function Nav({Tryme , Home, Response}) {
  return (
    <div>
      <nav className="nav-container">
          <Link to={Tryme}> | Get Back to Work | </Link>
          <Link to={Home}> Escaping Detention?🤖 </Link>
      </nav>
    </div>
  );
}