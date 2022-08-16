import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import LeftSidebar from './components/LeftSidebar/LeftSidebar';
import Dialogs from './components/Dialogs/Dialogs';
import Profile from './components/Profile/Profile';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const App = () => {
  return (
    <Router>
    <div className='app_wrapper'>
      <Header />
        <div className='main_wrapper'>
          <LeftSidebar />
          <Routes>
            <Route path='/' element={<Profile/>} />
            <Route path='/Dialogs' element={<Dialogs/>} />
          </Routes>
        </div>
    </div>
    </Router>
  )
}

export default App;