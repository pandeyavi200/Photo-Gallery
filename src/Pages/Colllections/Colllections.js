import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Collections.css'
import { SingleColl } from '../../components/Single Collection/SingleColl'
import SelectImg from '../../components/SelectImg/SelectImg'
import { EmptyState } from '../../actions';

import {Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText

} from '@material-ui/core'


function Colllections() {
    const [handleModel, sethandleModel] = useState(false);
    const lang = useSelector((state) => state.todoReducers.list)  
    const dispatch = useDispatch();  
    const closeDialog = ()=> {

        var isValid="false";
        isValid=validate()
        console.log(isValid)
        if(isValid){

        setcomData((oldItems)=>{
            return [...oldItems,data]
        })
        setData([])
        
        // sethandleModel(false)
    }
    sethandleModel(false)
    };

    const [data, setData] = useState([]);
    const [comData, setcomData] = useState([]);
    const [name, setName] = useState("")
    const [desc, setDesc] = useState("")
    const [nameError, setNameError] = useState("")
    const [descError, setDescError] = useState("")
    const [galleryError, setGalleryError] = useState("")
    const itemName=(event)=>{
          setName(event.target.value)
    }
    const itemDesc=(event)=>{
          setDesc(event.target.value)
    }
    const handleSubmit=()=>{
        var isValid="false";
        isValid=validate()
        
        if(isValid){
    
        setData((oldItems)=>{
            return [...oldItems,name,desc,lang]
        })
        dispatch(EmptyState());
        console.log("ho rha h")
        sethandleModel(true)
    }
        
    }

    const validate=()=>{
        let nameError=""
        let descError=""
        if(name.length<1){
            setNameError("name cannot be empty")
        }
        else{
            setNameError("")
        }

        if(desc.length<1){
            setDescError("description cannot be empty")
        }
        else{
            setDescError("")
        }
        console.log(lang.length)
        if(lang.length<1){
            setGalleryError("Add atleast 1 image")
        }
        else{
            setGalleryError("")
        }

        if(nameError || descError || galleryError)
          return false;
        return true;
    }
    
    const deleteItems=(id)=>{
        console.log("deleted")
        setcomData((oldItems)=>{
            return oldItems.filter((arrElem, index)=>{
                return index !==id;
            })
        })
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
         <DialogTitle>Create Collection</DialogTitle>
           <DialogContent>
               <DialogContentText>
            
          <label>
           Name:
          <input type="text" name="name"  onChange={itemName} />
          <div style={{fontSize: "12px", color: "red"}}>{nameError}</div>
          </label>

          <br />
          <label>
           Description:
          <textarea type="text" name="desc"  onChange={itemDesc}/>
          <div style={{fontSize: "12px", color: "red"}}>{descError}</div>
          </label>
          <br />
          <input type="submit" className='button1 submit' value="Add"  onClick={handleSubmit}  onKeyUp={keuupfunc} />
          <input type="button" style={{marginLeft:"20px"}} className='button1 submit' value="Close"  onClick={closeDialog}   />
          <div style={{fontSize: "12px", color: "red"}}>{galleryError}</div>
          <div className="addItems">
          <SelectImg/>
          </div>

               </DialogContentText>
           </DialogContent>
       </Dialog>  

    <div className="allCollections">      
    { comData.map((itemvalue,index)=>{
     return <SingleColl key={index} id={index} name={itemvalue[0]} desc={itemvalue[1]} image={itemvalue[2]} onSelect={deleteItems} />
     })}
     </div> 
      
        </div>
          
        </div>
    )
}

export default Colllections
