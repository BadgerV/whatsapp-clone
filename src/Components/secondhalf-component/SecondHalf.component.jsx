import React from 'react';
import Chat from '../chat/chat.component';
import SecondTopMenu from '../second-top-menu/second-top-menu.component';
import './SecondHalf.styles.css';
import ChatLayOut from '../chat-functionalities/chat-layout/chat-layout.component';

const SecondHalf = () => (
    <div className="second-half">
        <SecondTopMenu/>
        <ChatLayOut />
    </div>
)

export default SecondHalf;