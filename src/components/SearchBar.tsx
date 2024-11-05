import { MdAssignmentAdd } from "react-icons/md";
import { TbCalendarSearch } from "react-icons/tb";

const SearchBar = () => {
  return (
    <div className="flex justify-center  ">
      <div className="flex  leading-loose items-center broder-r divide-x divide-stone-600 border hover:shadow-md border-slate-300  rounded-md focus-within:shadow-lg focus-within:border-2 transition-all duration-100">
        <div className="flex items-center  ">
          <TbCalendarSearch size="1.5rem" className="text-center " />
          <input
            type="text"
            placeholder="Search"
            className="flex-1 bg-transparent placeholder-gray-100  rounded-md px-2 outline-none  "
          />
        </div>
        <button className="hover:text-gray-800 ">
          <MdAssignmentAdd size="1.5rem" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
