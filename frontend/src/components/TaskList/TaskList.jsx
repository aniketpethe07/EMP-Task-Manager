import React from "react";

const TaskList = () => {
  return (
    <div
      id="taskList"
      className="overflow-x-auto flex items-center justify-start gap-5 flex-nowrap h-[55%] w-full mt-10 py-5"
    >
      <div className="flex-shrink-0 h-full w-[400px] p-5 bg-green-400 rounded-xl">
        <div className="flex justify-between items-center text-sm">
          <h3 className="bg-red-600 p-3 rounded-xl">Priority</h3>
          <h3 className="">Date</h3>
        </div>
        <h2 className="text-xl font-semibold mt-5">Title</h2>
        <h3 className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, illum?
        </h3>
      </div>
      <div className="flex-shrink-0 h-full w-[400px] p-5 bg-blue-400 rounded-xl">
        <div className="flex justify-between items-center text-sm">
          <h3 className="bg-yellow-400 p-3 rounded-xl">Priority</h3>
          <h3 className="">Date</h3>
        </div>
        <h2 className="text-xl font-semibold mt-5">Title</h2>
        <h3 className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, illum?
        </h3>
      </div>
      <div className="flex-shrink-0 h-full w-[400px] p-5 bg-pink-400 rounded-xl">
        <div className="flex justify-between items-center text-sm">
          <h3 className="bg-green-600 p-3 rounded-xl">Priority</h3>
          <h3 className="">Date</h3>
        </div>
        <h2 className="text-xl font-semibold mt-5">Title</h2>
        <h3 className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, illum?
        </h3>
      </div>
      <div className="flex-shrink-0 h-full w-[400px] p-5 bg-red-400 rounded-xl">
        <div className="flex justify-between items-center text-sm">
          <h3 className="bg-yellow-400 p-3 rounded-xl">Priority</h3>
          <h3 className="">Date</h3>
        </div>
        <h2 className="text-xl font-semibold mt-5">Title</h2>
        <h3 className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, illum?
        </h3>
      </div>
      <div className="flex-shrink-0 h-full w-[400px] p-5 bg-yellow-400 rounded-xl">
        <div className="flex justify-between items-center text-sm">
          <h3 className="bg-red-600 p-3 rounded-xl">Priority</h3>
          <h3 className="">Date</h3>
        </div>
        <h2 className="text-xl font-semibold mt-5">Title</h2>
        <h3 className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, illum?
        </h3>
      </div>
      <div className="flex-shrink-0 h-full w-[400px] p-5 bg-emerald-400 rounded-xl">
        <div className="flex justify-between items-center text-sm">
          <h3 className="bg-green-600 p-3 rounded-xl">Priority</h3>
          <h3 className="">Date</h3>
        </div>
        <h2 className="text-xl font-semibold mt-5">Title</h2>
        <h3 className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, illum?
        </h3>
      </div>
    </div>
  );
};

export default TaskList;
