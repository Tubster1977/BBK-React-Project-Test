import { useContext } from "react";

import Card from "../components/ui/Card";
import PrioritiesContext from "../store/priorities-context";
import TaskList from "../components/tasks/TaskList";

function PrioritiesPage() {
  const prioritiesCtx = useContext(PrioritiesContext);

  let content;

  if (prioritiesCtx.totalPriorities === 0) {
    content = (
      <p>
        You have no tasks on your 'my priorities' page. You might want to start
        adding some?
      </p>
    );
  } else {
    content = <TaskList tasks={prioritiesCtx.priorities} />;
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
        <h1>My Priorities</h1>
      </div>
      <Card>
        <h2>Prioritising Tasks</h2>
        <h3>
          Is there anything from the All Tasks Page that you can contribute
          towards?
        </h3>
        <p>
          Don't worry if you haven't found anything that you personally would
          like to get involved with. More will gradually be added to the All
          Tasks Page as this site grows. In the meantime, please make sure you
          bookmark and regularly check the homepage for updates.
        </p>
        <p>
          Also, take a look at the Archives Page to see what tasks have been
          completed in the past together with tasks that are ongoing.
        </p>
      </Card>
      {content}
    </section>
  );
}

export default PrioritiesPage;
