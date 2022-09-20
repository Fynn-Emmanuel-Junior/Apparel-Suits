import React from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import {useState} from 'react'

function Dropdown({selected, setSelected}) {

    const [isActive, setisActive] = useState(false);
    const options = ['Small','Medium','Large'];

    return (
        <div className='dropdown'>
            <div style={{border: "1px solid #557571"}}>
                <div style={{display: "flex", justifyContent: "space-between", cursor: "pointer",padding: "10px"}} onClick={ e => setisActive(!isActive)}>
                    <div className='dropdown-btn'>Size : {selected}</div>
                    <div><MdKeyboardArrowDown /></div>
                </div>
            </div>
            {
                isActive && (
                <div className='dropdown-content'>
                    {
                        options.map((option) => (
                            <div className='dropdown-item' onClick={e =>{ 
                                setSelected(option)
                                setisActive(false)
                            }}>{option}</div>

                        ))
                    }
                </div>
                )
            }
            
            
        </div>
    );
}

export default Dropdown;