import { createContext, useState,useEffect } from "react";
import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../Utils/Firebase/firebase.util";

export const UserContext = createContext({
  currUser: null,
  setCurrUser: ()=>null,
});

export const UserProvider = ({children}) =>{
    const[currUser,setCurrUser] = useState(false);
    const value = {currUser,setCurrUser};

    useEffect(() => {
      const unsubscribe = onAuthStateChangedListener((user) => {
        if (user) {
          console.log(user)
          createUserDocumentFromAuth(user);
        }
        setCurrUser(user);
      });
  
      return unsubscribe;
    }, []);

    return <UserContext.Provider value={value}> {children} </UserContext.Provider>
}

