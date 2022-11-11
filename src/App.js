// Libraries
import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route 
} from 'react-router-dom';

// Component styles;
import './App.css';

// App components 
import Header from './components/Header/Header';
import LeftSidebar from './components/LeftSidebar/LeftSidebar';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Profile from './components/Profile/Profile';
import Users from "./components/Users/Users";

const App = (props) => {
  return (
    <Router>
    <div className='app_wrapper'>
      <Header /> 
        <div className='main_wrapper'>
          <LeftSidebar />
          <div className='page'>
            <Routes>
              <Route path='/' element={<Profile />} />
              <Route path='/dialogs/*' element={<DialogsContainer />} />
              <Route path='/users/*' element={<Users />} />
            </Routes>
          </div>

        </div>
    </div>
    </Router>
  )
}

export default App;