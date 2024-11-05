import SearchBar from "./SearchBar";
import TaskCard from "./TaskCard";
const ContentArea = () => {
  return (
    <div className=" flex flex-col mt-4">
      <SearchBar />
      {Array.from({length:10},(_,i)=> <TaskCard key={i} />)}
      <TaskCard />
    </div>
  );
};

export default ContentArea;
