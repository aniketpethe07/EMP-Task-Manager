import axios from "axios";
import React, { useState, useEffect } from "react";

const TaskCount = () => {

  const [pendingTasks, setPendingTasks] = useState()
  const [acceptedTasks, setAcceptedTasks] = useState()
  const [completedTasks, setCompletedTasks] = useState()
  const [failedTasks, setFailedTasks] = useState()

  useEffect(() => {
    const id = localStorage.getItem('_id')
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/tasks/taskCount/${id}`)
        // console.log(response.data);

        const tasks = response.data.tasks;

        const pendingCount = tasks.filter(task => task.status === "Pending").length;
        const acceptedCount = tasks.filter(task => task.status === "Accepted").length;
        const completedCount = tasks.filter(task => task.status === "Completed").length;
        const failedCount = tasks.filter(task => task.status === "Failed").length;

        // Update state with the counts
        setPendingTasks(pendingCount);
        setAcceptedTasks(acceptedCount);
        setCompletedTasks(completedCount);
        setFailedTasks(failedCount);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    }
    fetchData()
  })

  return (
    <div className="flex justify-between mt-10 gap-5 screen">
      <div className="h-40 w-[45%] p-10 bg-blue-400 rounded-xl">
        <h2 className="text-3xl font-semibold mb-3">{pendingTasks}</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className="h-40 w-[45%] p-10 bg-green-400 rounded-xl">
        <h2 className="text-3xl font-semibold mb-3">{completedTasks}</h2>
        <h3 className="text-xl font-medium">Completed Task</h3>
      </div>
      <div className="h-40 w-[45%] p-10 bg-yellow-400 rounded-xl">
        <h2 className="text-3xl font-semibold mb-3">{acceptedTasks}</h2>
        <h3 className="text-xl font-medium">Accepted Task</h3>
      </div>
      <div className="h-40 w-[45%] p-10 bg-red-400 rounded-xl">
        <h2 className="text-3xl font-semibold mb-3">{failedTasks}</h2>
        <h3 className="text-xl font-medium">Failed Task</h3>
      </div>
    </div>
  );
};

export default TaskCount;
