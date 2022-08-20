import React from 'react';
// Component styles
import style from './ProfileInfo.module.css'

const ProfileInfo = () => {
  return (
    <>
      <div>
        <img
          className={style.profile_img}
          src='https://avatars.mds.yandex.net/get-znatoki/1649112/2a0000017c2a9d245297afae479a9188fab9/w1200'
          alt='cat img' />
      </div>
      <div>
        <p>ava + description</p>
      </div>
    </>
  )
}

export default ProfileInfo;