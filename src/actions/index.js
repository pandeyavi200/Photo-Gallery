export const addTodo = (data) => {
    console.log(data, "addTodo");
     return {
         type:"ADDTODO",
         payload: {
             id: new Date().getTime().toString(),
             data:data
         }

     }
}
