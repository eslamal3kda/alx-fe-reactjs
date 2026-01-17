import React, { useState } from "react";

export default function Counter() {
    const [counter, setCounter] = useState(0);
    return (
        <div>
            <p>Current Count: {counter}</p>
            <button onClick={() => setCounter((count) => count + 1)}>increment</button>
            <button onClick={() => setCounter((count) => count - 1)}>decrement</button>
            <button onClick={() => setCounter(0)}>reset</button>
        </div>
    );
}
