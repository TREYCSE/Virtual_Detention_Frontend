import { Link } from "react-router-dom";

export default function Navs({BertModel}) {
  return (
    <div>
      <nav className="nav-container">
          <Link to={BertModel}> Excuse me, I need the tutor!🙋‍♂️ </Link>
      </nav>
    </div>
  );
}