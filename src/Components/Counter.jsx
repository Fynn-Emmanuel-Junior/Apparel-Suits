import React from 'react';
import { useState } from 'react'

function Counter(props) {

    const [increment,setIncrement] = useState(1);
    
    const Add = () => {
        setIncrement(increment + 1);
    }

    const Substract = () => {
        if(increment === 1) {
            setIncrement(increment)
        } else {
            setIncrement(increment-1)
        }
       
    }

    return (
        <div>
            <div style={{width: "50%"}}>
                <div style={{display: "flex", justifyContent: "space-between", border: "1px solid #557571",width: "40%"}}>
                    <div onClick={Substract} style={{fontSize: "25px", cursor: "pointer",marginLeft:"10px"}}>-</div>
                    <div  style={{fontSize: "25px"}}>{increment}</div>
                    <div onClick={Add}  style={{fontSize: "25px", cursor: "pointer",marginRight: "10px"}}>+</div>
                </div>

            </div>
        </div>
    );
}

export default Counter;