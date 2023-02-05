import React from "react";
import {connect} from "react-redux";
import {
	disablePreloader,
	enablePreloader,
	followAC,
	setPageAC,
	setUsersAC,
	setUsersTotalCountAC
} from '../../redux/users-reducer';
import {unFollowAC} from '../../redux/users-reducer';
import Users from "./UsersPage";

const mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		usersCount: state.usersPage.usersCount,
		pageSize: state.usersPage.pageSize,
		selectedPage: state.usersPage.selectedPage,
		isLoading: state.usersPage.isLoading,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		setUsers: (users) => {
			dispatch(setUsersAC(users))
		},

		setPage: (selectedPage) => {
			dispatch(setPageAC(selectedPage))
		},

		setUsersCount: (totalCount) => {
			dispatch(setUsersTotalCountAC(totalCount))
		},

		enablePreloader: () => {
			dispatch(enablePreloader())
		},

		disablePreloader: () => {
			dispatch(disablePreloader())
		},
	}
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;