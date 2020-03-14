import React from 'react';
import {BrowserRouter , Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <div className='col-xs-12 admin page-container no-padding'>
            <div className='col-xs-12 menu-contaier no-padding'>
                <Nav/>
                <Route exact path='/' component={Home}/>
                <Route path='/about' component={About}/>
            </div>
          </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
