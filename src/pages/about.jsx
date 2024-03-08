
import profileImage from '../assets/half-my-face.jpg'

function AboutMe(){
    return(
        <section className='about-container'>
            <h3 className='page-title'>
                About me
            </h3>
            <img className='about-pic' src={profileImage} alt="Profile Pic" />
            <section className='about-description'>
            <p className='about-text'>
                Just some guy who keeps complaining about bad websites.
            </p>
            <p className='about-text'>
                Decided to learn about web development so I can do better than these developers.
            </p>
            <p className='about-text'>
                Realized making websites are a lot harder than previously thought.
            </p>
            <p className='about-text'>
                Had multiple panic attacks during the bootcamp.
            </p>
            <p className='about-text'>
                After 6 months, gained the ability to make bad website.
            </p>
            <p className='about-text'>
                Hire me!
            </p>
            </section>
        </section>
    )
}

export default AboutMe