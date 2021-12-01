import React from 'react';
import Teeko from '../icons/teeko.jpg';

export const AboutPage = () => {
    return (
        <>
            <section className="about-page">
                <h1>Holy shipping!</h1>
                <p>To be frank, I'm not much for writing descriptions of things I create. It's something I ought to practise more on, since it usually comes back and bites me in the arse.</p>
                <p>I wrote this application in conjunction with a dear friend, with the hopes of making a tedious task a bit easier to complete.</p>
                <p>If you're interested in the project, the source-code is available on <a className="spiffy-link" href="https://github.com/Dojan5/Truckle" rel="noreferrer" target="_blank">on GitHub</a>. If you're interested in me, you can find my website over at <a className="spiffy-link" href="https://grovecastle.me" rel="noreferrer" target="_blank"> here.</a></p>
                <p>Please enjoy this picture of my dog, Teeko.</p>
                <img alt="Teeko" src={Teeko} className="teeko-image" />
            </section>
        </>
    )
}