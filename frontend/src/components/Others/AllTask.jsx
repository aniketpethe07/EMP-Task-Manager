import { React, useState, useEffect } from "react";
import axios from "axios";

const AllTask = () => {
  const [tasks, setTasks] = useState([]);

  const colorArray = {
    1: "green",
    2: "red",
    3: "yellow",
    4: "blue",
  };

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get("/api/tasks/allTask");
        // console.log(response.data.tasks);
        setTasks(response.data.tasks);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };
    fetchTasks();
  }, []);

  return (
    <div className="bg-zinc-800 p-5 mt-5 rounded-xl h-[80%]">
  <div className="bg-gray-500 mb-2 py-2 px-4 flex justify-between rounded-md">
    <h2 className="text-lg font-medium w-1/6">Assigned To</h2>
    <h3 className="text-lg font-medium w-1/6">Title</h3>
    <h5 className="text-lg font-medium w-1/6">Status</h5>
  </div>
  <div id="allTask" className="h-[90%] overflow-auto">
    {tasks.map((task) => (
      <div
        key={task.id}
        className={`flex justify-between m-1 px-4 py-2 bg-${colorArray[Math.floor(Math.random() * Object.keys(colorArray).length)+1]}-400 rounded-md`}
      >
        <h2 className="text-lg font-medium w-1/6">{task.assignedTo}</h2>
        <h3 className="text-lg font-medium w-1/6">{task.title}</h3>
        <h5 className="text-lg font-medium w-1/6">{task.status}</h5>
      </div>
    ))}
  </div>
</div>

  );
};

export default AllTask;
