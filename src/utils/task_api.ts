interface Task {
  id: number;
  heading: string;
  content: string;
  createdAt: Date;
  completedAt?: Date;
}

let taskCollection: Task[] = [];

export const createTask = ({ heading, content }: Task) => {
  taskCollection.push({
    id: taskCollection.length,
    heading,
    content,
    createdAt: new Date(),
  });
};

export const getTaskById = (id: number): Task | undefined => {
  const taskFound = taskCollection.find((currTask) => currTask.id === id);
  return taskFound;
};

export const getAllTasks = (): Task[] => {
  return taskCollection;
};
