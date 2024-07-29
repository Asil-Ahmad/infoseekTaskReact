import React, { useState, useEffect } from "react";

import ClassComponent from "./Class/ClassComponents";

const App2 = () => {
  const [show, setShow] = useState(true);
  return (
    <div>
      <button onClick={() => setShow(!show)}>{show ? "Open" : "Close"}</button>
      {show && <ClassComponent />}
    </div>
  );
};

export default App2;
