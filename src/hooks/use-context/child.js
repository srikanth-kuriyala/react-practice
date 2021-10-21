import React, { useContext } from "react"
import { userContext } from "./parent";

function Child() {
    const contextData = useContext(userContext);
    return (
        <div>
            <p>{contextData.name}</p>
            <p>{contextData.age}</p>
        </div>
    )
}
export default Child;