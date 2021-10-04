import React, { Component } from 'react'
import NavBar from './SideBarDivs/NavBar';
import { FcSmartphoneTablet } from "react-icons/fc"
import {connect} from 'react-redux';
import {createCategory,preventDefault,deleteFromCategory,createLoan,deleteLoan} from '../actions'
import DeviceCategory from './DeviceCategory';
 class Dashboard extends Component {
     
     renderMobile(){
      if (this.props.mobiles.length > 0){
      return this.props.mobiles.map((mobile)=>{
             return (
                <div key={mobile.name} className='activeLoansPlaneItems'>
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
               
                            <tr key={mobile.name}>
                            <td>{mobile.amount}</td>
                            <td>{mobile.description}</td>
                            </tr>
                        
                            <button onClick={()=>this.props.deleteFromCategory(mobile)}>Remove</button>
                            </div>     
             )

         })
        }else{
            return "No Mobile Device Added Yet"
        }
     }

     renderLoans(){
         if(this.props.loans.length > 0){
            return this.props.loans.map((loan)=>{
                return (
                   <div key={loan.refnumber} className='activeLoansPlaneItems'>
                      <div>
                           <h3>{loan.refnumber}</h3>
                       </div>
                       <div>
                           <h3>{loan.amount}</h3>
                       </div>
                       <div>
                           <h3>{loan.dateAppiled}</h3>
                       </div>
                       <div>
                           <h3>{loan.dateDisbured}</h3>
                       </div>
                       <div>
                           <h3>{loan.repaymentDate}</h3>
                       </div>
                       <div>
                       <button onClick={()=>this.props.deleteLoan(loan)}>Remove</button>
                       </div>
                               </div>     
                )
   
            })  
         }else{
             return "No Results Found"
         }
     }
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
                <div className='noResultsText'>
                    {this.renderLoans()}
                </div>
                <h3 className='NoResultText'>{this.renderMobile()}</h3>
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
                          <div className='availableDevicesText'><a href='/DeviceCategory'>Explore Available Devices</a></div>
                        </div>
                    
                        <div id='boxFour' className='box boxFour'>
                        <h3 className='deviceloansText'>Add Loans To Board(Redux)</h3>
                        <form className='form-inputs' onSubmit={this.props.preventDefault}>
                        <label for="DateAppiled">Reference Number:</label>
                        <input id='refernceNum' placeholder='enter refrence number' type='text'/>
                        <label for="DateAppiled">Total Number:</label>
                        <input id='totalAmount' placeholder='enter amount' type='text'/>
                        <label for="DateAppiled">DateAppiled:</label>
                        <input type="date" id="DateAppiled" name="DateAppiled"/>
                        <label for="DateDisbured">DateDisbured:</label>
                        <input type="date" id="DateDisbured" name="DateDisbured"/>
                        <label for="DateRepayment">Repayment Date:</label>
                        <input type="date" id="RepaymenyDate" name="RepaymenyDate"/>

                    <button className='subimit' onClick={()=>this.props.createLoan(document.getElementById('refernceNum').value,
                    document.getElementById('totalAmount').value,document.getElementById('DateAppiled').value,document.getElementById('DateDisbured').value,
                    document.getElementById('RepaymenyDate').value)} >Submit</button>
                </form>
                        </div>
                        <div className='box boxFour'>
                        <h4 className='deviceloansText'>Add Devices To Board</h4>
                        <form className='form-inputs' onSubmit={this.props.preventDefault}>
              <textarea id='description' type='text' placeholder='enter item description'></textarea>
                    <input id='amount' placeholder='enter amount' type='text'/>
                    <label for="Categories">Categories:</label>
                    <select id = "dropdown" ref = {(input)=> this.menu = input}>
    <option value="N/A">N/A</option>
    <option value="MOBILE_DEVICE">Moblie Device</option>
    <option value="MOBILE_DEVICE_ASSESSORIES">Mobile Device  Asscessories</option>
    <option value="TABLETS_LAPTOPS">Tablets And Laptops</option>
    <option value="HOME_APPLIANCES">Home Appliances</option>
    <option value="GAMING_CONSOLES">Gaming Consoles</option>
</select>
                    <button className='subimit' onClick={()=>this.props.createCategory(document.getElementById('description').value,
                    document.getElementById('amount').value,this.menu.value)} >Submit</button>
                </form>
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
        mobiles:state.allMobile ,
        loans:state.allLoans
    }
}

export default connect(mapStateToProps,{
    createCategory:createCategory,
    preventDefault:preventDefault,
    deleteFromCategory:deleteFromCategory,
    createLoan:createLoan,
    deleteLoan:deleteLoan
}) (Dashboard);
