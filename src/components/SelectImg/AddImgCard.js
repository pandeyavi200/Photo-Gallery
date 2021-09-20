import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;


function AddImgCard({url,key}) {
    return (
        <>
           <div>
           <button >Add</button>
          <Img key={key} src={url} alt="" />
          </div>
        </>
      )
}

export default AddImgCard
