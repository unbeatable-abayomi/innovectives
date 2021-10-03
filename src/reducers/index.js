import {combineReducers} from 'redux';

const addMobileDevices = (listOfMobileDevices = [],action)=>{
        if(action.type === 'CREATE_CATEGORY' && action.payload.name === 'MOBILE_DEVICE'){
            return [...listOfMobileDevices,action]
        }
        else{
            return listOfMobileDevices;
        }
}
const addMobileDevicesAssc = (listOfMobileDevicesAssc = [],action)=>{
    if(action.type === 'CREATE_CATEGORY' && action.payload.name === 'MOBILE_DEVICE_ASSESSORIES'){
        return [...listOfMobileDevicesAssc,action]
    }
    else{
        return listOfMobileDevicesAssc;
    }
}

const addTabletsAndLaptops = (listOfTabletsAndLaptops = [],action)=>{
    if(action.type === 'CREATE_CATEGORY' && action.payload.name === 'TABLETS_LAPTOPS'){
        return [...listOfTabletsAndLaptops,action]
    }
    else{
        return listOfTabletsAndLaptops;
    }
}

const addHomeAppliances = (listOfHomeApplicances = [],action)=>{
    if(action.type === 'CREATE_CATEGORY' && action.payload.name === 'HOME_APPLIANCES'){
        return [...listOfHomeApplicances,action]
    }
    else{
        return listOfHomeApplicances;
    }
}
const addGamingConsoles = (listOfGamingConsole = [],action)=>{
    if(action.type === 'CREATE_CATEGORY' && action.payload.name === 'GAMING_CONSOLES'){
        return [...listOfGamingConsole,action]
    }
    else{
        return listOfGamingConsole;
    }
}
//GAMING_CONSOLES
//HOME_APPLIANCES
//TABLETS_LAPTOPS




export default combineReducers({
    allMobile : addMobileDevices,
    allMobileDevicesAssc: addMobileDevicesAssc,
    allTabletsAndLaptops: addTabletsAndLaptops,
    allHomeAppliances:addHomeAppliances,
    allGamingConsoles:addGamingConsoles
})