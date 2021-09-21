import React, {useState} from 'react';
import styled from 'styled-components';
import { addTodo } from '../../actions';
import { useDispatch } from 'react-redux';

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;


function AddImgCard({url,key}) {
    const dispatch = useDispatch();
    const [urls, setUrls] = useState("name")

  const pushvalue = () => {
      console.log(url, "myurl");
      setUrls(url);
      dispatch(addTodo(url));
    }
    return (
        <>
           <div>
           <button onClick={() => pushvalue()} >Add</button>
          <Img key={key} src={url} alt="" />
          </div>
        </>
      )
}

export default AddImgCard
