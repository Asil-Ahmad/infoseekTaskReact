import React, { useState } from "react";
import Button from "../constant/Button";

const Login = () => {
  const [input, setInput] = useState({ name: "", email: "", password: "" });

  const { name, email, password } = input;
  const handleLogin = () => {
    console.log(input);
  };

  const onInputChange = (e) => {
    //we are destructuring e.target.value and e.target.name below....
    const { name, value } = e.target;

    setInput((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div className='flex items-center justify-center flex-col h-[100vh] bg-[url("./assets/images/backbg.jpg")] bg-center bg-cover  '>
      <h1 className='text-4xl font-semibold tracking-wide p-2'>Login</h1>
      <form
        action=''
        className='flex flex-col p-10 backdrop-blur-sm bg-black/50 rounded-lg text-white gap-2'
      >
        <label>Name</label>
        <input
          type='text'
          name='name'
          className=' p-1 px-5 rounded-lg text-black border-none outline-none '
          placeholder='Enter Name...'
          value={name}
          onChange={onInputChange}
        />

        <label htmlFor='email'>E-mail</label>
        <input
          type='email'
          name='email'
          id='email'
          required
          placeholder='abc@example.com'
          value={email}
          onChange={onInputChange}
          className=' p-1 px-5 rounded-lg text-black border-none outline-none'
        />

        <label>Password</label>
        <input
          type='password'
          name='password'
          id='password'
          value={password}
          onChange={onInputChange}
          className=' p-1 px-5 rounded-lg  text-black border-none outline-none'
        />
        <label htmlFor='checkbox' className='text-sm flex items-center'>
          <input
            type='checkbox'
            name='checkbox'
            id='checkbox'
            className='mr-4 accent-blue-300'
          />
          Accept&nbsp;
          <a href='/terms&conditions' className='underline text-blue-500 '>
            <b>Terms & Condition</b>
          </a>
        </label>

        <Button value='Login' type='button' onClick={handleLogin}  />

        {/* <input
            onClick={handleSubmit}
            type='button'
            value='Submit'
            className='mt-2 bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-700'
          /> */}
      </form>
    </div>
  );
};

export default Login;
