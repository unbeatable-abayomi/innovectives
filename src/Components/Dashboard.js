import React, { Component } from 'react'
import NavBar from './NavBar';
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
                <h3 className='NoResultText'>No Results</h3>
                </div>
                <form onSubmit={this.props.preventDefault}>
                    <input id='test'  type='text'/>
                    <select id = "dropdown" ref = {(input)=> this.menu = input}>
    <option value="N/A">N/A</option>
    <option value="MOBILE_DEVICE">Moblie</option>
    <option value="MOBILE_DEVICE_ASSESSORIES">Mobile Device Assc</option>
    <option value="TABLETS_LAPTOPS">Tablets Laptops</option>
    <option value="HOME_APPLIANCES">Home Appliances</option>
    <option value="GAMING_CONSOLES">Gaming</option>
</select>
                    <button onClick={()=>this.props.createCategory(document.getElementById('test').value,this.menu.value)} >Submit</button>
                </form>
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
