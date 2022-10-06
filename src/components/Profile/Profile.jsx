// Libraries
import React from 'react';

// Component styles
import style from './Profile.module.scss'

// App components
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import AddPost from './AddPost/AddPost';

const Profile = (props) => {
  return (
    <>
      <div className={style.profile}>
        <ProfileInfo />
        <MyPosts postItems={props.state} />
        <AddPost postText={props.state.postText}
                 dispatch={props.dispatch}/>
      </div>
    </>
  )
}

export default Profile;