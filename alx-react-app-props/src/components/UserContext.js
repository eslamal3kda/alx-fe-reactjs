import {createContext} from 'react'

const UserContext = createContext()

export default function UserContextProvider({children}) { 
    const userData = { name: "Jane Doe", email: "jane.doe@example.com" };
    return <UserContext.Provider value={{userData}}>{children}</UserContext.Provider>
}

export { UserContext }