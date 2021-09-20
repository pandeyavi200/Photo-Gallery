import './Gallery.css'
import React, { useState, useEffect } from 'react';


import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';

import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { Loader } from '../../components/Loader';
import { UnsplashImage } from '../../components/UnsplashImage';

// Style
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: sans-serif;
  }
`;

const WrapperImages = styled.section`
  max-width: 70rem;
  margin: 4rem auto;
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 300px;
  margin-top:200px;
`;


function Gallery() {

    const [images, setImage] = useState([]);

    useEffect(() => {
      fetchImages();
    }, [])
  
    const fetchImages = (count = 10) => {
      const apiRoot = "https://api.unsplash.com";
      const accessKey = 'W15RP8_hGPkm3vl_2lS3HDjdpx-wnwvPYU3RLZiOg9w';
  
      axios
        .get(`${apiRoot}/photos/random?client_id=${accessKey}&count=${count}`)
        .then(res => {
          setImage([...images, ...res.data]);
        })
    }
  

    return (
        <div >
            <GlobalStyle />
      <InfiniteScroll
        dataLength={images.length}
        next={fetchImages}
        hasMore={true}
        loader={<Loader />}
      >
        <WrapperImages>
          {images.map(image => (
            <UnsplashImage url={image.urls.thumb} key={image.id} />
          ))}
        </WrapperImages>
      </InfiniteScroll>
        </div>
    )
}

export default Gallery
