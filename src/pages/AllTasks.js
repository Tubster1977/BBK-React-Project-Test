import { useState, useEffect } from "react";

import Card from "../components/ui/Card";
import TaskList from "../components/tasks/TaskList";

function AllTasksPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [LoadedTasks, setLoadedTasks] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://bbk-react-project-default-rtdb.firebaseio.com/tasks.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const tasks = [];

        for (const key in data) {
          const task = {
            id: key,
            ...data[key],
          };

          tasks.push(task);
        }

        setIsLoading(false);
        setLoadedTasks(tasks);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
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
        <h1>All Tasks Page</h1>
      </div>
      <Card>
        <h2>Current Uploaded Tasks</h2>
        <h3>Can you help?</h3>
        <p>
          Bentley Priory Conservation Taskforce, BPCT, are looking for local
          residents to take stewardship of a site that has been designated an
          area of special scientific interest.
        </p>
        <p>
          Shown below are tasks recently uploaded and stored on our database. If
          you would like to get involved, have a read at what is coming up and
          simply arrive at the recommended times.
        </p>
        <p>
          Whilst this website is publicly open for the time being, we will be
          monitoring how the site is being used before making it exclusively for
          the use of registered volunteers
        </p>
      </Card>
      <TaskList tasks={LoadedTasks} />
    </section>
  );
}

export default AllTasksPage;
