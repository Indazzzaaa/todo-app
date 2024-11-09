import { useState } from "react";
import SearchBar from "./SearchBar";
import TaskCard from "./TaskCard";
import TaskModal from "./TaskModal";
const ContentArea = () => {
  const [isVisible, setVisibility] = useState(true);

  const toggleModel = () => {
    console.log("Closing the model");

    setVisibility(!isVisible);
  };

  return (
    <div className=" flex flex-col mt-4">
      <SearchBar toogleModel={toggleModel}/>
      {Array.from({ length: 5 }, (_, i) => (
        <TaskCard key={i} />
      ))}
      <TaskCard />
      <TaskModal isVisible={isVisible} toggleVisibility={toggleModel} />
    </div>
  );
};

export default ContentArea;
