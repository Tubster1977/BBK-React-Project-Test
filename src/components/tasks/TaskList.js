import TaskItem from "./TaskItem";
import classes from "./TaskList.module.css";

function TaskList(props) {
  return (
    <ul className={classes.list}>
      {props.tasks.map((task) => (
        <TaskItem
          key={task.id}
          id={task.id}
          image={task.image}
          title={task.title}
          address={task.address}
          description={task.description}
        />
      ))}
    </ul>
  );
}

export default TaskList;
