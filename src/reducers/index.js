import {combineReducers} from 'redux';

const addMobileDevices = (listOfMobileDevices = [],action)=>{
        if(action.type === 'CREATE_CATEGORY' && action.payload.name === 'MOBILE_DEVICE'){
            return [...listOfMobileDevices,action.payload]
        }else if(action.type === 'DELETE_CATEGORY' && action.payload.name === 'MOBILE_DEVICE'){
          
            return listOfMobileDevices.filter(mobile => mobile.description !== action.payload.description )
              
        }
        else{
           
            return listOfMobileDevices;
        }
}
const addMobileDevicesAssc = (listOfMobileDevicesAssc = [],action)=>{
    if(action.type === 'CREATE_CATEGORY' && action.payload.name === 'MOBILE_DEVICE_ASSESSORIES'){
        return [...listOfMobileDevicesAssc,action.payload]
    }else if(action.type === 'DELETE_CATEGORY' && action.payload.name === 'MOBILE_DEVICE_ASSESSORIES'){
        return listOfMobileDevicesAssc.filter(mobile => mobile.description !== action.payload.description )
    }
    else{
        return listOfMobileDevicesAssc;
    }
}

const addTabletsAndLaptops = (listOfTabletsAndLaptops = [],action)=>{
    if(action.type === 'CREATE_CATEGORY' && action.payload.name === 'TABLETS_LAPTOPS'){
        return [...listOfTabletsAndLaptops,action.payload]
    }else if(action.type === 'DELETE_CATEGORY' && action.payload.name === 'TABLETS_LAPTOPS'){
        return listOfTabletsAndLaptops.filter(mobile => mobile.description !== action.payload.description )
    }
    else{
        return listOfTabletsAndLaptops;
    }
}

const addHomeAppliances = (listOfHomeApplicances = [],action)=>{
    if(action.type === 'CREATE_CATEGORY' && action.payload.name === 'HOME_APPLIANCES'){
        return [...listOfHomeApplicances,action.payload]
    }else if(action.type === 'DELETE_CATEGORY' && action.payload.name === 'HOME_APPLIANCES'){
        return listOfHomeApplicances.filter(mobile => mobile.description !== action.payload.description )
    }
    else{
        return listOfHomeApplicances;
    }
}
const addGamingConsoles = (listOfGamingConsole = [],action)=>{
    if(action.type === 'CREATE_CATEGORY' && action.payload.name === 'GAMING_CONSOLES'){
        return [...listOfGamingConsole,action.payload]
    }else if(action.type === 'DELETE_CATEGORY' && action.payload.name === 'GAMING_CONSOLES'){
        return listOfGamingConsole.filter(mobile => mobile.description !== action.payload.description )
    }
    else{
        return listOfGamingConsole;
    }
}

const addLoans = (listOfLoans =[],action)=>{
     if(action.type === 'CREATE_LOAN'){
       return[...listOfLoans,action.payload]
     }else if(action.type === 'DELETE_LOAN'){
         return listOfLoans.filter(loan => loan.refnumber !== action.payload.refnumber)
     }
     else{
         return listOfLoans;
     }
}





export default combineReducers({
    allMobile : addMobileDevices,
    allMobileDevicesAssc: addMobileDevicesAssc,
    allTabletsAndLaptops: addTabletsAndLaptops,
    allHomeAppliances:addHomeAppliances,
    allGamingConsoles:addGamingConsoles,
    allLoans:addLoans
})