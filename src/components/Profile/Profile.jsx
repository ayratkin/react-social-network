import React from 'react';
// Component styles
import style from './Profile.module.css'
// Other components
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {
  return (
    <>
      <div className={style.profile}>
        <ProfileInfo />
        <MyPosts postsData={props.postsData} />
      </div>
    </>
  )
}

export default Profile;