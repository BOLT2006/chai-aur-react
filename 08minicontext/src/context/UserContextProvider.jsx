import react from "react";
import UserContext from "./userContext";

// Create a context provider component
const UserContextProvider =  ({ children }) =>{
    // State to hold the user data
    const [user , setUser] = react.useState(null)

    return (
        // Provide the context value to child components
        <UserContext.Provider value = {{user , setUser}}>
        {children}
        </UserContext.Provider>
    )
}


export default UserContextProvider;