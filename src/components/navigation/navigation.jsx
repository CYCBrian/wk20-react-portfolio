import { Link, useLocation } from "react-router-dom";
import "./navigation.css"

function Navigation() {
  const currentPage = useLocation().pathname;
  return (
    <section className="nav-container">
    <ul className="nav-bar">
      <li className="nav-link">
        <Link
          to="/"
          className={currentPage === "/"}
        >
          About Me
        </Link>
      </li>
      <li className="nav-link">
        <Link
          to="/portfolio"
          className={currentPage === "/portfolio"}
        >
          Portfolio
        </Link>
      </li>
      <li className="nav-link">
        <Link
          to="/contact"
          className={currentPage === "/contact"}
        >
          Contact
        </Link>
      </li>
      <li className="nav-link">
        <Link
          to="/resume"
          className={currentPage === "/resume"}
        >
          Resume
        </Link>
      </li>
    </ul>
    </section>

  );
}

export default Navigation;
