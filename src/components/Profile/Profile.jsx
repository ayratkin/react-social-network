import React from 'react';
// Component styles
import style from './Profile.module.css'
// Other components
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import AddPost from './AddPost/AddPost';

const Profile = (props) => {
  return (
    <>
      <div className={style.profile}>
        <ProfileInfo />
        <MyPosts postItems={props.state} />
        <AddPost addPost={props.addPost} />
      </div>
    </>
  )
}

export default Profile;