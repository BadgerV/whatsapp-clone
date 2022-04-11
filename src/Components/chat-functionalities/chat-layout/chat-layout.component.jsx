import React from 'react';
import './chat-layout.styles.css';
import ChatSent from '../chat-sent/chat-sent-component';
import ChatRecieved from '../chat-recieved/chat-recieved-component';
import {MdSend} from 'react-icons/md'

const ChatLayOut = () => {
    return(
        <div className="chat-layout-app">
            <ChatSent />
            <ChatRecieved />
            <ChatSent />
            <ChatSent />
            <ChatRecieved />

           <div className="chat-layout-app_others">
                <MdSend  className= "chat-layout-icon"/>
                <input type="text" className='chat-layout-input' /> 
           </div>
        
        </div>
    )
};

export default ChatLayOut;