import { MdDeleteForever } from "react-icons/md";
import { RiCheckboxBlankLine } from "react-icons/ri";

const TaskCard = () => {
  return (
    <div className="flex items-center leading-relaxed border rounded gap-1 mt-2 border-x divide-x divide-slate-600 p-2 hover:shadow-md">
      <RiCheckboxBlankLine className="hover:bg-slate-400" />
      <div className="flex flex-1 items-center">
        <p className="flex-1 px-2 ">Text Card</p>
        <MdDeleteForever className="hover:scale-125" />
      </div>
    </div>
  );
};

export default TaskCard;
