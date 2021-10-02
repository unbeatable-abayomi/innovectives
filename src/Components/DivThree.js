import React from 'react'

function DivThree() {
    return (
        <div>
         <div className='parent parentThree'>
            <div className='child childOne'></div>
            <div className='child childTwo'>
            <div className='lineDiv'></div>
            </div>
        </div>
        </div>
    )
}

export default DivThree
