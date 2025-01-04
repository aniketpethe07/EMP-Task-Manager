import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Header = () => {
  const {logout} = useContext(AuthContext)
  const name = localStorage.getItem("name");
  const logoutHandler = () => {
    // e.preventDeffault();
    logout()
    // console.log(456);
    
  }
  return (
    <div className="flex items-end justify-between text-white">
      <h1 className="text-2xl">
        Hello <br />
        {name.charAt(0).toUpperCase() + name.slice(1)}
        👋🏻
      </h1>
      <button 
        className="bg-red-600 text-white px-5 py-2 rounded-full"
        onClick={logoutHandler}
      >
        Log out
      </button>
    </div>
  );
};

export default Header;
