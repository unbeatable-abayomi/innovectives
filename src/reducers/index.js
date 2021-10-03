import {combineReducers} from 'redux';

const mobileDevices = (listOfMobileDevices = [],action)=>{
        if(action.type === 'CREATE_CATEGORY' && action.payload.name === 'MOBILE_DEVICE'){
            return [...listOfMobileDevices,action]
        }
        else{
            return listOfMobileDevices;
        }
}




export default combineReducers({
    allMobile : mobileDevices
})