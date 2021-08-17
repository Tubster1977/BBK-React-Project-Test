import { useContext } from "react";

import Card from "../ui/Card";
import classes from "./TaskItem.module.css";
import PrioritiesContext from "../../store/priorities-context";

function TaskItem(props) {
  const prioritiesCtx = useContext(PrioritiesContext);

  const itemIsPriority = prioritiesCtx.itemIsPriority(props.id);

  function togglePrioritiesStatusHandler() {
    if (itemIsPriority) {
      prioritiesCtx.removePriority(props.id);
    } else {
      prioritiesCtx.addPriority({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={togglePrioritiesStatusHandler}>
            {itemIsPriority ? "Remove from Priorities" : "To Priorities"}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default TaskItem;
