import "easymde/dist/easymde.min.css";
import { MdCancelPresentation } from "react-icons/md";
import { SimpleMdeReact } from "react-simplemde-editor";
import { createTask } from "../utils/task_api";
import { useCallback, useRef, useState } from "react";

interface AddTaskFormFields extends HTMLFormControlsCollection {
  taskHeading: HTMLInputElement;
  taskContent: HTMLTextAreaElement;
}

interface AddTaskFormElements extends HTMLFormElement {
  readonly elements: AddTaskFormFields;
}

interface Props {
  isVisible: boolean;
  toggleVisibility: () => void;
}

const TaskModal = ({ isVisible, toggleVisibility }: Props) => {
  const [mdeValue, setmdeValue] = useState<string>("");

  const submitHanlder = (e: React.FormEvent<AddTaskFormElements>) => {
    e.preventDefault();

    const { elements } = e.currentTarget;
    const title = elements.taskHeading.value;
    const content = elements.taskContent.value;

    console.log("->> Loging the form submit");

    // console.log(elements);
    console.log("Title: ", title);
    console.log("content: ", content);

    //  Update the tasks api
    createTask({ heading: title, content: content });

    e.currentTarget.reset();
    // to reset the data of our simpleMDE.
    setmdeValue("");
    toggleVisibility();
  };

  console.log("Re-render task model");

  const onChange = useCallback((value: string) => {
    console.log("->> New: ", value);

    setmdeValue(value);
  }, []);

  return (
    <div
      className={`fixed right-0 top-0  h-screen w-screen bg-gray-400/70 backdrop-blur-sm p-4 ${
        !isVisible && "hidden"
      }`}
    >
      <form onSubmit={submitHanlder} className="flex flex-col gap-2 ">
        <input
          type="text"
          id="taskHeading"
          placeholder="Task Heading...."
          className="flex-1 bg-transparent placeholder-gray-100  rounded-md px-2 outline-none border leading-loose font-bold hover:shadow-md transition-all duration-300"
        />
        <SimpleMdeReact
          id="taskContent"
          className="custom-editor-bg w-auto"
          placeholder="Task Description ..."
          value={mdeValue}
          onChange={onChange}
        />

        <button
          type="submit"
          className="w-24 px-4 py-2 bg-gray-300 rounded-md leading-loose hover:shadow-md transition-all duration-300"
        >
          Submit
        </button>
      </form>

      <button
        className="absolute top-1 right-2 hover:shadow-sm"
        onClick={toggleVisibility}
      >
        <MdCancelPresentation size="1.5rem" />
      </button>
    </div>
  );
};

export default TaskModal;
