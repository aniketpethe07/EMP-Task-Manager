import React, { useState, useEffect } from "react";
import axios from "axios";

const TaskList = ({ useTaskType }) => {
  const [tasks, setTasks] = useState([]);

  const colorStatus = {
    Pending: "bg-blue-400",
    "In-Progress": "bg-yellow-400",
    Completed: "bg-green-400",
    Failed: "bg-red-400 line-through",
  };

  const colorPriority = {
    Low: "bg-green-600",
    Medium: "bg-yellow-500",
    High: "bg-red-600",
  };

  useEffect(() => {
    const id = localStorage.getItem("_id");
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/tasks/taskCount/${id}`);
        // console.log(response.data.tasks);
        setTasks(response.data.tasks);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };
    fetchData();
  }, []);
  // console.log(useTaskType);

  const filteredTasks =
    useTaskType === "all"
      ? tasks
      : tasks.filter((task) => task.status == useTaskType);

  const handleClick = (taskId, taskStatus) => {
    const fetchData = async () => {
      try {
        const response = await axios.post(`/api/tasks/taskStatus/${taskId}`, {
          taskStatus,
        });

        // Update the task status locally
        setTasks((prevTasks) =>
          prevTasks.map((task) =>
            task.id === taskId ? { ...task, status: taskStatus } : task
          )
        );
      } catch (error) {
        console.error("Error updating task status:", error);
      }
    };
    fetchData();
  };

  return (
    <div
      id="taskList"
      className="overflow-x-auto flex items-center justify-start gap-5 flex-nowrap h-[55%] w-full mt-10 py-5"
    >
      {filteredTasks.map((task) => (
        <div
          key={task.id}
          className={`flex-shrink-0 h-full w-[400px] p-5 ${
            colorStatus[task.status]
          } rounded-xl flex flex-col`}
        >
          <div className="flex justify-between items-center text-sm">
            <h3 className={`${colorPriority[task.priority]} p-3 rounded-xl`}>
              {task.priority}
            </h3>
            <h2 className="text-xl font-semibold my-6">{task.title}</h2>
            <h3>{task.assigned_date.slice(0, 10)}</h3>
          </div>
          <h3 className="text-lg">{task.description}</h3>
          <h3 className="text-lg mt-auto">{task.status}</h3>
          {task.status === "Pending" && (
            <span className="flex justify-around">
              <button
                className="text-lg mt-auto px-3 bg-gray-300 rounded-xl"
                onClick={() => handleClick(task.id, "In-Progress")}
              >
                Accept
              </button>
              <button
                className="text-lg mt-auto px-3 bg-gray-300 rounded-xl"
                onClick={() => handleClick(task.id, "Completed")}
              >
                Mark as completed
              </button>
            </span>
          )}

          {task.status === "In-Progress" && (
            <button
              className="text-lg mt-auto"
              onClick={() => handleClick(task.id, "Completed")}
            >
              Mark as completed
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default TaskList;
