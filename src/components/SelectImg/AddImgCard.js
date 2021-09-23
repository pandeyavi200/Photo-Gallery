import React, {useState} from 'react';
import styled from 'styled-components';
import { addTodo } from '../../actions';
import { useDispatch } from 'react-redux';
import './SelectImg.css'

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
      console.log(urls)
    }
    return (
        <>
           <div>
           <button className="button1" onClick={() => pushvalue()} >Add</button>
          <Img key={key} src={url} alt="" />
          </div>
        </>
      )
}

export default AddImgCard
