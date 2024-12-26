import { React, useContext, useState } from "react";
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setLoggedIn } = useContext(AuthContext)

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/login", {
        email,
        password,
      });
  
      if (response.status === 201) {
        const { name, role } = response.data.user;
        localStorage.setItem("loggedIn", JSON.stringify(true));
        localStorage.setItem("name", name);
        localStorage.setItem("role", role);
        setLoggedIn(true);
  
        navigate(role === "ADMIN" ? "/admin" : "/employee");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
  

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 border-emerald-600 p-14 rounded-xl">
        <form
          className="flex flex-col items-center justify-center"
          onSubmit={submitHandler}
        >
          <h2 className="text-3xl mb-10 text-emerald-600">Login</h2>
          <input
            className="outline-none bg-transparent border-2  border-emerald-600 text-xl px-3 py-5 rounded-full placeholder:text-gray-400"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            style={{
              WebkitTextFillColor: "inherit", // Prevent autofill text from overriding color
            }}
            required
          />
          <input
            className="outline-none bg-transparent border-2  border-emerald-600 text-xl px-3 py-5 rounded-full placeholder:text-gray-400 mt-3"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          />
          <button
            className="text-white bg-emerald-600 text-xl px-5 py-2 rounded-full mt-14"
            type="submit"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
