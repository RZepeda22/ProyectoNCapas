import { createContext, useContext } from "react";

const UserContext = createContext({
    userName: '',
    setUserName: () => {},
  });

export default UserContext;