/**
 * Hook useReducer
 */

import { useReducer } from "react"
import reducer from "./reducer";

const initialState = {
    name: "Srikanth",
    email: "srikanthkuriyala@outlook.in",
    age: 31,
    height: "5.5ft"
}

function HookUseReducer() {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <p>Name: {state.name}</p>
            <p>Email: {state.email}</p>
            <p>Age: {state.age}</p>
            <p>Height: {state.height}</p>
            <button onClick={() => dispatch({type: "CHANGE_NAME", payload: "SRK"})}>Change Name</button>
            <button onClick={() => dispatch({type: "CHANGE_AGE", payload: state.age + 1})}>Increase age by 1</button>
        </div>
    )
}
export default HookUseReducer