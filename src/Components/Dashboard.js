import React, { Component } from 'react'
import NavBar from './NavBar';
import { FcSmartphoneTablet } from "react-icons/fc"
import {connect} from 'react-redux';
import {createCategory,preventDefault} from '../actions'

 class Dashboard extends Component {
    render() {
        return (
            <div className='Dashboard'>
                <NavBar/>
                <h1 className='dashBoardText'>Loans</h1>
                <div className='activeLoansPlane'>
                <h1 className='dashBoardText'>My Active Loans</h1>
                <div className='activeLoansPlaneItems'>
                    <div>
                        <h3>Reference Name</h3>
                    </div>
                    <div>
                        <h3>Total Amount(#)</h3>
                    </div>
                    <div>
                        <h3>Date Applied</h3>
                    </div>
                    <div>
                        <h3>Date Disbursed</h3>
                    </div>
                    <div>
                        <h3>Repayment Date</h3>
                    </div>
                    <div>
                        <h3>Actions</h3>
                    </div>
                   
                </div>
                <hr className='hr_line'/>
                <h3 className='NoResultText'>No Results</h3>
                <div className='cards'>
                        <div className='box boxOne'>
                        <div className="square-box"></div>
                          <div className='lineDiv1'></div>
                          <div className='lineDiv2'> </div>
                          <div className='rectangle'></div>
                        </div>
                        <div className='box boxTwo'>
                        <div className="square-box"></div>
                          <div className='lineDiv1'></div>
                          <div className='lineDiv2'> </div>
                          <div className='rectangle'></div>
                        </div>
                        <div className='box boxThree'>
                        <div className="square-box"></div>
                          <div className='lineDiv1'></div>
                          <div className='lineDiv2'> </div>
                          <div className='rectangle'></div>
                        </div>
                        <div className='box boxFour'>
                        <div className="square-box"></div>
                          <div className='lineDiv1'></div>
                          <div className='lineDiv2'> </div>
                          <div className='rectangle'></div>
                        </div>
                        <div className='box boxFive'>
                        <div>
                        <FcSmartphoneTablet className='FcSmartphoneTablet' />
                        </div>
                         
                          <div className='deviceloans'>
            <h3 className='deviceloansText'>Device Loans</h3> 
            <div id='deviceloansbutton' className='buttonText'>New</div>
         </div>
                    
                          <h3 id='priceRange'>From N50,000 to N500,000 </h3>
                          <div className='availableDevicesText'>Explore Available Devices</div>
                        </div>
                    
                        <div className='box boxFour'>
                        <form className='form-inputs' onSubmit={this.props.preventDefault}>
              <textarea type='text' placeholder='enter item description'></textarea>
                    <input id='amount' placeholder='enter amount' type='text'/>
                    <select id = "dropdown" ref = {(input)=> this.menu = input}>
    <option value="N/A">N/A</option>
    <option value="MOBILE_DEVICE">Moblie Device</option>
    <option value="MOBILE_DEVICE_ASSESSORIES">Mobile Device  Assc</option>
    <option value="TABLETS_LAPTOPS">Tablets And Laptops</option>
    <option value="HOME_APPLIANCES">Home Appliances</option>
    <option value="GAMING_CONSOLES">Gaming Consoles</option>
</select>
                    <button onClick={()=>this.props.createCategory(document.getElementById('amount').value,this.menu.value)} >Submit</button>
                </form>
                        </div>
                        <div className='box boxFour'>
                        <div className="square-box"></div>
                          <div className='lineDiv1'></div>
                          <div className='lineDiv2'> </div>
                          <div className='rectangle'></div>
                        </div>
                </div>
               
                </div>
                
 
            </div>
        )
    }
}

const mapStateToProps = state =>{
    console.log(state)
    return{
        mobiles:state.allMobile 
    }
}

export default connect(mapStateToProps,{
    createCategory:createCategory,
    preventDefault:preventDefault
}) (Dashboard);
