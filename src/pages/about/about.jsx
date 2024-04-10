import { useState } from "react";
import { useEffect } from "react";
import profileImage from '../../assets/profile/half-my-face.jpg'
import "./about.css"

function AboutMe(){
    const [isVisible, setIsVisable] = useState(false)
    useEffect(() =>{
        setIsVisable(true)
      }, []);
    
    return(
        <section className={`about-container ${isVisible ? 'visible' : ''}`}>
            <h2 className='page-title'>
                Hi! This is my face.
            </h2>
            <img className='about-pic' src={profileImage} alt="Profile Pic" />
            <section className='about-description'>
            <p className='about-text'>
                Just some guy who keeps complaining about bad websites.
            </p>
            <p className='about-text'>
                Decided to learn about web development so I can do better.
            </p>
            <p className='about-text'>
                Realized making websites are a lot harder than I thought.
            </p>
            <p className='about-text'>
                After multiple panic attacks, gained the ability to make bad website.
            </p>
            <p className='about-text'>
                Hire me!
            </p>
            </section>
        </section>
    )
}

export default AboutMe