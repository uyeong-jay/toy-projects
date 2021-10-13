import React, { useCallback, useRef } from 'react';

const ImageUpload1 = () => {

  const onRefInput = useRef(null);

  const onSubmitImageUpload = useCallback((e) => {
    e.preventDefault();
    onRefInput.current.click();
  },[]);


  return(
    <>
    <form method="post" encType="multipart/form-data" onSubmit={onSubmitImageUpload}>
      <input type="file" multiple hidden ref={onRefInput}/>
      <button type="submit">Image Upload</button>
    </form>
    </>
  );
}

export default ImageUpload1;