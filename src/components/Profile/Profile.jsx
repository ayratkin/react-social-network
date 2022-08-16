import React from 'react';
import style from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'

const Profile = () => {
    return <div className={style.profile}>
    <div>
      <img
      className={style.profile_img} 
      src='https://avatars.mds.yandex.net/get-znatoki/1649112/2a0000017c2a9d245297afae479a9188fab9/w1200'
      alt='cat img'/>
    </div>
    <div>
      ava + description
    </div>
    <MyPosts/>
  </div>
}

export default Profile;