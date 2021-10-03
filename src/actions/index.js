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
  
    return{
        type : 'DELETE_CATEGORY',
        payload: item
           
                

        
        
    }
   
}
export const createLoan = (refnumber,amount,dateAppiled,dateDisbured,repaymentDate) => {
    return{
        type : 'CREATE_LOAN',
        payload: {
            refnumber,
                amount,
                dateAppiled,
                dateDisbured,
                repaymentDate

        } 
    }
   
}

export const deleteLoan = (loan) => {
    return{
        type : 'DELETE_LOAN',
        payload:loan 
    }
   
}


export const preventDefault =(e)=>{
    e.preventDefault();
  }