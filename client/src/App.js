import React from 'react';
import './App.css';
import Home from './views/Home';
import Edit from './views/Edit';
import Add from './views/Add';
import {Router} from '@reach/router';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Favorite Authors
        <Router>
          <Home path ='/'/>
          <Edit path = '/author/edit/:id'/>
          <Add path = '/new'/>
        </Router>
      </header>
    </div>
  );
}

export default App;
