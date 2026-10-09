import react from "react";
import UserContext from "./userContext";

// Create a context provider component
const UserContextProvider =  ({ children }) =>{
    // State to hold the user data
    const [user , SetUser] = react.useState(null)

    return (
        // Provide the context value to child components
        <UserContext.Provider value = {{user , SetUser}}>
        {children}
        </UserContext.Provider>
    )
}


export default UserContextProvider;