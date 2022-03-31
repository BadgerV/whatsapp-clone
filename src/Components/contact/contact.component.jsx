import React from 'react';
import './contact.styles.css';
import dp from '../../Asset/profile-pic.jpg';
import {IoCheckmarkDoneOutline} from 'react-icons/io5';

const Contact = () => (
    <div className = "contact" >
        <div className="contact-dp">
            <img src={dp} alt="" className='contact-display-picture' />
        </div>

        <div className="contact-others">
            <h2 className="contact-name">Richard</h2>
            
            <div className="read-and-message">
                <IoCheckmarkDoneOutline className = "contact-icon"/>
                <h4 className="contact-message">This is to remind you that there </h4>
            </div>
        </div>

    </div>
);

export default Contact;