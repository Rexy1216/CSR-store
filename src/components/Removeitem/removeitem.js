import React from 'react';
import { useState } from 'react';
import "./removeitem.css"

const Removeitem = () => {

    const [isVisible, setIsVisible] = useState(true)
    const handleCancel = () => {
        window.location = '/dashboard';
    }
    return (
        <div className='addbg' style={{ animationName: isVisible ? 'modal-active' : 'modal-inactive' }}>
            <div className='additemcontainer'>
                <div className='top-bars'>
                    <h1 style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 160, paddingTop: 5, paddingBottom: 5 }}>Add item</h1>
                    <button style={{ border: 0, backgroundColor: '#E7E7E7' }}>X</button>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginTop: 20 }}>
                    <p style={{ marginLeft: 60, marginTop: 25, fontSize: 18 }}>Product Name:</p>
                    <input style={{ border: 0, height: 21, width: 160, fontSize: 18, marginTop: 25, marginLeft: 10, borderRadius: 5, outlineStyle: 'none',paddingLeft: 5}} type='text' />
                </div>
                <div style={{ flexDirection: 'row', alignItems: 'center', marginTop: 30, marginLeft: 110 }}>
                    <button style={{ cursor: 'pointer', marginRight: 30, width: 85, fontSize: 18, borderRadius: 7 }}>Add Item</button>
                    <button style={{ cursor: 'pointer', width: 85, fontSize: 18, borderRadius: 7 }} onClick={handleCancel}>Cancel</button>
                </div>

            </div>
        </div>
    );
}

export default Removeitem;