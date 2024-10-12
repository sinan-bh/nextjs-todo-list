import React from 'react'
import ProjectCard from './project-cards'
import TaskList from './task-list'
import HighPriorityTask from './high-priority-task'
import CommentsList from './comments-list'
import TaskSummary from './task-summary'
import { IoMdAddCircleOutline } from "react-icons/io";

export default function DashboardProject() {
  return (
    <div className='w-[800px] h-full mx-auto bg-white border border-gray-200 rounded-lg shadow-md p-4  gap-4'>
        <div>
        <TaskSummary />
        </div>
        <div className='flex justify-between px-4 mt-5'>
            <div className='font-extrabold text-2xl'>
                Project
            </div>
            <div className='font-semibold text-md flex'>
               <IoMdAddCircleOutline size={20}/><span>Add New Project</span>
            </div>
        </div>
      <div className="flex p-4  gap-4">
          <div>
            <ProjectCard />
            <TaskList />
          </div>
          <div className="m-0">
            <HighPriorityTask />
            <CommentsList />
          </div>
        </div>
    </div>
  )
}
