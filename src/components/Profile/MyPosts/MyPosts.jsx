import React from 'react';
// Component styles
import style from './MyPosts.module.css'
// Other components
import Post from './Post/Post';


const MyPosts = (props) => {
  let postsItems = props.postsData.map( (post) => {
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