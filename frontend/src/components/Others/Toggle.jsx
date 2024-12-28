import React from 'react';

const Toggle = ({ isChecked, handleChange }) => {
  return (
    <div className="flex justify-center items-center mt-4">
      {/* "Off" Label */}
      <span className="text-white mr-2">Create a task</span>

      <div className="relative inline-block w-16 h-8">
        <input
          checked={isChecked} // Use isChecked prop to control the checkbox
          id="switch-component-1"
          type="checkbox"
          className="peer appearance-none w-full h-full bg-slate-500 rounded-full cursor-pointer transition-colors duration-300"
          onChange={handleChange} // Attach the onChange handler
        />
        <label
          htmlFor="switch-component-1"
          className="absolute top-0 left-0 w-8 h-8 bg-slate-800 rounded-full shadow-sm transition-transform duration-300 peer-checked:translate-x-full peer-checked:border-slate-800 cursor-pointer"
        ></label>
      </div>

      {/* "On" Label */}
      <span className="text-white ml-2">View all tasks</span>
    </div>
  );
};

export default Toggle;
