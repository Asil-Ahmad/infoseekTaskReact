import React, { Component } from "react";
import Greetings from "./Greetings";

class ClassComponent extends Component {
  state = {
    username: "",
    email: "",
    password: "",
  };

  handleSubmit = () => {
    let data = this.state;
    console.log(
      "Username:",
      data.username,
      "Email:",
      data.email,
      "Password:",
      data.password
    );
  };

  handleChange = (e) => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
    // console.log(this.state.username);
  };
  render() {
    return (
      <div className='flex items-center justify-center flex-col h-[100vh] bg-center bg-cover  '>
        <form className='flex flex-col p-5 backdrop-blur-sm bg-black/50 rounded-lg text-white gap-5'>
          <h1 className='text-4xl font-[600] tracking-widest text-center'>Form</h1>
          <input
            type='text'
            name='username'
            id='username'
            className=' p-1 px-5 rounded-lg text-black border-none outline-none '
            placeholder='Name...'
            value={this.state.username}
            onChange={this.handleChange}
          />
          <input
            type='email'
            name='email'
            id='email'
            className=' p-1 px-5 rounded-lg text-black border-none outline-none '
            placeholder='abc@email.com'
            value={this.state.email}
            onChange={this.handleChange}
          />
          <input
            type='password'
            name='password'
            id='password'
            className=' p-1 px-5 rounded-lg text-black border-none outline-none '
            placeholder='Enter password...'
            value={this.state.password}
            onChange={this.handleChange}
          />
          <input
            className='w-full text-white bg-blue-500 hover:bg-blue-700 transition-all duration-150 cursor-pointer p-2 rounded-xl'
            type='button'
            value='Submit'
            onClick={this.handleSubmit}
          />
        </form>
      </div>
    );
  }
}

export default ClassComponent;
