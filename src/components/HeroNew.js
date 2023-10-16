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
import sponsorData from './SponsorData';
import Sponsor from './Sponsor';

const HeroNew = () => {
    return (
        <div className='Hero-Container'>
            <div className='content-div'>
                <div className='hero-img'>
                    <img src={require('../assets/dev-oddesey.png')} alt="Hero" className='imgHero' />
                </div>
                <div className='hero-content'>
                    <h1>Dev Odyssey Hackathon: Igniting the AI Revolution</h1>

                    <p>Are you ready to embark on a journey into the future of technology? Welcome to the Dev Odyssey Hackathon, where innovation, collaboration, and the spirit of adventure converge to explore the fascinating realm of Artificial Intelligence (AI). Our sub-topic for this exciting event is the "AI Revolution," a theme that promises to unlock endless possibilities and reshape the landscape of technology as we know it.</p>

                    <p><strong>Event Overview:</strong></p>

                    <p><strong>Unleashing the AI Revolution:</strong></p>
                    <p>Artificial Intelligence has taken the world by storm, revolutionizing industries and changing the way we live, work, and communicate. Dev Odyssey Hackathon: AI Revolution is your opportunity to be a part of this transformative journey. Here, developers, data scientists, machine learning enthusiasts, and innovators from all backgrounds will come together to explore AI's frontiers and craft solutions that can shape the future.</p>

                    <p><strong>Why AI Revolution Matters:</strong></p>
                    <p>AI has left no sector untouched. From healthcare and finance to education and entertainment, the applications are limitless. The AI Revolution is driven by advancements in machine learning, neural networks, computer vision, and natural language processing, offering unprecedented potential for innovation.</p>

                    <p>At the Dev Odyssey Hackathon, we want to encourage you to tackle the challenges and opportunities presented by AI in a constructive and creative way. Whether you are a seasoned AI expert or a curious newcomer, you'll find a place in our community to learn, share, and create.</p>

                    <p><strong>What to Expect at Dev Odyssey Hackathon: AI Revolution:</strong></p>
                    <ul>
                        <li><strong>Engaging Workshops:</strong> We have curated a series of workshops led by AI experts from various domains. They will provide you with the knowledge and tools necessary to tackle AI-related challenges.</li>
                        <li><strong>Innovative Challenges:</strong> Our hackathon challenges are designed to push the boundaries of AI. From building recommendation systems to developing autonomous agents, you'll have the chance to work on exciting projects.</li>
                        <li><strong>Collaborative Environment:</strong> Dev Odyssey emphasizes teamwork. You can join or form teams, collaborate with diverse skillsets, and learn from each other.</li>
                        <li><strong>Mentorship:</strong> Seasoned mentors will be on hand to guide you through technical hurdles and provide insights into AI best practices.</li>
                        <li><strong>Prizes and Recognition:</strong> Compete for exciting prizes and recognition for your accomplishments.</li>
                        <li><strong>Networking:</strong> Build connections with fellow innovators, mentors, and potential employers.</li>
                        <li><strong>Innovation Showcase:</strong> The top projects will be showcased in a dedicated event, where you can present your creations to a global audience.</li>
                    </ul>

                    <p><strong>Who Should Attend:</strong></p>
                    <ul>
                        <li>Developers interested in AI and machine learning</li>
                        <li>Data scientists and analysts</li>
                        <li>Students and researchers</li>
                        <li>Innovators and entrepreneurs</li>
                        <li>AI enthusiasts and hobbyists</li>
                    </ul>

                    <p><strong>Join Us on this Odyssey:</strong></p>
                    <p>Dev Odyssey Hackathon: AI Revolution promises to be an inspiring journey that will transform your understanding of AI, connect you with like-minded individuals, and provide you with the skills and insights to take your AI projects to the next level. The world is at the cusp of a technological transformation, and you can be a part of it.</p>

                    <p>Don't miss this opportunity to ignite your passion for AI, embrace the AI Revolution, and make a difference in the world of technology. Join us at Dev Odyssey Hackathon, and let's embark on this exciting journey together.</p>

                    <p>Are you ready to embark on the AI Odyssey? Register now and be part of the AI Revolution!</p>
                    <div className='Link-Content'>
                        <LinkDiv name="Email" Link="The Link" img={Email} />
                        <LinkDiv name="Website" Link="The Link" img={Website} />
                        <LinkDiv name="Twitter" Link="The Link" img={Twitter} />
                        <LinkDiv name="Telegram" Link="The Link" img={Telegram} />
                        <LinkDiv name="LinkedIn" Link="The Link" img={linkedin} />
                        <LinkDiv name="Instagram" Link="The Link" img={insta} />
                    </div>
                    <FAQ />
                    <div className="sponsor-list">
                        <h1>Sponsors</h1>
                        {sponsorData.map((sponsor) => (
                            <Sponsor key={sponsor.id} image={sponsor.image} name={sponsor.name} />
                        ))}
                    </div>
                </div>
            </div>
            <div className='sticky-div'>
                <div className='sticky-content'>
                    <h3 className='sticky-div-head'> Runs From</h3>
                    <h2> Oct 19 - 21,2023</h2>
                    <h3 className='sticky-div-head'> Happening </h3>
                    <h2> Nagpur,India</h2>
                </div>
                <a href="#">
                    <button className='btn'>Apply Now</button>
                </a>
            </div>
        </div>
    )
}

export default HeroNew;