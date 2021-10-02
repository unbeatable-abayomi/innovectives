import React from 'react';
import '../App.css';
import EasyFinance from '../EasyFinance.svg';
import Divs from '../Divs';


function Sidebar() {
    return (
        <div className="Sidebar">
            <div className='imageContainer'>
            <img src={EasyFinance} alt="Easy Finance Logo" />
            </div>
            <div>
            <Divs />
            </div>
           
             
        </div>
    )
}

export default Sidebar
