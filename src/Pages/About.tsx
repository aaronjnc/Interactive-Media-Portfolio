import "./About.css";
import reactLogo from "../assets/react.svg";

function About() {
    return (
        <>
        <main className="container">
            <section id="aboutMe">
                <img src={reactLogo} alt="Headshot"/>
                <section id="aboutMeText">
                    <h1>Aaron King</h1>
                    <p> I am a current student at the University of Limerick.</p>
                </section>
            </section>
        </main>
        </>
    );
}

export default About;