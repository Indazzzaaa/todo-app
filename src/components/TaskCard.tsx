import { useState } from "react";
import { IoMdCheckbox } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";
import { RiCheckboxBlankLine } from "react-icons/ri";

const TaskCard = () => {
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <div className="flex items-center leading-relaxed border rounded gap-1 mt-2 border-x divide-x divide-slate-600 p-2 hover:shadow-md transition-all duration-200">
      <button onClick={() => setIsCompleted(!isCompleted)}>
        {!isCompleted ? (
          <RiCheckboxBlankLine className="hover:bg-slate-400 hover:scale-125 transition-all duration-200" />
        ) : (
          <IoMdCheckbox />
        )}
      </button>
      <div className="flex flex-1 items-center">
        <p className={`flex-1 px-2  ${isCompleted && "line-through"}`}>
          Text Card
        </p>
        <MdDeleteForever className="hover:scale-125 transition-all duration-200" />
      </div>
    </div>
  );
};

export default TaskCard;
