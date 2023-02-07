import React, { useState } from "react";
import "./counter.css";

const Counter = () =>{
    const [count, setCount]=useState(0);
    const increment = () =>{
        setCount((prev)=>{return (prev+1)});
    }
    const decrement = () =>{
        setCount((prev)=>{return (prev==0?prev=0:prev-1)});
    }
    
    return (
        <div className="main_div">
            <div className="center_div">
            <div className="heading">Counter</div>
            <div className="body">
                <div className="count">{count}</div>
                    <div className="btn_groups">
                        <button onClick={increment}>Increment</button>
                        <button onClick={decrement}>Decrement</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Counter;