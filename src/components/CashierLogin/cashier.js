import React from "react";
import { useNavigate } from 'react-router-dom';
import "./cahier.css"

const Cashier = () => {
    const navigate = useNavigate();
    return (
        <div className="container">
            <div className="cover">
                <text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }}>CASHIER LOGIN</text>
                <div style={{ textAlign: "left" }}>
                    <label style={{ fontSize: 18 }}>Email:</label>
                </div>
                <div className="email">
                    <input className='user-input' type='text' placeholder='Enter your name' />
                </div>
                <div style={{ textAlign: "left" }}>
                    <label style={{ fontSize: 18 }}>Password:</label>
                </div>
                <input className='user-input' type='text' placeholder='Enter your password' />
                <div className='login-button'>
                    <p style={{ fontSize: 18, fontWeight: "bold" }} onClick={() => navigate('/cashierdashboard')}>LOGIN</p>
                </div>
            </div>
        </div>

    )
}
export default Cashier;