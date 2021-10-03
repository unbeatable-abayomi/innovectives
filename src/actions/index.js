export const createCategory = (amount,name) => {
    return{
        type : 'CREATE_CATEGORY',
        payload: {
                amount:amount,
                name:name

        } 
    }
   
}


export const preventDefault =(e)=>{
    e.preventDefault();
  }