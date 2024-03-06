
import profileImage from '../assets/half-my-face.jpg'

function AboutMe(){
    return(
        <section>
            <h3>
                About me
            </h3>
            <img src={profileImage} alt="Profile Pic" />
            <section>
            <p>
                Just some guy who keeps complaining about bad websites.
            </p>
            <p>
                Decided to learn about web development so I can do better than these developers.
            </p>
            <p>
                Turns out making websites are a lot harder than previously thought.
            </p>
            <p>
                Had multiple panic attacks during the bootcamp.
            </p>
            <p>
                After 6 months, gained the ability to make bad website.
            </p>
            <p>
                Hire me!
            </p>
            </section>
            <section>
                <section>
{/* frontend */}
                </section>
                <section>
{/* Backend */}
                </section>
                <section>
{/* Other */}
                </section>
            </section>

        </section>
    )
}

export default AboutMe