export const createCategory = (description,amount,name) => {
    return{
        type : 'CREATE_CATEGORY',
        payload: {
            description,
                amount,
                name

        } 
    }
   
}

export const deleteFromCategory = (item) => {
    console.log("true",item);
    item.type = 'DELETE_CATEGORY'
    return{
        type : 'DELETE_CATEGORY',
        payload: {
           
                item

        } 
        
    }
   
}


export const preventDefault =(e)=>{
    e.preventDefault();
  }