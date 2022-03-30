import React from 'react';
import './whatsappForDesktop.styles.css';
import {BiBellOff} from 'react-icons/bi'

const WhatsappForDektop = () => (
    <div className= "whatsapp-for-desktop">
        <div className = "whatsapp-for-desktop-icon-part">
            <BiBellOff className= "whatsapp-for-desktop-icon" />
        </div>

        <div className = "whatsapp-for-desktop-rest-part">
            <h3 className= "whatsapp-for-desktop-h3">Get notified for new messages</h3>
            <h4 className="whatsapp-for-desktop-h4">Turn on desktop notifications</h4>
        </div>
    </div>
)

export default WhatsappForDektop;