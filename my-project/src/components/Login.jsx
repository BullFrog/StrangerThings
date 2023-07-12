import React from 'react';
import { Link } from "react-router-dom";


const Login = () => {
  return (
    <div className="bg-black border-box">
      <div className="">
        <h1 className="text-white">Welcome to our Login Page</h1>
        <input
          type="text"
          placeholder="username"
          className="flex bg-gray-400 align-center justify-center"
        />
        <input
          type="password"
          placeholder="password"
          className="flex bg-gray-400"
        />
        <Link to={"/HomePage"} className="text-blue-500">
          Login
        </Link>
      </div>
    </div>
  );
};



export default Login;
