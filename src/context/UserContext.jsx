import { createContext, useState } from "react";

export const UserContext = createContext();

const UserAuthProvider = ({ children }) => {
  const [isUserLogin, setIsUserLogin] = useState(false);
  const username = "Asil";

  const isLogin = () => {
    setIsUserLogin(!isUserLogin);
    if (isUserLogin === true) {
      console.log("Logged Out");
    } else {
      console.log("Logged In");
    }
  };

  const contextValue = {
    isUserLogin,
    isLogin,
    username,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
export default UserAuthProvider;
