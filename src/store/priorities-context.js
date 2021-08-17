import { createContext, useState } from "react";

const PrioritiesContext = createContext({
  priorities: [],
  totalPriorities: 0,
  addPriority: (priorityTask) => {},
  removePriority: (taskId) => {},
  itemIsPriority: (taskId) => {},
});

export function PrioritiesContextProvider(props) {
  const [userPriorities, setUserPriorities] = useState([]);

  function addPriorityHandler(priorityTask) {
    setUserPriorities((prevUserPriorities) => {
      return prevUserPriorities.concat(priorityTask);
    });
  }

  function removePriorityHandler(taskId) {
    setUserPriorities((prevUserPriorities) => {
      return prevUserPriorities.filter((task) => task.id !== taskId);
    });
  }

  function itemIsPriorityHandler(taskId) {
    return userPriorities.some((task) => task.id === taskId);
  }

  const context = {
    priorities: userPriorities,
    totalPriorities: userPriorities.length,
    addPriority: addPriorityHandler,
    removePriority: removePriorityHandler,
    itemIsPriority: itemIsPriorityHandler,
  };

  return (
    <PrioritiesContext.Provider value={context}>
      {props.children}
    </PrioritiesContext.Provider>
  );
}

export default PrioritiesContext;
