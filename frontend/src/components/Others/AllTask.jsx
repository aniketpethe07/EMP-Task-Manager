import { React, useState, useEffect } from "react";
import axios from "axios";

const AllTask = () => {
  const [tasks, setTasks] = useState([]);

    const colorArray = {
        1: "green",
        2: "red",
        3: "yellow",
        4: "blue",
    }

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get("/api/tasks/allTask");
        setTasks(response.data.tasks);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };
    fetchTasks();
  }, []);

  return (
    <div
      id="allTask"
      className="bg-zinc-800 p-5 mt-5 rounded-xl h-48 overflow-auto"
    >
      <div className={`flex justify-between m-2 px-4 py-2 bg-gray-500 rounded-md`}>
        <h2>Assigned To</h2>
        <h3>Title</h3>
        <h5>Status</h5>
      </div>
      {tasks.map((task) => (
        <div
          key={task._id} 
          className={`flex justify-between m-2 px-4 py-2 bg-${colorArray[Math.floor(Math.random()*4)+1]}-400 rounded-md`}
        >
          <h2>{task.assignedTo.name}</h2>
          <h3>{task.title}</h3> 
          <h5>{task.status}</h5> 
        </div>
      ))}
    </div>
  );
};

export default AllTask;
