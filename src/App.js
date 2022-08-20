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
import Dialogs from './components/Dialogs/Dialogs';
import Profile from './components/Profile/Profile';

const App = (props) => {
  return (
    <Router>
    <div className='app_wrapper'>
      <Header />
        <div className='main_wrapper'>
          <LeftSidebar />
          <div className='page'>
            <Routes>
              <Route path='/' element={<Profile postsData={props.postsData}/>} />
              <Route path='/dialogs/*' element={<Dialogs messagesData={props.messagesData}/>} />
            </Routes>
          </div>

        </div>
    </div>
    </Router>
  )
}

export default App;