import React from 'react';
import EmailBtn from '../images/Email-Button.png'
import LNBtn from '../images/LN-Button.png'

export default function Main() {
    return (
        <main>
            <h1>Jim Gray</h1>
            <h2>Software Test Engineer</h2>
            <h4>jgray8689@gmail.com</h4>
            <img
                src={EmailBtn}
                alt="Email Button"
            />
            <img
                src={LNBtn}
                alt="LinkedIn Button"
            />
        </main>
    )
}