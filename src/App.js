import { Route, Switch } from "react-router-dom";

import AllTasksPage from "./pages/AllTasks";
import NewTaskPage from "./pages/NewTask";
import PrioritiesPage from "./pages/Priorities";
import AboutPage from "./pages/About";
import ArchivesPage from "./pages/Archives";
import ContactPage from "./pages/Contact";

import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllTasksPage />
        </Route>
        <Route path="/new-task">
          <NewTaskPage />
        </Route>
        <Route path="/priorities">
          <PrioritiesPage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/archives">
          <ArchivesPage />
        </Route>
        <Route path="/contact">
          <ContactPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
