export const addTodo = (data)=>{
     return{
         type:"ADDTODO",
         payload: {
             id: new Date().getTime().toString(),
             data:data
         }

     }
}