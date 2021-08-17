import { Link } from "react-router-dom";
import { FaCopyright } from "react-icons/fa";

import classes from "./FooterNavigation.module.css";

function FooterNavigation() {
  return (
    <footer className={classes.footer}>
      <div className={classes.logo}>
        LensIn2Nature <FaCopyright />
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/archives">Archives</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default FooterNavigation;
