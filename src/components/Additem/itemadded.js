import React from 'react';
import { useState } from 'react';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import "./additem.css"

const Itemadded = () => {
    
    return (
        <>
            
            <div className='addbg' style={{ animationName: isVisible ? 'modal-active' : 'modal-inactive' }}>
                <div className='additemcontainer'>
                    <BsFillCheckCircleFill  />

                </div>
            </div>
        </>
    );
}

export default Itemadded;