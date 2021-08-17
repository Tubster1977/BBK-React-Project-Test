import { useContext } from "react";
import { Link } from "react-router-dom";
import { FaSeedling } from "react-icons/fa";

import classes from "./MainNavigation.module.css";
import PrioritiesContext from "../../store/priorities-context";

function MainNavigation() {
  const prioritiesCtx = useContext(PrioritiesContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        BPCT <FaSeedling />
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Tasks</Link>
          </li>
          <li>
            <Link to="/new-task">Add New Task</Link>
          </li>
          <li>
            <Link to="/priorities">
              My Priorities{" "}
              <span className={classes.badge}>
                {prioritiesCtx.totalPriorities}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
