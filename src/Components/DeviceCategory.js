import React from 'react'
import Accessories from '../Accessories.svg';
import Appliances from '../Appliances.svg';
import Gaming from '../Gaming.svg';
import Mobile from '../Mobile.svg';
function DeviceCategory() {
    return (
        <div>
            <div className='deviceCategory'>
                    <h3>Select Device Category</h3>
                    <div className='allDevice'>
                        <div className='deviceCat'>
                        <img src={Mobile} alt="Easy Finance Logo" /> 
                        <p>Mobile Device</p>
                        </div>
                        <div className='deviceCat'>
                        <img src={Mobile} alt="Easy Finance Logo" />
                        <p>Mobile Asscerioces</p>
                        </div>
                        <div className='deviceCat'>
                        <img src={Gaming} alt="Easy Finance Logo" />
                        <p>Tablets And Laptop</p>
                        </div>
                        <div className='deviceCat'>
                        <img src={Appliances} alt="Easy Finance Logo" />
                        <p>Home Appliances</p>
                        </div>
                        <div className='deviceCat'>
                        <img src={Accessories} alt="Easy Finance Logo" />
                        <p>Gaming Console </p>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default DeviceCategory
