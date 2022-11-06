// Libraries
import React from "react";
import { connect } from "react-redux";

// Component styles
import style from "./Post.module.css";

// Images import
import like from "../../../../img/like2.png";

// Action creators
import { likePostActionCreator } from "../../../../redux/profile-reducer";

const Post = (props) => {

  const pressLike = () => {
    props.dispatch(likePostActionCreator(props.postId));
  };

  return (
    <div className={style.post}>
      <img
        className={style.post__avatar}
        src="https://klike.net/uploads/posts/2019-03/1551511801_1.jpg"
        alt='post-avatar'
      />
      <p className={style.post__text}> {props.message} </p>

      <div className={style.post__likes} onClick={props.onLike}>
        <img className={style.like_img} src={like} alt="like" />
        <p className={style.likeCount}>{props.likes}</p>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    likes: state.profilePage.likeCount,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onLike: () => {
      dispatch(likePostActionCreator());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);
