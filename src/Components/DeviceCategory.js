import React from 'react'
import Accessories from '../Accessories.svg';
import Appliances from '../Appliances.svg';
import Gaming from '../Gaming.svg';
import Mobile from '../Mobile.svg';
import { GoChevronLeft } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";
import Sidebar from './Sidebar';
function DeviceCategory() {
    return (
        <div className='App'>
            <Sidebar/>
            <div className='deviceCategory'>
                <span className='backAndForward'>
                <div className='backArrow'><a href='/'> <GoChevronLeft className='GoChevronLeft'/>Go Back</a></div>
             <div className='backArrow'><a href='/Purchase'>Forward <GoChevronRight className='GoChevronLeft'/></a></div>
                </span>
                        
                    <div className='allDevice'>
                    <p className='deivceSelect'>Select Device Category</p>
                        <div className='deviceCat'>
                        <img src={Mobile} alt="Easy Finance Logo" /> 
                        <p>Mobile Device</p>
                        </div>
                        <div className='deviceCat'>
                        <img src={ Accessories} alt="Easy Finance Logo" />
                        <p>Mobile Asscessories</p>
                        </div>
                        <div className='deviceCat'>
                        <img src={Mobile} alt="Easy Finance Logo" />
                        <p>Tablets And Laptop</p>
                        </div>
                        <div className='deviceCat'>
                        <img src={Appliances} alt="Easy Finance Logo" />
                        <p>Home Appliances</p>
                        </div>
                        <div className='deviceCat'>
                        <img src={Gaming} alt="Easy Finance Logo" />
                        <p>Gaming Console </p>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default DeviceCategory
