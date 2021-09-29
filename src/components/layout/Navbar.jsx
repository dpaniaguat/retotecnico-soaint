import { RouteData } from "../../routes/RouteData";
import "./sass/Navbar.scss";

import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__menu">
        {RouteData.map(
          ({ href, menu, privado }, i) =>
            !privado && (
              <li key={i}>
                <Link to={href}>
                  {menu}
                </Link>
                <span></span>
              </li>
            )
        )}
      </ul>
    </nav>
  );
};
