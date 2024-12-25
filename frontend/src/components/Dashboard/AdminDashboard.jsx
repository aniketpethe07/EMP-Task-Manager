import React from "react";
import Header from "../Others/Header";
import CreateTask from "../Others/CreateTask";
import AllTask from "../Others/AllTask";

const AdminDashboard = () => {
  return (
    <div className="p-6 w-full bg-zinc-900 h-screen">
      <Header/>
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default AdminDashboard;
