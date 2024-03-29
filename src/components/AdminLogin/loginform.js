import React from "react";
import { useNavigate } from 'react-router-dom';
import "./loginform.css"

const Loginform = () => {
    const navigate = useNavigate();
    return (
        
        <div className="container">
            <div className="cover">
                <text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }}>ADMIN LOGIN</text>
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
                    <p style={{ fontSize: 18, fontWeight: "bold" }} onClick={() => navigate('/dashboard')}>LOGIN</p>
                </div>
            </div>
        </div>
    )
}
export default Loginform;