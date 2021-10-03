import React from 'react'
import { GoChevronDown } from "react-icons/go";
import { FcButtingIn } from "react-icons/fc";
import { FiPhoneCall } from 'react-icons/fi';
function NavBar() {
    return (
        <div>
            <div className='Navbar'>
                
                <div className='FiPhoneCall'><FiPhoneCall className='FiPhoneCall' /> Support</div>
                <div className='nameText'><FcButtingIn className='nameTextIcon' />
                <span className='ayoText'>Ayomide</span> <GoChevronDown className='GoChevronDown'/> </div>
            </div>
        </div>
    )
}

export default  NavBar;
