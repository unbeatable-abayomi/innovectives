import React from 'react'
import SideBar from './Sidebar'
import Dashboard from './Dashboard'

export default function Application() {
    return (
        <div className='App'>
           <SideBar/>
            <Dashboard/>
        </div>
    )
}
