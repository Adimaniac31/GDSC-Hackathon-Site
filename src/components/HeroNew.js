import React from 'react';
import "./Hero.css";
import "./HeroNew.css";
import LinkDiv from './LinkDiv';
import Email from "../assets/email.png";
import Website from "../assets/website.jpg";
import insta from "../assets/insta.png";
import linkedin from "../assets/linkedin.webp";
import Telegram from "../assets/Telegram.png";
import Twitter from "../assets/twitter.png";
import FAQ from './FAQ';


const HeroNew = () => {
    return (
        <div className='Hero-Container'>
            <div className='content-div'>
                <div className='hero-img'>
                    <img src={require('../assets/hero.png')} alt="Hero" className='imgHero' />
                </div>
                <div className='hero-content'>
                    <p>
                        This year, CoinDCX is taking the excitement to unprecedented heights as we present the World’s Largest Multi-Chain Multi-Protocol Hackathon - Unfold 2023✨
                    </p>
                    <p>
                        The ultimate platform where the Web3 community unites from all corners of India and beyond, both in-person and virtually, to facilitate collaboration, innovation, and knowledge sharing in the Web3 space. The canvas is yours, the possibilities are endless, and the future is waiting.
                    </p>
                    <p>What do we have in-store for you? 🎁</p>
                    <ul>
                        <li>🌍 1000 Developers, Countless Possibilities!</li>
                        <li>This year, CoinDCX is pushing boundaries like never before.</li>
                        <li>With over 1000 developers converging from across the globe, prepare to be part of history in the making.</li>
                        <li>Collaborate and exchange ideas with like-minded builders who share your passion for pioneering change.</li>
                        <li>💡 Insights for Tomorrow</li>
                        <li>Immerse yourself in riveting discussions, keynotes, and fireside chats with the industry’s most influential leaders, entrepreneurs, and disruptors.</li>
                        <li>Network with people building and disrupting standards in the industry.</li>
                        <li>Gain unparalleled insights into the realms of Web3 and explore the limitless potential of decentralized landscapes.</li>
                        <li>🛠 Craft, Collaborate, Conquer</li>
                        <li>Whether you're a coding maestro working solo or a dynamic team with a shared vision, seize the opportunity to build on the chain of your choice.</li>
                        <li>With a treasure trove of $100k+ in bounties up for grabs, your ingenuity is your greatest asset.</li>
                    </ul>
                    <div className='Link-Content'>
                        <LinkDiv name="Email" Link="The Link" img={Email} />
                        <LinkDiv name="Website" Link="The Link" img={Website} />
                        <LinkDiv name="Twitter" Link="The Link" img={Twitter} />
                        <LinkDiv name="Telegram" Link="The Link" img={Telegram} />
                        <LinkDiv name="LinkedIn" Link="The Link" img={linkedin} />
                        <LinkDiv name="Instagram" Link="The Link" img={insta} />
                    </div>
                    <FAQ />
                </div>
            </div>
            <div className='sticky-div'>
                <div className='sticky-content'>
                    <h3 className='sticky-div-head'> Runs From</h3>
                    <h2> Oct 19 - 21,2023</h2>
                    <h3 className='sticky-div-head'> Happening </h3>
                    <h2> Nagpur,India</h2>
                </div>
                <button className='btn'>Apply Now</button>
            </div>
        </div>
    )
}

export default HeroNew;