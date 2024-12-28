import React, { useState } from "react";
import Header from "../Others/Header";
import CreateTask from "../Others/CreateTask";
import AllTask from "../Others/AllTask";
import Toggle from "../Others/Toggle";

const AdminDashboard = () => {
  const [isChecked, setIsChecked] = useState(false); // State to manage toggle

  // Handler to update the state when checkbox is toggled
  const handleChange = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <div className="p-6 w-full bg-zinc-900 h-screen">
      <Header />
      {isChecked ? <AllTask /> : <CreateTask /> }
      <footer className="fixed bottom-0 left-0 w-full bg-zinc-800 py-2 flex justify-center items-center">
        <Toggle isChecked={isChecked} handleChange={handleChange} />
      </footer>
    </div>
  );
};

export default AdminDashboard;
