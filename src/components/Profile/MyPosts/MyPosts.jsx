// Libraries
import React from "react";
import {connect} from "react-redux";

// Component styles
import style from "./MyPosts.module.css";

// App components
import Post from "./Post/Post";

const MyPosts = (props) => {
	let postsItems = props.posts.map((post) => {
		return <Post message={post.message}
		             likesCount={post.likeCount}
		             postId={post.id}
		             isLiked={post.isLiked}
		             key={post.id}
		/>;
	});

	return (
		<>
			<div>{postsItems}</div>
		</>
	);
};

const mapStateToProps = (state) => {
	return {
		posts: state.profilePage.posts,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts);
