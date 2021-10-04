import React from 'react'
import DivOne from './DivOne';
import DivTwo from './DivTwo';
import DivThree from './DivThree';
import DivFour from './DivFour';
import DivFive from './DivFive';
import DivSix from './DivSix';
import DivSeven from './DivSeven';
import DivEight from './DivEight';
function Divs() {
    return (
        <div  className='wrapper'>
        <div className='main_container'>

        
       <DivOne/>
       <DivTwo/>
        <DivThree/>
        <DivFour/>
        </div>
        <DivFive/>

     <div className='divlineAbove'>
     <DivSix />
     <DivSeven/>
     <DivEight/>


 
  
        </div>
     </div>
        
        
    )
}

export default Divs
