import { React, useState, useEffect } from "react";
import axios, { all } from "axios";

const AllTask = () => {
  const [tasks, setTasks] = useState([]);
  const [users, setUsers] = useState([]);
  const [tasksOf, setTasksOf] = useState("all");

  const colorArray = {
    Pending: "bg-yellow-400",
    "In-Progress": "bg-blue-400",
    Completed: "bg-green-400",
    Failed: "bg-red-400 line-through",
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("/api/users/employees");
        // console.log(response.data.users);
        setUsers(response.data.users);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  const handleChange = (e) => {
    setTasksOf(e.target.value);
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

  // Filter tasks based on selected user or show all if 'all' is selected
  const filteredTasks =
    tasksOf === "all"
      ? tasks
      : tasks.filter((task) => task.assignedTo === tasksOf);

  return (
    <div className="bg-zinc-800 p-5 mt-5 rounded-xl h-[80%]">
      <select
        className="text-sm py-1 px-2 w-1/4 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 text-gray-400"
        onChange={handleChange}
        value={tasksOf}
      >
        <option
          defaultValue={"all"}
          value="all"
          className="text-sm py-1 px-2 w-4/5 bg-zinc-800"
        >
          All
        </option>
        {users.map((user) => (
          <option
            key={user.id}
            value={user.id}
            className="text-sm py-1 px-2 w-4/5 bg-zinc-800"
          >
            {user.name}
          </option>
        ))}
      </select>
      <div className="bg-gray-500 mb-2 py-2 px-4 flex justify-between rounded-md">
        <h2 className="text-lg font-medium w-1/6">Assigned To</h2>
        <h3 className="text-lg font-medium w-1/6">Title</h3>
        <h5 className="text-lg font-medium w-1/6">Status</h5>
        <h5 className="text-lg font-medium w-1/6">Assigned Date</h5>
      </div>
      <div id="allTask" className="h-[80%] overflow-auto">
        {filteredTasks.map((task) => (
          <div
            key={task.id}
            className={`flex justify-between m-1 px-4 py-2 ${
              colorArray[task.status] || "bg-gray-400"
            } rounded-md`}
          >
            <h2 className="text-lg font-medium w-1/6">{task.assignedToName}</h2>
            <h3 className="text-lg font-medium w-1/6">{task.title}</h3>
            <h5 className="text-lg font-medium w-1/6">{task.status}</h5>
            <h5 className="text-lg font-medium w-1/6">
              {task.assigned_date.slice(0, 10)}
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
