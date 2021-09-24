import React, {useState} from 'react';
import './SingleColl.css'
import ClearIcon from '@material-ui/icons/Clear';
import { UnsplashImage } from '../UnsplashImage';
import styled from 'styled-components';

import {Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText

} from '@material-ui/core'

const WrapperImages = styled.section`
  max-width: 70rem;
  margin: 4rem auto;
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 300px;
  margin-top:200px;
`;

export const SingleColl = ({key, id,name,desc,image,onSelect}) => {
  

  const [handleModel, sethandleModel] = useState(false);

  const closeDialog = ()=> {
    sethandleModel(false)
    };

  //   if(image.length<1){
  //     image[0].data="https://images.unsplash.com/photo-1630523628239-576bc71b6f69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjEzMzF8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MzI1MDM1NDU&ixlib=rb-1.2.1&q=80&w=200"
  // }

  return (
    <>
    <div className="cardOverlay">
    <div className="card" 
      style={{  
  backgroundImage: "url(" + image[0].data + ")",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
}}
onClick={() => sethandleModel(true)}
     >
      <h1>{name}</h1>
      <h2>{desc}</h2>
    </div>
    </div>
    <ClearIcon className="clear" 
      onClick={
        ()=> onSelect(id)
      }
    />

    <Dialog open={handleModel} onClose={closeDialog} >
         <DialogTitle>Your Collection</DialogTitle>
           <DialogContent>
               <DialogContentText>
          <p>Name:</p>
          <h1 className="heading" >{name}</h1>
          <br />
          <p>Description:</p>
         <h4 className="desc" style={{  wordWrap: "break-word"}} >{desc}</h4>
          <br />
          <div className="addItems" style={{marginTop: "-180px"}}>
          <WrapperImages>
          {image.map(image => (
            <UnsplashImage url={image.data} key={image.id} />
          ))}
        </WrapperImages>
          </div>
               </DialogContentText>
           </DialogContent>
       </Dialog>  
       
    </>
  )
}