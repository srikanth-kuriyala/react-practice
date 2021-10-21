/**
 * useState Hook
 */
import React, { useState } from "react";

function HookUseState() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <p>Count is {count}</p>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <button onClick={() => setCount(count - 1)}>Decrease</button>
        </div>
    )
}
export default HookUseState