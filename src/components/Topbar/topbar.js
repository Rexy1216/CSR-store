import React, { cloneElement } from "react";
import { IoMenuOutline } from "react-icons/io5";
import './tpbr.css'

const Topbar = () => {
    return (
        <div className="topbar">
            <IoMenuOutline size={33} color='black' style={{ cursor: 'pointer', marginRight: 10 }} />
            <p style={{ fontSize: 23 }}>MAIN DASHBOARD</p>
            <div className="ad">
                <p style={{ fontSize: 13, textAlign: "center", marginTop: 5, color: "white" }}>ADMIN</p>
            </div>
        </div>
    )
}

export default Topbar;