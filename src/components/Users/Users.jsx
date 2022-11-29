// Libraries
import React from "react";
import axios from "axios";
import {connect} from "react-redux";
// Component styles
import style from './Users.module.css'
import {useDispatch, useSelector} from "react-redux";
import {followAC, setUsersAC} from '../../redux/users-reducer';
import {unFollowAC} from '../../redux/users-reducer';
import manAvatar from '../../../src/img/man-avatar.png'

class Users extends React.Component {

	componentDidMount() {
		axios.get('https://social-network.samuraijs.com/api/1.0/users').then(
			respons => {
				this.props.setUsers(respons.data.items);
				console.log(respons.data.items);
			});
	}

	render() {
		return (
			<>
				<h1>Users:</h1>
				{
					this.props.users.map((user) => {
						return (
							<div className={style.user}>
								<div className={style.user__follow}>

									{
										user.photos.small
											? <img src={user.photos.small} className={style.user_photo} alt={'user_photo'}/>
											: <img src={manAvatar} className={style.user_photo} alt={'user_photo'}/>
									}

									{
										user.isFollow
											? <button
												className={style.user__followBtn}
												onClick={() => {
													this.props.unFollowUser(user.id)
												}}>unfollow</button>
											: <button
												className={style.user__followBtn}
												onClick={() => {
													this.props.followUser(user.id)
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
}

const mapStateToProps = (state) => {
	return {
		users: state.usersPage.users
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		setUsers: (users) => {
			dispatch(setUsersAC(users))
		},

		followUser: (userId) => {
			dispatch(followAC(userId))
		},

		unFollowUser: (userId) => {
			dispatch(unFollowAC(userId))
		},
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);