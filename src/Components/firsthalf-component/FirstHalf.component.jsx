import React from 'react';
import './FirstHalf.styles.css';
import TitleBar from '../title-bar/title-bar.component';
import WhatsappForDektop from '../whatsappForDesktop/whatsappForDesktop.component';
import Search from '../search-component/search.component';
import Archive from '../archive/archive.component';
import ContactDirectory from '../contact-directory/contact-directory.component';

const FirstHalf = () => (
    <div className = "first-half">
        <TitleBar />
        <WhatsappForDektop />
        <Search />
        <Archive />
        <ContactDirectory />
    </div>
)

export default FirstHalf;