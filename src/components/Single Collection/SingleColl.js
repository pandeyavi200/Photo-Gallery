import React from 'react';
import './SingleColl.css'
import ClearIcon from '@material-ui/icons/Clear';

export const SingleColl = ({name,desc}) => {
  return (
    <>
    <div className="card" >
     <ClearIcon className="clear"/>
      <h1>{name}</h1>
      <h2>{desc}</h2>
    </div>
      
    </>
  )
}