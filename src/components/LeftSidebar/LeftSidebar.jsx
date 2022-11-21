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
            <li><Link to="/users">Users</Link></li>
            <li><s><a href="#">News</a></s></li>
            <li><s><a href="#">Music</a></s></li>
            <li><s><a href="#">Settings</a></s></li>
        </ul>
    </nav>
    )
}

export default LeftSidebar;
