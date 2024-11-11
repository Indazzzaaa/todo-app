import { useState } from "react";
import { IoMdCheckbox } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";
import { RiCheckboxBlankLine } from "react-icons/ri";
import { Task } from "../utils/task_api";

const TaskCard = ({ task: { heading, content } }: { task: Task }) => {
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <div className="w-3/4 overflow-clip flex items-center leading-relaxed border rounded gap-1 mt-2 border-x divide-x divide-slate-600 p-2 hover:shadow-md transition-all duration-200">
      <button onClick={() => setIsCompleted(!isCompleted)}>
        {!isCompleted ? (
          <RiCheckboxBlankLine className="hover:bg-slate-400 hover:scale-125 transition-all duration-200" />
        ) : (
          <IoMdCheckbox />
        )}
      </button>
      <div className="flex flex-1 items-center">
        {/* Task content area... */}
        <p className={`flex-1 px-2  ${isCompleted && "line-through"}`}>
          {heading}
        </p>

        <MdDeleteForever className="hover:scale-125 transition-all duration-200" />
      </div>
    </div>
  );
};

export default TaskCard;
