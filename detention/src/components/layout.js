import { Outlet, Link } from "react-router-dom";

export default function Layout() {

  return (
    <div>
        <div>
          <nav>
                <Link to="/home">| Home |</Link>
          </nav>
      </div>

      <Outlet />
    </div>
  );
}