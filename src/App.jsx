//this is for funtional components
import React, { useState } from "react";
import Register from "./components/Register";
import Login from "./components/Login";
import Props from "./components/Props";
import Button from "./constant/Button";

const App = () => {
  const [title, setTitle] = useState("");
  const [bgColor, setBgColor] = useState("");
  const [borderRadius, setBorderRadius] = useState("");

  const reset = () => {
    setTitle("");
    setBgColor("");
    setBorderRadius("");
  };
  return (
    <div className='bg-black min-h-screen w-full m-auto text-center content-center'>
      <div className='flex w-full flex-col items-center gap-2'>
        <input
          className='border-none p-2 w-[20%] rounded-xl outline-none hover:scale-105 transition-all ease-in '
          placeholder='Enter your title....'
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          className='border-none p-2 w-[10%] rounded-xl outline-none hover:scale-105 transition-all ease-in '
          placeholder='Color'
          type='text'
          value={bgColor}
          onChange={(e) => setBgColor(e.target.value)}
        />

        <input
          className='border-none p-2 w-[10%] rounded-xl outline-none hover:scale-105 transition-all ease-in '
          placeholder='Border Radius'
          type='number'
          value={borderRadius}
          onChange={(e) => setBorderRadius(e.target.value)}
        />
        <Button value='Reset' bgColor='red' onClick={reset} />
      </div>
      <Props
        name={title ? title : "Your Title Here..."}
        color={bgColor}
        borderRadius={borderRadius}
      />
    </div>
  );
};

export default App;
