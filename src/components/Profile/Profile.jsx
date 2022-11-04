// Libraries
import React from 'react';

// Component styles
import style from './Profile.module.css'

// App components
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import AddPost from './AddPost/AddPost';

const Profile = (props) => {
  // console.log(props.state)
  return (
    <>
      <div className={style.profile}>
        <ProfileInfo />
        <MyPosts />
        <AddPost />
      </div>
    </>
  )
}

export default Profile;