// Libraries
import React from "react";
import axios from "axios";
// Component styles
import style from './Users.module.css'
import {useDispatch, useSelector} from "react-redux";
import {followAC, setUsersAC} from '../../redux/users-reducer';
import {unFollowAC} from '../../redux/users-reducer';

import manAvatar from '../../../src/img/man-avatar.png'


const Users = (props) => {

	const users = useSelector(state => {
		return state.usersPage.users;
	})

	const dispatch = useDispatch();

	axios.get('https://social-network.samuraijs.com/api/1.0/users').then(respons => {
		console.log(respons.data.items)
	})

	if (users.length === 0) {
		axios.get('https://social-network.samuraijs.com/api/1.0/users').then(respons => {
			dispatch(setUsersAC(respons.data.items))
		})
	}

	return (
		<>
			<h1>Users:</h1>
			{
				users.map((user) => {
					return (
						<div className={style.user}>
							<div className={style.user__follow}>

								{
									user.photos.small
										? <img src={user.photos.small} className={style.user_photo}/>
										: <img src={manAvatar} className={style.user_photo}/>
								}

								{
									user.isFollow
										? <button
											className={style.user__followBtn}
											onClick={() => {
												dispatch(unFollowAC(user.id))
											}}>unfollow</button>
										: <button
											className={style.user__followBtn}
											onClick={() => {
												dispatch(followAC(user.id))
											}}>follow</button>
								}

							</div>
							<div className={style.user__descriptions}>
								<div className={style.user__column}>
									<p className={style.user__fullName}>{user.name}</p>
									<p className={style.user__status}>{user.status}</p>
								</div>
								<div className={style.user__column}>
									{user.country}
								</div>
							</div>
						</div>
					)
				})
			}
		</>
	)
}

export default Users;