import { useState } from "react";
import SearchBar from "./SearchBar";
import TaskCard from "./TaskCard";
import TaskModal from "./TaskModal";
import { getAllTasks } from "../utils/task_api";
const ContentArea = () => {
  const [isVisible, setVisibility] = useState(false);
  const allTasks = getAllTasks();

  const toggleModel = () => {
    setVisibility(!isVisible);
  };

  return (
    <div className=" flex flex-col mt-4 items-center">
      <SearchBar toogleModel={toggleModel} />
      {allTasks.map((curr) => (
        <TaskCard task={curr} key={curr.id} />
      ))}
      <TaskModal isVisible={isVisible} toggleVisibility={toggleModel} />
    </div>
  );
};

export default ContentArea;
