import React from 'react';
import ImageUpload1 from './ImageUpload1';
import ImageUpload2 from './ImageUpload2';

const ImageUpload = (props) => {
  let urlSearchParams = new URLSearchParams(props.location.search)
  console.log(urlSearchParams.get('hello')); 
  // console.log(props);//history, location, match
  
  if(props.match.params.upload === 'upload1') {
    return <ImageUpload1 />
  } else if (props.match.params.upload === 'upload2') {
    return <ImageUpload2 />
  } else {
    return(
      <>
        Nothing
      </>
    );
  }
}

export default ImageUpload;