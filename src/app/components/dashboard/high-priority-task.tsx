import React from "react";

type Task = {
  title: string;
  description: string;
  createdAt: string;
  dueDate: string;
  priority: string;
  assignedUsers: string[];
  remainingUsers: number;
};

const task: Task = {
  title: "Create wireframe for home page",
  description: "Define and plan the information hierarchy of their design for a website",
  createdAt: "05/10/2024",
  dueDate: "12/12/2024",
  priority: "High Priority",
  assignedUsers: [
    "/path/to/avatar1.jpg",
    "/path/to/avatar2.jpg",
    "/path/to/avatar3.jpg",
    "/path/to/avatar4.jpg"
  ],
  remainingUsers: 4,
};

const HighPriorityTask: React.FC = () => {
  return (
    <div className="w-full  mx-auto bg-white border border-gray-200 rounded-lg shadow-md p-4 space-y-4">
      <div className="flex justify-between items-center">
        <span className="text-xs font-medium text-red-600 bg-red-100 px-2 py-1 rounded-full">
          {task.priority}
        </span>
        <div className="space-x-2">
          <button className="focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <div className="flex justify-between text-xs text-gray-500">
        <span>Created at {task.createdAt}</span>
        <span>Due Date {task.dueDate}</span>
      </div>

      <h3 className="text-sm font-semibold text-gray-900">{task.title}</h3>
      <p className="text-xs text-gray-600">{task.description}</p>

      <div>
        <span className="text-xs font-medium text-gray-700">ToDo</span>
        <div className="flex items-center mt-2 space-x-2">
          {task.assignedUsers.map((user, index) => (
            <img
              key={index}
              src={user}
              alt={`User ${index + 1}`}
              className="w-8 h-8 rounded-full border-2 border-white shadow-sm"
            />
          ))}
          <div className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full text-gray-600 text-xs">
            +{task.remainingUsers}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighPriorityTask;
