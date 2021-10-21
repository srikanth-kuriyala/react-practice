/**
 * Hook useContext
 * Create the context and wrap the child component with context provider.
 * Import the context in child compoenents and use the context data
 */
import React, { createContext, useState } from "react";
import Child from "./child";

export const userContext = createContext(null);

function HookUseContext() {
    var [user, setUser] = useState({
        name: "Srikanth Kuriyala",
        age: 31
    });

    return (
        <userContext.Provider value={user}>
            <Child />
            <button onClick={() => setUser({name: "SRK", age: 33})}>Change details</button>
        </userContext.Provider>
    )
}
export default HookUseContext