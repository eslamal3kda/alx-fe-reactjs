import React, { useState } from "react";

export default function Counter() {
    const [counter, setCounter] = useState(0);
    return (
        <div>
            <p>Current Count: {counter}</p>
            <button onClick={() => setCounter((count) => count + 1)}>Increment</button>
            <button onClick={() => setCounter((count) => count - 1)}>Decrement</button>
            <button onClick={() => setCounter(0)}>Reset</button>
        </div>
    );
}
