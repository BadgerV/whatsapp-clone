import React from 'react';
import './archive.styles.css';
import {BiArchiveIn} from 'react-icons/bi'

const Archive = () => (
    <div className="archive">
        <BiArchiveIn className="archive-icon"/>
        <h2 className="archive-h2">Archived</h2>
    </div>
);

export default Archive;