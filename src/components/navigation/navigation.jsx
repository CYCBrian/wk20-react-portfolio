import { Link, useLocation } from "react-router-dom";
import "./navigation.css";

function Navigation() {
  const currentPage = useLocation().pathname;

  return (
    <section className="nav-container">
      <ul className="nav-bar">
        <li className="nav-link">
          <Link 
            to="/"
            className={currentPage === "/" ? "active" : ""}
          >
            About Me
          </Link>
        </li>
        <li className="nav-link">
          <Link
            to="/portfolio"
            className={currentPage === "/portfolio" ? "active" : ""}
          >
            Portfolio
          </Link>
        </li>
        <li className="nav-link">
          <Link
            to="/resume"
            className={currentPage === "/resume" ? "active" : ""}
          >
            Resume
          </Link>
        </li>
        <li className="nav-link">
          <Link
            to="/contact"
            className={currentPage === "/contact" ? "active" : ""}
          >
            Contact
          </Link>
        </li>

      </ul>
    </section>
  );
}

export default Navigation;
