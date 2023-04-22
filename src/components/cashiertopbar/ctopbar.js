import React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { IoMenuOutline } from "react-icons/io5";
import { FaChartLine, FaUsers } from "react-icons/fa";
import { CiLogout } from "react-icons/ci"
import './ctopbar.css'

const CashierTopbar = () => {

    const navigate = useNavigate()
    const [dropDown, setDropDown] = useState(false)
    const [sm, setSm] = useState({ mo: false, cp: false })
    const leaving = () => setSm({ mo: false, cp: false, th:false })
    return (
        <div className="topbar">
            <div className="admin-button" onClick={() => {
                setDropDown((prev) => {
                    if (prev) {
                        return false
                    }
                    else {
                        return true
                    }
                })
            }}>
                <IoMenuOutline size={33} color='black' style={{ cursor: 'pointer', marginRight: 10 }} />
                {dropDown && (<div className='drop-down-admin'>
                    <div>
                        <div className='selection-div' style={{ backgroundColor: sm.mo ? '#444444' : '#FBFBFB', cursor: 'pointer' }} onMouseEnter={() => setSm({ mo: true, cp: false })} onMouseLeave={leaving} onClick={() => { navigate('/sales'); setDropDown(false); }}>
                            <FaChartLine color={sm.mo ? '#FFFFFF' : '#626262'} size={28} style={{ marginLeft: 25 }} />
                            <p style={{ color: sm.mo ? '#FFFFFF' : '#626262', fontWeight: 500, fontSize: 16, marginLeft: 20 }}>Sales Report</p>
                        </div>
                        <div className='selection-div' style={{ backgroundColor: sm.th ? '#444444' : '#FBFBFB', cursor: 'pointer' }} onMouseEnter={() => setSm({ cp: false, th: true })} onMouseLeave={leaving} onClick={() => { navigate('/'); setDropDown(false); }}>
                            <CiLogout color={sm.th ? '#FFFFFF' : '#626262'} size={28} style={{ marginLeft: 25 }} />
                            <p style={{ color: sm.th ? '#FFFFFF' : '#626262', fontWeight: 500, fontSize: 16, marginLeft: 20 }}>Log out</p>
                        </div>
                    </div>
                </div>
                )}
            </div>
            <p style={{ fontSize: 23 }}>CASHIER DASHBOARD</p>
            <div className="ad">
                <p style={{ fontSize: 13, color: "white" }}>CASHIER</p>
            </div>
        </div>
    )
}

export default CashierTopbar;