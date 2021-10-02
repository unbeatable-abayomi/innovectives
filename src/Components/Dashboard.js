import React, { Component } from 'react'
import NavBar from './NavBar';

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
            </div>
        )
    }
}

export default Dashboard;
