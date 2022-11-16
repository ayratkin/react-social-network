// Libraries
import React from "react";
import axios from "axios";
// Component styles
import style from './Users.module.css'
import {useDispatch, useSelector} from "react-redux";
import {followAC, setUsersAC} from '../../redux/users-reducer';
import {unFollowAC} from '../../redux/users-reducer'

const Users = (props) => {

	// axios.get('https://social-network.samuraijs.com/api/1.0/users').then(respons => {
	// 	console.log(respons.data.items)
	// })

	const users = useSelector(state => {
		return state.usersPage.users;
	})
	const dispatch = useDispatch();

	if (users.length === 0) {
		dispatch(setUsersAC([{
			id: 1,
			photoUrl: 'https://vjoy.cc/wp-content/uploads/2019/06/9-29.jpg',
			isFollow: true,
			fullName: 'Ivan M.',
			status: 'Better to die standing than to live on your knees 👆🏻👆🏻 ',
			country: "Russia"
		}, {
			id: 2,
			photoUrl: 'https://animeslayers.ru/wp-content/uploads/kartinki/vk/naavatarkuvk1.jpg',
			isFollow: true,
			fullName: 'Svetlana D.',
			status: 'Quit... be jealous... suffer... fall in love... But never humiliate yourself!',
			country: "Belarus"
		}, {
			id: 3,
			photoUrl: 'https://www.meme-arsenal.com/memes/c17188f507a09507ef640b32b14ed910.jpg',
			isFollow: false,
			fullName: 'Andrew l.',
			status: 'A girl should believe in you more than you do yourself.',
			country: "Ukraine"
		}, {
			id: 4,
			photoUrl: 'https://proprikol.ru/wp-content/uploads/2019/08/krutye-kartinki-dlya-vk-26.jpg',
			isFollow: false,
			fullName: 'Marat K.',
			status: 'If you do - do not be afraid, if you are afraid - do not do it, but you did it - do not regret it.',
			country: "Kazakhstan"
		},]))
	}

	return (
		<>
			<h1>Users:</h1>
			{
				users.map((user) => {
					return (
						<div className={style.user}>
							<div className={style.user__follow}>
								<img src={user.photoUrl} className={style.user_photo}/>

								{
									user.isFollow
										? <button onClick={() => {
											dispatch(unFollowAC(user.id))
										}}>unfollow</button>
										: <button onClick={() => {
											dispatch(followAC(user.id))
										}}>follow</button>
								}

							</div>
							<div className={style.user__descriptions}>
								<div className={style.user__column}>
									<p className={style.user__fullName}>{user.fullName}</p>
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