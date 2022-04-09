import React from 'react';
import './second-top-menu.styles.css';
import ProfilePic from '../../Asset/profile-pic.jpg';
import {BsCameraVideoFill, BsTelephonePlusFill, BsThreeDotsVertical} from 'react-icons/bs';

const SecondTopMenu = () => {
    return (
        <div className="second__top__menu__container">
                <img src={ProfilePic} alt="DP" className='second__top__menu__image' />
                
                <div className="second__top__menu__others">
                <span className='second__top_menu_name-text'>Chinenye</span>
                    <div className='second__top__menu__icon'>
                        <BsCameraVideoFill className='second__icon'/>
                        <BsTelephonePlusFill className='second__icon '/>
                        <BsThreeDotsVertical className='second__icon' />
                    </div>
                </div>
        </div>
    )
};

export default SecondTopMenu;