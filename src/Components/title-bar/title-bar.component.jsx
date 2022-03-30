import React, {Fragment} from 'react';
import './title-bar.styles.css';
import profilePicture from '../../Asset/profile-pic.jpg'
import {GiRecycle} from 'react-icons/gi'
import {MdMessage} from 'react-icons/md'
import {BsThreeDotsVertical} from 'react-icons/bs'

const TitleBar = () => (
    <div className = "title-bar">
        <img src= {profilePicture} alt="" className='profile-pic title-bar_profile-pic' />

        <div className="title-bar_icons">
            <GiRecycle className = "title-bar_icon" />
            <MdMessage className = "title-bar_icon" />
            <BsThreeDotsVertical className = "title-bar_icon" />
        </div>
    </div>
)

export default TitleBar;