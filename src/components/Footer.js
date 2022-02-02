import React from 'react';
import fbIcon from '../images/Facebook-Icon.png';
import ghIcon from '../images/GitHub-Icon.png';
import twIcon from '../images/Twitter-Icon.png';
import inIcon from '../images/Instagram-Icon.png';


// footer with social media links
export default function Footer() {
    
    return (
        <footer>
            <div>
                <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
                    <img
                        src={twIcon}
                        alt="Twitter"
                    />
                </a>
                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                    <img
                        src={fbIcon}
                        alt="Facebook"
                    />
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                    <img
                        src={inIcon}
                        alt="Instagram"
                    />
                </a>
                <a href="https://github.com/JimGray9999" target="_blank" rel="noreferrer">
                    <img
                        src={ghIcon}
                        alt="GitHub"
                    />
                </a>
            </div>
        </footer>
    )
}