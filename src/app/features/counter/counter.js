import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "./counterSlice";

export function Counter() {
    const dispatch = useDispatch();
    const count = useSelector(state => state.counter.value)
    
    return (
        <div>
            <p>Counter: {count}</p>
            <button
                onClick={() => dispatch(increment())}
            >
                +
            </button>
            <button
                onClick={() => dispatch(decrement())}
            >
                -
            </button>
            <button
                onClick={() => dispatch(incrementByAmount(5))}
            >
                Increment By Amount 5
            </button>
        </div>
    )
}