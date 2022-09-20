import React from 'react';
import { useState } from 'react'

function Counter({setSize}) {

    const [increment,setIncrement] = useState(1);
    

    if(increment === 1) {
        setSize(increment);
    } else {
        setSize(increment);
    }

    const Add = () => {
        setIncrement(increment + 1);
        const size = increment + 1;
        setSize(size);
        
    }

    const Substract = () => {
        if(increment === 1) {
            setIncrement(increment)
            const size = increment;
            setSize(size)
        } else {
            setIncrement(increment-1)
            const size = increment;
            setSize(size)
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