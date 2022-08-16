import React from 'react';
import style from './LeftSidebar.module.css'

const LeftSidebar = () => {
    return (
    <nav className={style.left_sidebar}>
        <ul>
            <li><a href="/">Profile</a></li>
            <li><a href="/dialogs">Messages</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Music</a></li>
            <li><a href="#">Settings</a></li>
        </ul>
    </nav>
    )
}

export default LeftSidebar;
