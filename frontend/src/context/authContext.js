import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext()

export const AuthContextProvider = ({children})=>{

const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('user')) || null);

const login = ()=>{
    //TO DO
    setCurrentUser({id: 1, name: "jonh doe", profilePic: 'https://images.pexels.com/photos/7550294/pexels-photo-7550294.jpeg'})
}

useEffect(()=>{
    localStorage.setItem("user", JSON.stringify(currentUser))
}, [currentUser])

return (
    <AuthContext.Provider value={{currentUser, login}}>{children}</AuthContext.Provider>
)

}