// Libraries
import React from 'react';
import { Link } from 'react-router-dom';

// Component styles
import style from './LeftSidebar.module.css'

const LeftSidebar = () => {
    return (
    <nav className={style.left_sidebar}>
        <ul>
            <li><Link to="/">Profile</Link></li>
            <li><Link to="/dialogs">Messages</Link></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Music</a></li>
            <li><a href="#">Settings</a></li>
        </ul>
    </nav>
    )
}

export default LeftSidebar;
