//this is for funtional components
import React, { useState, useEffect } from "react";
import Register from "./components/Register";
import Login from "./components/Login";
import Props from "./components/Props";
import Button from "./constant/Button";
import Test from "./FrontendUI/Test"; //this make input borderradius
import ClassComponent from "./Class/ClassComponents"; //class component form
import AppUserContext from "./FrontendUI/AppUserContext"; //useCOntext
import ClassComponentsProps from "./Class/ClassComponentsProps";

const App = () => {
  return (
    <>
      <ClassComponentsProps />
    </>
  );
};

export default App;
