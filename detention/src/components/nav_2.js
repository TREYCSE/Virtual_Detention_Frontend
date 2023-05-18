import { Link } from "react-router-dom";

export default function Navs({Response}) {
  return (
    <div>
      <nav className="nav-container">
          <Link to={Response}> Get My Answer!🙋‍♂️ </Link>
      </nav>
    </div>
  );
}