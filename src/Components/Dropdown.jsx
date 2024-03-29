import React from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { useState } from 'react';



const Dropdown = ({selected, setSelected,setQuantity}) => {

    const [isActive, setisActive] = useState(false);
    const Options = ['Small', 'Medium', 'Large']
    
    

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
                <div className='dropdown-content' >
                    {
                        Options.map((option) => (
                            <div className='dropdown-item' key={option.id}  onClick={e =>{ 
                                setSelected(option)
                                setisActive(false)
                                setQuantity(option);
                            }}>{"   "}{option}</div>

                        ))
                    }
                </div>
                )
            }
            
            
        </div>
    );
}

export default Dropdown;