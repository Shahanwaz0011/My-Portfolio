// Home.jsx
import './pages.css';
import { IoIosArrowDown } from "react-icons/io";
import Picture1 from '../assets/pictures/sktigpta.jpg';
import Skills from './Skills';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';

function Home() {
    return (
        <>
            <div className="pages">
                <div className="hero">
                    <div className='round'>
                        <div className="profile-picture">
                            <img src={Picture1} alt="Profile of Shahanwaz" />
                        </div>
                        
                        <div className="title">
                            <h1>Shahanwaz</h1>
                            <h2>here...</h2>
                        </div>

                        <button className='hero-btn' onClick={() => window.scrollBy({top: 200, behavior: 'smooth'})}>
                            <IoIosArrowDown />
                        </button>
                    </div>
                </div>
                
                {/* Add different sections */}
                <section id="about">
                    <About/>
                </section>

                <section id="projects">
                    <Projects/>
                </section>

                <section id="skills">
                    <Skills/>
                </section>

                <section id="contact">
                    <Contact/>
                </section>
            </div>
        </>
    );
}

export default Home;
