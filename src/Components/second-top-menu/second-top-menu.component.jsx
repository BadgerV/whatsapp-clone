import React from 'react';
import './second-top-menu.styles.css';
import ProfilePic from '../../Asset/profile-pic.jpg';

const SecondTopMenu = () => {
    return (
        <div className="second__top__menu__container">
                <img src={ProfilePic} alt="DP" className='second__top__menu__image' />
                <span className='second__top_menu_name-text'>Chinenye</span>
        </div>
    )
};

export default SecondTopMenu;