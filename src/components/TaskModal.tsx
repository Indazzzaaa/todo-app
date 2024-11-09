import { useRef, useState } from "react";
import { MdCancelPresentation } from "react-icons/md";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

interface AddTaskFormFields extends HTMLFormControlsCollection {
  taskHeading: HTMLInputElement;
  taskContent: HTMLTextAreaElement;
}

interface AddTaskFormElements extends HTMLFormElement {
  readonly elements: AddTaskFormFields;
}

const TaskModal = () => {
  const [isVisible, setVisibility] = useState(true);

  const submitHanlder = (e: React.FormEvent<AddTaskFormElements>) => {
    e.preventDefault();

    const { elements } = e.currentTarget;
    const title = elements.taskHeading.value;
    const content = elements.taskContent.value;

    console.log("->> Loging the form submit");

    console.log(elements);
    console.log("Title: ", title);
    console.log("content: ", content);

    // e.currentTarget.reset(); // our simpleMDE content does not reset.
    setVisibility(false);
  };

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
        <SimpleMDE
          id="taskContent"
          className="custom-editor-bg w-auto"
          placeholder="Task Description ..."
          onReset={() => ""}
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
        onClick={() => setVisibility(!isVisible)}
      >
        <MdCancelPresentation size="1.5rem" />
      </button>
    </div>
  );
};

export default TaskModal;
