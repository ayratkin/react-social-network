// Libraries
import React from 'react';

// Component styles
import style from './Post.module.css'

// Images import
import like from '../../../../img/like2.png'

// Action creators
import { likePostActionCreator } from '../../../../redux/profile-reducer';

const Post = (props) => {
  const pressLike = () => {
    props.dispatch(likePostActionCreator(props.postId));
  }

  return (
    <div className={style.post}>
      <img className={style.post__avatar} src="https://klike.net/uploads/posts/2019-03/1551511801_1.jpg" />
      <p className={style.post__text}> {props.message} </p>

      <div className={style.post__likes} onClick={pressLike}> 
        <img className={style.like_img} src={like} alt="like" />
            <p className={style.likeCount}>
              {props.likeCount}
            </p>
      </div>
    </div>
  )
}

export default Post;