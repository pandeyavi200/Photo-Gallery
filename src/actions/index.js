export const addTodo = (data) => {
     return {
         type:"ADDTODO",
         payload: {
             id: new Date().getTime().toString(),
             data:data
         }

     }
}

export const EmptyState = () => {
    return {
        type:"EMPTYSTATE",
    }
}