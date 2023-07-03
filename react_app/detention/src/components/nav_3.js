import { Link } from "react-router-dom";

export default function Navd({Api1 , Api2, Api3}) {
  return (
    <div>
      <nav className="nav-container">
          <Link to={Api1}> | RANDOM TOPIC 1| </Link>

      </nav>
      <p>More topics coming soon!</p>
    </div>
  );
}
//          <Link to={Api2}> | RANDOM TOPIC 2 | </Link>