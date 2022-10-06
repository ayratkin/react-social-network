// Libraries
import React from 'react';

// Component styles
import style from './Post.module.scss'

const Post = (props) => {
  return (
    <div className={style.post}>
      <img className={style.post__avatar} src="https://klike.net/uploads/posts/2019-03/1551511801_1.jpg" />
      <p className={style.post__text}> {props.message} </p>
      <p className={style.post__likes}> ({props.likeCount} likes) </p>
    </div>
  )
}

export default Post;