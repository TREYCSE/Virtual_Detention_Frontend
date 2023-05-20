import { Link } from "react-router-dom";

export default function Navs({BertModel}) {
  return (
    <div>
      <nav className="nav-container">
          <Link to={BertModel}> Get My Answer!🙋‍♂️ </Link>
      </nav>
    </div>
  );
}