import React from "react";
import "./loginform.css"

const Loginform = () => {
    return (
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
                <p style={{fontSize: 18, fontWeight: "bold" }}>LOGIN</p>
            </div>
        </div>

    )
}
export default Loginform;