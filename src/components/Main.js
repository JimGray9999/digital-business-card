import React from 'react';
import EmailBtn from '../images/Email-Button.png'
import LNBtn from '../images/LN-Button.png'

// exports the main section of the app, showing my details
export default function Main() {
    return (
        <main>
            <h1>Jim Gray</h1>
            <h3>Software Test Engineer</h3>
            <h4>jgray8689@gmail.com</h4>
            <a href="mailto:jgray8689@gmail.com" target="_blank" rel="noreferrer">
                <img
                    src={EmailBtn}
                    alt="Email Button"
                />
            </a>
            <a href="https://www.linkedin.com/in/jgray00/" target="_blank" rel="noreferrer">
                <img
                    src={LNBtn}
                    alt="LinkedIn Button"
                />
            </a>
            <div>
                <h2>About</h2>
                <p>about me.</p>
            </div>
            <div>
                <h2>Interests</h2>
                <p>what interests me...</p>
            </div>
        </main>
    )
}