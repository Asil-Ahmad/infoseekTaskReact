import React from "react";
import Button from "../constant/Button";

const Props = (props) => {
  return (
    <div className=''>
      <div className='flex justify-center flex-1 flex-col items-center gap-4 mt-5 '>
        <h1 className='text-gray-200 text-5xl'>{props.name}</h1>
        <Button bgColor={props.color} value='First' />
        <div
          className='size-36 transition-all duration-700 delay-300 ease-in rounded-2xl bg-white'
          style={{
            background: `${props.color}`,
            borderRadius: `${props.borderRadius}px`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Props;
