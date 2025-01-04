import { React, useEffect, useState } from "react";
import axios from "axios";
import Toast from "./Toast";

const CreateTask = () => {
  const [toast, setToast] = useState(null);
  const [users, setUsers] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [assignedDate, setAssignedDate] = useState("");
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [assignedBy, setAssignedBy] = useState("");

  useEffect(() => {
    const storedId = localStorage.getItem("_id");
    if (storedId) {
      setAssignedBy(storedId);
    } else {
      setToast({ message: "User ID not found in localStorage", type: "error" });
    }
  }, []);

  useEffect(() => {
    if (assignedBy) {
      const fetchUsers = async () => {
        try {
          const response = await axios.get("/api/users/employees");
          // console.log(response.data.users);
          setUsers(response.data.users);
        } catch (error) {
          setToast({ message: "Error fetching users", type: "error" });
          console.error("Error fetching users:", error);
        }
      };
      fetchUsers();
    }
  }, [assignedBy]);

  const handleAssignToChange = (e) => {
    setAssignedTo(e.target.value);
  };

  const handlePriorityChange = (e) => {
    setPriority(e.target.value);
  };

  const handleCreatedTask = async (e) => {
    e.preventDefault();

    const taskData = {
      title,
      assignedDate,
      category,
      description,
      assignedTo,
      assignedBy,
      priority
    };

    try {
      const response = await axios.post("/api/tasks/createTask", taskData);
      if (response.status === 201) {
        setToast({ message: "Task Created Successfully", type: "success" });
        // Clear input fields
        setTitle("");
        setAssignedDate("");
        setCategory("");
        setDescription("");
        setAssignedTo("");
      }
    } catch (error) {
      setToast({ message: "Error creating task", type: "error" });
      console.error("Error creating task:", error);
    }
  };

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        setToast(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [toast]);

  return (
    <div className="bg-zinc-800 mt-10 p-10 rounded-xl">
      {toast && <Toast message={toast.message} type={toast.type} />}
      <form
        className="flex flex-wrap w-full items-start justify-between"
        onSubmit={handleCreatedTask}
      >
        <div className="w-1/2">
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
            <input
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 text-gray-400"
              type="text"
              placeholder="Make a UI design"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Assign a date</h3>
            <input
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 text-gray-400"
              type="date"
              value={assignedDate}
              onChange={(e) => setAssignedDate(e.target.value)}
              min={new Date().toISOString().split("T")[0]} 
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Assign to</h3>
            <select
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 text-gray-400"
              onChange={handleAssignToChange}
              value={assignedTo}
            >
              <option disabled value="">
                Select employee
              </option>
              {users.map((user) => (
                <option
                  key={user.id}
                  value={user.id}
                  className="text-sm py-1 px-2 w-4/5 bg-zinc-800 text-gray-400"
                >
                  {user.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
            <input
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 text-gray-400"
              type="text"
              placeholder="Design, Dev, etc."
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
        </div>

        <div className="w-2/5 flex flex-col items-start">
            <h3 className="text-sm text-gray-300 mb-0.5">Priority</h3>
            <select
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 text-gray-400"
              onChange={handlePriorityChange}
              value={priority}
            >
              <option disabled value="">
                Select Priority
              </option>
              <option
                  value={"High"}
                  className="text-sm py-1 px-2 w-4/5 bg-zinc-800 text-gray-400"
                >
                  High
              </option>
              <option
                  value={"Medium"}
                  className="text-sm py-1 px-2 w-4/5 bg-zinc-800 text-gray-400"
                >
                  Medium
              </option>
              <option
                  value={"Low"}
                  className="text-sm py-1 px-2 w-4/5 bg-zinc-800 text-gray-400"
                >
                  Low
              </option>
              
            </select>
            <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
            <textarea
              className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400 text-gray-400"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">
              Create Task
            </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
