import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../routes/Home';
import Detail from '../routes/Detail';

const App = () => {
  return(
    <Router>
      <Route exact path='/'  component={Home} />
      <Route exact path='/:id'  component={Detail} />
    </Router>
  )
}

export default App;