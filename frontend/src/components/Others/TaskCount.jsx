import axios from "axios";
import React, { useState, useEffect } from "react";

const TaskCount = ({ updateTaskType }) => {
  const [allTasks, setAllTasks] = useState();
  const [pendingTasks, setPendingTasks] = useState();
  const [acceptedTasks, setAcceptedTasks] = useState();
  const [completedTasks, setCompletedTasks] = useState();
  const [failedTasks, setFailedTasks] = useState();

  useEffect(() => {
    const id = localStorage.getItem("_id");
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/tasks/taskCount/${id}`);
        const tasks = response.data.tasks;

        setAllTasks(tasks.filter((task) => task).length);
        setPendingTasks(tasks.filter((task) => task.status === "Pending").length);
        setAcceptedTasks(tasks.filter((task) => task.status === "In-Progress").length);
        setCompletedTasks(tasks.filter((task) => task.status === "Completed").length);
        setFailedTasks(tasks.filter((task) => task.status === "Failed").length);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };
    fetchData();

    // Add a global click event listener
    // const handleOutsideClick = (event) => {
    //   const taskCountElement = document.querySelector(".screen");
    //   if (!taskCountElement.contains(event.target)) {
    //     updateTaskType("All");
    //   }
    // };
    // document.addEventListener("click", handleOutsideClick);

    // // Cleanup the event listener on component unmount
    // return () => {
    //   document.removeEventListener("click", handleOutsideClick);
    // };
  }, []);

  const handleClick = (taskType) => {
    updateTaskType(taskType);
  };

  return (
    <div className="flex m-10 gap-5 screen">
      <div
        className="h-40 w-[45%] p-10 bg-blue-400 rounded-xl cursor-pointer"
        onClick={() => handleClick("Pending")}
      >
        <h2 className="text-3xl font-semibold mb-3">{pendingTasks}</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div
        className="h-40 w-[45%] p-10 bg-yellow-400 rounded-xl cursor-pointer"
        onClick={() => handleClick("In-Progress")}
      >
        <h2 className="text-3xl font-semibold mb-3">{acceptedTasks}</h2>
        <h3 className="text-xl font-medium">Accepted Task</h3>
      </div>
      <div
        className="h-40 w-[45%] p-10 bg-green-400 rounded-xl cursor-pointer"
        onClick={() => handleClick("Completed")}
      >
        <h2 className="text-3xl font-semibold mb-3">{completedTasks}</h2>
        <h3 className="text-xl font-medium">Completed Task</h3>
      </div>
      <div
        className="h-40 w-[45%] p-10 bg-red-400 rounded-xl cursor-pointer"
        onClick={() => handleClick("Failed")}
      >
        <h2 className="text-3xl font-semibold mb-3">{failedTasks}</h2>
        <h3 className="text-xl font-medium">Failed Task</h3>
      </div>
      <div
        className="h-40 w-[45%] p-10 bg-purple-400 rounded-xl cursor-pointer"
        onClick={() => handleClick("all")}
      >
        <h2 className="text-3xl font-semibold mb-3">{allTasks}</h2>
        <h3 className="text-xl font-medium">All Task</h3>
      </div>
    </div>
  );
};

export default TaskCount;
