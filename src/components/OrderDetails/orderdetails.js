import './orderdetails.css'
import { IoIosArrowBack } from 'react-icons/io'
import { useState } from 'react'

const OrderDetails = ({ setExpandView, selectedRecord }) => {
    const [isVisible, setIsVisible] = useState(true)

    return (
        <div className="modal-container" style={{ animationName: isVisible ? 'modal-active' : 'modal-inactive' }}>
            <div className="expand-div" >
                <div className="top-bar-expand">
                    <p style={{ fontSize: 18, fontWeight: 600, color: '#FFFFFF' }}>February 20, 2023</p>
                    <IoIosArrowBack size={28} color={'#FFFFFF'} style={{ borderRadius: 30, cursor: 'pointer' }} onClick={() => {
                        setIsVisible(false)
                        setTimeout(() => {
                            setExpandView(false)
                        }, 200)
                    }} />
                </div>
                <ul className='record-ul'>
                    {selectedRecord.order_details.map((item, index) => {
                        return (
                            <li key={index} className='record-expand'>
                                <div style={{ marginTop: 5, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <p style={{ fontSize: 16, fontWeight: 700, color: '#2A2A2A' }}>#Order_1592</p>
                                    <p style={{ fontSize: 18, fontWeight: 500, color: '#7B7B7B' }}>2:30 PM</p>
                                </div>
                                <div className='table-div'>
                                    <div className='top-detail'>
                                        <p className='top-label' style={{ marginRight: 350 }}>Food</p>
                                        <p className='top-label' style={{ marginRight: 80 }}>Qty</p>
                                        <p className='top-label' style={{ marginRight: 100 }}>Price</p>
                                        <p className='top-label'>Total</p>
                                    </div>
                                    <div style={{ height: 1, backgroundColor: '#AAAAAA', marginLeft: -20, marginRight: -20 }} />
                                    <ul className='orders-ul'>
                                        {item.map((item, index) => {
                                            return (
                                                <li key={index} className='orders-li'>
                                                    <p className='orders-p'>Kaldereta</p>
                                                    <div className='orders-qty-div'>
                                                        <p className='orders-p'>3</p>
                                                    </div>
                                                    <p className='orders-p' style={{ left: 510 }}>₱50.00</p>
                                                    <p className='orders-p' style={{ left: 660 }}>₱2500.00</p>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                    <div style={{ height: 1, backgroundColor: '#AAAAAA', marginLeft: -20, marginRight: -20 }} />
                                </div>
                                <div style={{ marginTop: 60, marginBottom: 60 }}>
                                    <div style={{ display: 'flex', marginBottom: 10, position: 'relative' }}>
                                        <p className='orders-p'>Cash:</p>
                                        <p className='orders-p' style={{ fontWeight: 700, position: 'absolute', left: 110 }}>₱1590.00</p>
                                    </div>
                                    <div className='change-total-div'>
                                        <p className='orders-p'>Change:</p>
                                        <p className='orders-p' style={{ fontWeight: 700, position: 'absolute', left: 110 }}>₱1.00</p>
                                        <div className='total-div'>
                                            <p className='orders-p' style={{ fontSize: 23 }}>Total:</p>
                                            <p style={{ fontSize: 23, fontWeight: 900, color: '#C76666', margin: 0 }}>₱1590.00</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}


export default OrderDetails;