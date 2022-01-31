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
            <img
                src={EmailBtn}
                alt="Email Button"
            />
            <img
                src={LNBtn}
                alt="LinkedIn Button"
            />

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