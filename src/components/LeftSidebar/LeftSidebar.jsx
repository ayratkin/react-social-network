// Libraries
import React from 'react';
import {Link} from 'react-router-dom';

// Component styles
import style from './LeftSidebar.module.scss'

const LeftSidebar = () => {
	return (
		<nav className={style.left_sidebar}>
			<ul>
				<Link className={style.link} to="/">
					<li className={style.item}>

						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
						     className={style.icon} viewBox="0 0 16 16">
							<path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
							<path fillRule="evenodd"
							      d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
						</svg>
						Profile
					</li>
				</Link>

				<Link className={style.link} to="/dialogs">
					<li className={style.item}>
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
						     className={style.icon} viewBox="0 0 16 16">
							<path
								d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
						</svg>
						Messages
					</li>
				</Link>


				<Link className={style.link} to="/users">
					<li className={style.item}>
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
						     className={style.icon} viewBox="0 0 16 16">
							<path
								d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
						</svg>
						Users
					</li>
				</Link>

			</ul>
		</nav>
	)
}

export default LeftSidebar;
