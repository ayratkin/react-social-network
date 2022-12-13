// Libraries
import React from "react";
import axios from "axios";
// Component styles
import style from './UsersPage.module.scss'
import manAvatar from '../../../src/img/man-avatar.png'
import preloader from '../../../src/img/preloader.gif'

import User from './User/User'

class Users extends React.Component {

	componentDidMount() {
		this.props.enablePreloader()
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.selectedPage}&count=${this.props.pageSize}`).then(
			respons => {
				this.props.disablePreloader()
				this.props.setUsers(respons.data.items);
				// this.props.setUsersCount(respons.data.totalCount);
				// console.log(respons.data)
			});
	}

	onPageChanged(pageNumber) {
		this.props.setPage(pageNumber);
		this.props.enablePreloader()
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(
			respons => {
				this.props.disablePreloader()
				this.props.setUsers(respons.data.items);
				// console.log(respons.data.items);
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

				{/* Enable or disable preloader */}
				{
					this.props.isLoading
						? <img src={preloader} alt=""/>
						: null
				}

				{/* Render list of users */}
				{
					this.props.users.map((user) => {
						return (
							<User user={user} key={user.id}/>
						)
					})
				}

				{/* Pagination buttons */}
				<div className={style.paginationContainer}>
					{
						pages.map((pageNumber) => {

							// Функция возвращает css класс: 'active' для выбранной страницы с пользователями
							let isActive = () => {
								if (pageNumber === this.props.selectedPage) {
									return style.active
								}
							}

							return (
								<div
									className={style.paginationItem + ' ' + isActive()}
									onClick={(e) => this.onPageChanged(pageNumber)}>
									{pageNumber}
								</div>
							)
						})
					}
				</div>
			</>
		)
	}
}

export default Users;