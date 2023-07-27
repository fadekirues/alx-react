import React from 'react';
import './Notifications.css';
import closeIcon from './close-icon.png';
import { getLatestNotification } from './utils';

export default function Notifications() {
    return (
        <div className="Notifications">
            <p>Here is the list of notifications</p>
            <button style={{
                position: 'absolute',
                top: '0.25rem',
                right: '0.25rem',
                border: 'none',
                backgroundColor: '#fff'
            }}aria-label="Close" onClick={() => console.log('Close button has been clicked')}>
                <img src={closeIcon} alt="close-icon" />
                </button>
                <ul>
                    <li data-priority="default">New course available</li>
                    <li data-priority="urgent">New resume available</li>
                    <li data-priority="urgent" dangerouslySetInnerHTML={{__html: getLatestNotification()}}></li>
                </ul>
        </div>
    );
}