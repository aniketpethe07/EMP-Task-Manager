import React from "react";

const TaskCount = () => {
  return (
    <div className="flex justify-between mt-10 gap-5 screen">
      <div className="h-40 w-[45%] p-10 bg-red-400 rounded-xl">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className="h-40 w-[45%] p-10 bg-blue-400 rounded-xl">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className="h-40 w-[45%] p-10 bg-green-400 rounded-xl">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className="h-40 w-[45%] p-10 bg-purple-400 rounded-xl">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
    </div>
  );
};

export default TaskCount;
