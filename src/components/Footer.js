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
                <img
                    src={twIcon}
                    alt="Twitter"
                />
                <img
                    src={fbIcon}
                    alt="Facebook"
                />
                <img
                    src={inIcon}
                    alt="Instagram"
                />
                <img
                    src={ghIcon}
                    alt="GitHub"
                />
            </div>
        </footer>
    )
}