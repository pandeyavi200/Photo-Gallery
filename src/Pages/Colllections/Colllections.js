import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Collections.css'
import { SingleColl } from '../../components/Single Collection/SingleColl'
import SelectImg from '../../components/SelectImg/SelectImg'


import {Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText

} from '@material-ui/core'

function Colllections() {
    const [handleModel, sethandleModel] = useState(false);
    const lang = useSelector((state) => state.todoReducers.list)
    console.log(lang, "lang");

    const closeDialog = ()=> {

        setcomData((oldItems)=>{
            return [...oldItems,data]
        })
        setData([])

        sethandleModel(false)

    };

    const [data, setData] = useState([]);
    const [comData, setcomData] = useState([]);
    const [name, setName] = useState()
    const [desc, setDesc] = useState()

    const itemName=(event)=>{
          setName(event.target.value)
    }
    const itemDesc=(event)=>{
          setDesc(event.target.value)
    }
    const handleSubmit=()=>{
        setData((oldItems)=>{
            return [...oldItems,name,desc]
        })
      
       
        sethandleModel(true)
        console.log(comData)
    }
    
    const keuupfunc=()=>{
        setcomData((oldItems)=>{
            return [...oldItems,data]
        })
        setData([])
    }

    return (
        <div style={{paddingTop:"170px"}}>
        <div className="CreateColl">
        <button className="Create" onClick={() => sethandleModel(true)}>Create</button>
       <Dialog open={handleModel} onClose={closeDialog} >
         <DialogTitle>Hey There</DialogTitle>
           <DialogContent>
               <DialogContentText>
            
          <label>
           Name:
          <input type="text" name="name" onChange={itemName} />
          </label>
          <br />
          <label>
           Description:
          <textarea type="text" name="name" onChange={itemDesc}/>
          </label>
          <br />
          <input type="submit" value="Submit" onClick={handleSubmit}  onKeyUp={keuupfunc} />

          <div className="addItems">
          <SelectImg/>
          </div>

               </DialogContentText>
           </DialogContent>
       </Dialog>  

    <div className="allCollections">      
    { comData.map((itemvalue)=>{
     return <SingleColl name={itemvalue[0]} desc={itemvalue[1]} />
     })}
     </div> 
      
        </div>
          
        </div>
    )
}

export default Colllections
