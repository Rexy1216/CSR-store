import React from 'react';
import { useState } from 'react';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { AiOutlineCloseCircle } from 'react-icons/ai';


const Pay = () => {

    const [isVisible, setIsVisible] = useState(true)
    const handleCancel = () => {
        window.location = '/dashboard';
    }
    return (
        <>
            <div className='addbg' style={{ animationName: isVisible ? 'modal-active' : 'modal-inactive' }}>
                <div className='additemcontainer'>
                    <div className='top-bars'>
                        <h1 style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 160, paddingTop: 5, paddingBottom: 5 }}>Payment</h1>
                        <div style={{ paddingRight: 7, paddingTop: 3, cursor: 'pointer' }} onClick={handleCancel}>
                            <AiOutlineCloseCircle size={20} />
                        </div>
                    </div>
                    <div className='check' style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
                        <BsFillCheckCircleFill size={60} color='#3BE23B' />
                    </div>
                    <div className='check' style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
                        <h3>Purchase have been saved!</h3>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Pay;