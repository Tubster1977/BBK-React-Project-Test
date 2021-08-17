import { useHistory } from "react-router-dom";

import Card from "../components/ui/Card";
import NewTaskForm from "../components/tasks/NewTaskForm";

function NewTaskPage() {
  const history = useHistory();

  function addTaskHandler(taskData) {
    fetch("https://bbk-react-project-default-rtdb.firebaseio.com/tasks.json", {
      method: "POST",
      body: JSON.stringify(taskData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      history.replace("/");
    });
  }

  return (
    <section>
      <div
        style={{
          background: `url('${process.env.PUBLIC_URL}/images/image 10.jpeg')`,
          width: "100%",
          height: "75vh",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "5px",
        }}
      >
        <h1>New Task Page</h1>
      </div>
      <Card>
        <h2>Adding Further Tasks</h2>
        <h3>Is there anything you have noticed that needs to be done?</h3>
        <p>
          At BPCT, we don't always get it right. We therefore rely on our
          stewards to report on anything of noticeable concern. These are
          typically around littering, but could also involve the welfare of
          animals or the condition of key habitats.
        </p>
        <p>
          Please use this section of the website with care and respect and where
          possible, be clear but succinct. When adding images from external
          websites, ensure they represent the proposed task and always include
          the full url. Please also try to include images that are of high
          quality.
        </p>
        <p>PLEASE NOTE: This site is being regularly monitored!</p>
      </Card>
      <NewTaskForm onAddTask={addTaskHandler} />
    </section>
  );
}

export default NewTaskPage;
