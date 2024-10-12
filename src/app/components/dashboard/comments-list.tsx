import React from "react";

interface CommentProps {
  name: string;
  title: string;
  message: string;
}

const Comment: React.FC<CommentProps> = ({ name, title, message }) => {
  return (
    <div className="flex items-center p-4 bg-gray-100 rounded-lg shadow-sm hover:bg-gray-200 transition">
      <div className="h-10 w-10 bg-gray-300 rounded-full"></div>
      <div className="ml-4 flex-1">
        <p className="text-sm font-semibold">
          {name} in {title}
        </p>
        <p className="text-sm text-gray-600 truncate">{message}</p>
      </div>
      <button className="ml-4 text-gray-600 hover:text-gray-800">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

const CommentsList = () => {
  const comments = [
    {
      name: "Elon S.",
      title: "Market research 2024",
      message: "Find my keynote attached in the...",
    },
    {
      name: "Elon S.",
      title: "Market research 2024",
      message: "Find my keynote attached in the...",
    },
    {
      name: "Elon S.",
      title: "Market research 2024",
      message: "Find my keynote attached in the...",
    },
  ];

  return (
    <div className="max-w-md mx-auto bg-white border border-gray-200 rounded-lg shadow-md p-4 space-y-4 mt-5">
      <div className="font-extrabold text-gray-500 p-2">New Comments</div>
      <div className="space-y-2">
        {comments.map((comment, index) => (
          <Comment key={index} {...comment} />
        ))}
      </div>
    </div>
  );
};

export default CommentsList;
