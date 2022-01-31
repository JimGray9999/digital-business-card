import React from 'react';
import profilePicture from '../images/my-profile-image.jpg';

export default function TopImage() {
    return (
        <header>
            <img 
                src={profilePicture} 
                alt="My picture"
                className="image-profile"
            />
        </header>
    )
}