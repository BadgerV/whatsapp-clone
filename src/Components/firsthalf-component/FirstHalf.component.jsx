import React from 'react';
import './FirstHalf.styles.css';
import TitleBar from '../title-bar/title-bar.component';
import WhatsappForDektop from '../whatsappForDesktop/whatsappForDesktop.component';
import Search from '../search-component/search.component';

const FirstHalf = () => (
    <div className = "first-half">
        <TitleBar />
        <WhatsappForDektop />
        <Search />
    </div>
)

export default FirstHalf;