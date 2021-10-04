import React from 'react'
import { GoChevronLeft } from "react-icons/go";

import Sidebar from './Sidebar';
export default function Purchase() {
    return (
        <div className='App'>
            <Sidebar/>
            <div className='deviceCategory'>
                <span className='backAndForward'>
                <div className='backArrow'><a href='/DeviceCategory'> <GoChevronLeft className='GoChevronLeft'/>Go Back</a></div>
             
                </span>
                        
                    <div className='allDevicePurchase'>
                    <h3 className=''>Mobile Device Loan- Samsung Galaxy Note 9</h3>
                    
                    <p>Render here the form of CowriesMFB for the loan</p>
                    <div className='submitAndResetButton'>
                        <button className='submit'>Submit</button>
                        <button className='reset'>Reset</button>
                    </div>
                    </div>
                   
                    
            </div>
        </div>
    )
}
