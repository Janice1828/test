import React, { useReducer } from 'react'

const UseReducer = () => {
    const reducer = (state, action) => {
        if (action.type == "INCREMENT") {
            return state + 1;
        }
        else if (action.type = "DECREMENT") {
            return state - 1;
        }
    }
    const [count, dispatch] = useReducer(reducer, 0);
    return (
        <div>
            <p>{count}</p>
            <button onClick={() => { dispatch({ type: "INCREMENT" }) }}>INCREMENT</button><br />
            <button onClick={() => { dispatch({ type: "DECREMENT" }) }}>DECREMENT</button>
        </div>
    )
}

export default UseReducer