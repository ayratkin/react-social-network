// Libraries
import React from "react";
import axios from "axios";
import {connect} from "react-redux";
// Component styles
import style from './Users.module.css'
import {useDispatch, useSelector} from "react-redux";
import {followAC, setPageAC, setUsersAC, setUsersTotalCountAC} from '../../redux/users-reducer';
import {unFollowAC} from '../../redux/users-reducer';
import manAvatar from '../../../src/img/man-avatar.png'

class Users extends React.Component {

	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.selectedPage}&count=${this.props.pageSize}`).then(
			respons => {
				this.props.setUsers(respons.data.items);
				// this.props.setUsersCount(respons.data.totalCount);
				console.log(respons.data)
			});
	}

	onPageChanged(pageNumber) {
		this.props.setPage(pageNumber);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(
			respons => {
				this.props.setUsers(respons.data.items);
				console.log(respons.data.items);
			});
	}

	render() {

		let pagesCount = Math.ceil(this.props.usersCount / this.props.pageSize);
		let pages = []

		for (let i = 1; i <= pagesCount; i++) {
			pages.push(i)
		}


		return (
			<>
				<h1>Users:</h1>
				{
					pages.map((pageNumber) => {

						let isActive = () => {
							if (pageNumber === this.props.selectedPage) {
								return style.active
							}
						}

						return (
							<span
								className={isActive()}
								onClick={(e) => this.onPageChanged(pageNumber)}>
								{pageNumber}
							</span>
						)
					})
				}

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
		users: state.usersPage.users,
		usersCount: state.usersPage.usersCount,
		pageSize: state.usersPage.pageSize,
		selectedPage: state.usersPage.selectedPage,
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

		setPage: (selectedPage) => {
			dispatch(setPageAC(selectedPage))
		},

		setUsersCount: (totalCount) => {
			dispatch(setUsersTotalCountAC(totalCount))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);