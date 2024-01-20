import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Books from './components/Books';
import Clothing from './components/Clothing';
import Electronics from './components/Electronics';

// Import CSS
import './styles/App.scss';
import './styles/Header.scss';
import './styles/Responsive.scss';

const App = () => {
  return  <Router>
   <Header/>
 
    <Routes>
 
      <Route path={'/home'} element={<Home/>} />
      <Route path={'/books'} element={<Books/>} />
      <Route path={'/cloths'} element={<Clothing/>} />
      <Route path={'/electronics'} element={<Electronics/>} />


    </Routes>


  </Router>
  
}

export default App