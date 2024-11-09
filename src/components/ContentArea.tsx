import RichEditor from "../testArea/RichEditor";
import SearchBar from "./SearchBar";
import TaskCard from "./TaskCard";
import TaskModal from "./TaskModal";
const ContentArea = () => {
  return (
    <div className=" flex flex-col mt-4">
      <SearchBar />
      {Array.from({ length: 5 }, (_, i) => (
        <TaskCard key={i} />
      ))}
      <TaskCard />
      <TaskModal />
      <RichEditor />
    </div>
  );
};

export default ContentArea;
