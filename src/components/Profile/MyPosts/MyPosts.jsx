// Libraries
import React from 'react';

// Component styles
import style from './MyPosts.module.scss'

// App components
import Post from './Post/Post';


const MyPosts = (props) => {

  let postsItems = props.postItems.posts.map( (post) => {
    return (<Post message={post.message} likeCount={post.likeCount}/>)
  }) 

    return (
    <>
      <div>
      { postsItems }
      </div>
    </> 
    )
}

export default MyPosts;