import React from "react";
import styles from "./User.module.scss";
import manAvatar from "../../../img/man-avatar.png";
import {useDispatch, useSelector} from "react-redux";
import {followAC, unFollowAC} from "../../../redux/users-reducer";
import { Link } from "react-router-dom";

const User = (props) => {

	const users = useSelector(state => {
		const users = state.usersPage.users;
		return users;
	})

	const dispatch = useDispatch();

	return (
		<>
			<div className={styles.user}>
				<div className={styles.follow}>

					<Link to={`/profile/${props.user.id}`}>
					{
						props.user.photos.small
							? <img src={props.user.photos.small} className={styles.userPhoto} alt={'user_photo'}/>
							: <img src={manAvatar} className={styles.userPhoto} alt={'user_photo'}/>
					}
					</Link>

					{/* Render "Follow" or "Unfollow" button */}
					{
						props.user.isFollow
							? <button
								className={styles.followBtn + " " + styles.blackBtn}
								onClick={() => {
									dispatch(unFollowAC(props.user.id))
								}}>Unfollow</button>
							: <button
								className={styles.followBtn}
								onClick={() => {
									dispatch(followAC(props.user.id))
								}}>Follow</button>
					}

				</div>
				<div className={styles.descriptions}>
					<div className={styles.column}>
						<p className={styles.fullName}>{props.user.name}</p>
						<p className={styles.status}>{props.user.status}</p>
					</div>
					<div className={styles.column}>
						{props.user.country}
					</div>
				</div>
			</div>
		</>
	)
}

export default User;