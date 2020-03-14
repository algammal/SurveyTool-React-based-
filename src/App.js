import React from 'react';
import './App.css';
import Nav from './components/Nav'

function App() {
  return (
    <div className="App">
      <div className='col-xs-12 admin page-container no-padding'>
        <div className='col-xs-12 menu-contaier no-padding'>
            <Nav/>
        </div>
      </div>
    </div>
  );
}

export default App;
