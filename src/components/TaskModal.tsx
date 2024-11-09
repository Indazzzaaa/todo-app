import { useState } from "react";
import { MdCancelPresentation } from "react-icons/md";

const TaskModal = () => {
  const [isVisible, setVisibility] = useState(false);

  return (
    <div
      className={`fixed right-0 top-0  h-screen w-screen bg-gray-400/70 backdrop-blur-sm p-8 ${
        !isVisible && "hidden"
      }`}
    >
      <form className="flex flex-col gap-4 ">
        <input
          type="text"
          placeholder="Task Heading...."
          className="flex-1 bg-transparent placeholder-gray-100  rounded-md px-2 outline-none border leading-loose font-bold hover:shadow-md transition-all duration-300"
        />
        <textarea
          rows={10}
          placeholder="Details about this task."
          className="p-2 rounded-md outline-none  hover:shadow-md focus:shadow-lg transition-all duration-300 text-sm bg-transparent placeholder-gray-100 border"
        />
        <button
          type="submit"
          className="bg-gray-300 rounded-md leading-loose hover:shadow-md transition-all duration-300"
        >
          Submit
        </button>
      </form>

      <button
        className="absolute top-1 right-2 hover:shadow-sm"
        onClick={() => setVisibility(!isVisible)}
      >
        <MdCancelPresentation size="1.5rem" />
      </button>
    </div>
  );
};

export default TaskModal;
