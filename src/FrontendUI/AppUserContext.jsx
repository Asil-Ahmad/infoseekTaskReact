import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const AppUserContext = () => {
  const { isUserLogin, isLogin, username } = useContext(UserContext);
  return (
    <div className='flex flex-col justify-center items-center bg-black min-h-screen w-full text-white '>
      <h1 className='text-4xl font-semibold mb-10'>useContext Hook</h1>
      <p className='text-center w-1/2'>
        Is User Logged In :{" "}
        <span className={`rounded-xl ${isUserLogin ? "bg-green-600" : ""}`}>
          {isUserLogin ? `${username}` : " No"}
        </span>
      </p>

      <button
        className={`${
          isUserLogin ? "bg-red-600" : "bg-blue-500"
        } px-4 py-1 rounded-xl mt-5`}
        onClick={isLogin}
      >
        {isUserLogin ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default AppUserContext;
