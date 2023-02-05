// Libraries
import React from 'react';

// Component styles
import style from './Header.module.scss'

const Header = () => {
    return (
    <header className={style.header}>
        <div className={style.logo_wrapper}>
            <p>Place for logo</p>
        </div>
    </header>
    )
}

export default Header;