import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import ImageUpload from './imageUpload/ImageUpload';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        {/* 공통 layout */}
        <Link to='/image/upload1/?query=10&hello=woo&bye=yeong'>Image Upload1</Link>
        <br />
        <Link to='/image/upload2'>Image Upload2</Link>
      </div>
      <div>
        {/* 바뀌는 layout */}
        <Route path='/image/:upload' component={ImageUpload} />
      </div>
    </BrowserRouter>
  );
}

export default App;
