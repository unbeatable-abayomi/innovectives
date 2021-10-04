import React from 'react'

function DivOne() {
    return (
        <div>
         <div className='parent parentOne'>
            <div className='child childOne'></div>
            <div className='child childTwo'>
            <div className='lineDiv'></div>
            </div>
        </div>
        </div>
    )
}

export default DivOne
