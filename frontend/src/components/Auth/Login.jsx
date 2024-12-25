import { React, useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(email+password);
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
