import React from "react";
import { useState } from "react";
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti'
import { IoIosArrowForward } from 'react-icons/io'
import { IoChevronBackCircleOutline } from 'react-icons/io5';

import './sales.css'
import OrderDetails from "../OrderDetails/orderdetails";

const SalesReport = () => {

    const [records, setRecords] = useState([
        {
            date: 'February 20, 2023',
            orders: 25,
            total: 2450.00,
            order_details: [
                [
                    {
                        itemName: 'Kaldereta'
                    },
                    {
                        itemName: 'Kaldereta'
                    },
                    {
                        itemName: 'Kaldereta'
                    }
                ],
                [
                    {
                        itemName: 'Kaldereta'
                    },
                    {
                        itemName: 'Kaldereta'
                    },
                    {
                        itemName: 'Kaldereta'
                    }
                ],
            ]
        },
        {
            date: 'February 20, 2023',
            orders: 25,
            total: 2450.00
        },
        {
            date: 'February 20, 2023',
            orders: 25,
            total: 2450.00
        },
        {
            date: 'February 20, 2023',
            orders: 25,
            total: 2450.00
        },
        {
            date: 'February 20, 2023',
            orders: 25,
            total: 2450.00
        },
        {
            date: 'February 20, 2023',
            orders: 25,
            total: 2450.00
        },
        {
            date: 'February 20, 2023',
            orders: 25,
            total: 2450.00
        },
        {
            date: 'February 20, 2023',
            orders: 25,
            total: 2450.00
        },
        {
            date: 'February 20, 2023',
            orders: 25,
            total: 2450.00
        },
        {
            date: 'February 20, 2023',
            orders: 25,
            total: 2450.00
        },
        {
            date: 'February 20, 2023',
            orders: 25,
            total: 2450.00
        },
        {
            date: 'February 20, 2023',
            orders: 25,
            total: 2450.00
        },
        {
            date: 'February 20, 2023',
            orders: 25,
            total: 2450.00
        }
    ])
    const [selectedRecord, setSelectedRecord] = useState()
    const [expandView, setExpandView] = useState(false)

    if (expandView) {
        document.body.classList.add('active-modal')
    }
    else {
        document.body.classList.remove('active-modal')
    }

    return (
        <>
            {expandView && <OrderDetails setExpandView={setExpandView} selectedRecord={selectedRecord} />}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ paddingLeft: 20, paddingRight: 20, width: 1880 }}>
                    <div className="topsales">
                        <IoChevronBackCircleOutline size={30} />
                        <p style={{ fontSize: 30, fontWeight: "bold" }}>SALES REPORT</p>
                        <div className="ad">
                            <p style={{ fontSize: 13, color: "white" }}>ADMIN</p>
                        </div>
                    </div>
                    <ul className='record-container'>
                        {records.map((item, index) => {
                            return (
                                <li key={index} className='single-record'>
                                    <p className='item-text'>{item.date}</p>
                                    <p className='item-text item-text2'>{item.orders + ' Orders'}</p>
                                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: 140, justifyContent: 'space-between' }}>
                                        <p className='item-text' style={{ fontWeight: 900 }}>{'₱' + item.total.toFixed(2)}</p>
                                        <IoIosArrowForward className='expand-icon' size={23} style={{ cursor: 'pointer' }} onClick={() => {
                                            setExpandView(true)
                                            setSelectedRecord(item)
                                        }} />
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
}
export default SalesReport;