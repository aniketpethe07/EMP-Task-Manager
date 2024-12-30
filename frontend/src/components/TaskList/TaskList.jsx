import React, { useState, useEffect } from "react";
import axios from "axios";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);


  const colorArray = {
    "Pending": "bg-yellow-400", // Pending tasks
    "In-Progress": "bg-blue-400", // In Progress tasks
    "Completed": "bg-green-400", // Completed tasks
    "Failed": "bg-red-400 line-through", // Overdue tasks
  };

  useEffect(() => {
    const id = localStorage.getItem("_id");
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/tasks/taskCount/${id}`);
        console.log(response.data);
        setTasks(response.data.tasks);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div
      id="taskList"
      className="overflow-x-auto flex items-center justify-start gap-5 flex-nowrap h-[55%] w-full mt-10 py-5"
    >
      {tasks.map((task) => (
        <div
          key={task._id}
          className={`flex-shrink-0 h-full w-[400px] p-5 ${colorArray[task.status]} rounded-xl`}
        >
          <div className="flex justify-between items-center text-sm">
            {/* <h3 className="bg-red-600 p-3 rounded-xl">Priority</h3> */}
            <h2 className="text-xl font-semibold my-6">{task.title}</h2>
            <h3>{task.date.slice(0, 10)}</h3>
          </div>
          <h3 className="text-lg">{task.description}</h3>
          <div className="">
            <h3 className="text-lg">
              Status: {task.status}
            </h3>
            <h3 className="text-lg">
              Priority: {task.priority}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
