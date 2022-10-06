// Libraries
import React from 'react';

// Component styles
import style from './ProfileInfo.module.scss'

const ProfileInfo = () => {
  return (
    <>
      <div className={style.profile_container}>

        {/* Avatar */}
        <div className={style.profile_img_container}>
          <img
            className={style.profile_img}
            src='https://avatars.mds.yandex.net/get-znatoki/1649112/2a0000017c2a9d245297afae479a9188fab9/w1200'
            alt='cat img' />
        </div>

        <div className={style.wrapper}>
          {/* Name and Surname of The owner of the page */}
          <div className={style.profile_name}>
            <p>Koshechkin Vasily</p>
          </div>

          <div className={style.online}>
            <p>Online</p>
          </div>
        </div>


      </div>
    </>
  )
}

export default ProfileInfo;