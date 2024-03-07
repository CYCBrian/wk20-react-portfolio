import { Link, useLocation } from "react-router-dom";

function Navigation() {
  const currentPage = useLocation().pathname;
  return (
    <ul>
      <li>
        <Link
          to="/"
          className={currentPage === "/"}
        >
          About Me
        </Link>
      </li>
      <li>
        <Link
          to="/portfolio"
          className={currentPage === "/portfolio"}
        >
          Portfolio
        </Link>
      </li>
      <li>
        <Link
          to="/contact"
          className={currentPage === "/contact"}
        >
          Contact
        </Link>
      </li>
      <li>
        <Link
          to="/resume"
          className={currentPage === "/resume"}
        >
          Resume
        </Link>
      </li>
    </ul>
  );
}

export default Navigation;
