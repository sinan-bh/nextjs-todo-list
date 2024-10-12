import React from "react";

type Task = {
  title: string;
  status: string;
  dueDate: string;
};

const tasks: Task[] = [
  { title: "Create wireframe for home page...", status: "In Progress", dueDate: "Due Date" },
  { title: "Design new landing page...", status: "In Progress", dueDate: "Due Date" },
  { title: "Update product images...", status: "In Progress", dueDate: "Due Date" },
  { title: "Finalize user flow chart...", status: "In Progress", dueDate: "Due Date" },
];

const TaskList: React.FC = () => {
  return (
    <div className="max-w-md mx-auto bg-white border border-gray-200 rounded-lg shadow-md p-4 mt-5">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Task Lists <span className="text-sm text-gray-400">(16)</span></h2>
        <button className="focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </div>

      <div className="space-y-2">
        {tasks.map((task, index) => (
          <div key={index} className="flex justify-between items-center p-2 bg-gray-50  rounded-lg">
            <div className="flex flex-col">
              <span className="font-medium text-sm text-gray-700">{task.title}</span>
              <div className="flex items-center space-x-2 mt-2">
                <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">{task.status}</span>
                <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full">{task.dueDate}</span>
              </div>
            </div>
            <button className="focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <button className="flex items-center justify-center w-full text-sm font-semibold text-gray-600 border border-gray-300 rounded-full py-2 hover:bg-gray-100">
          View All
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TaskList;
