import Footer from "./footer/footer"
import "./portafolio.css"

import { Link } from "react-router-dom"

// Icons for services section
const CubeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="icon"
  >
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
    <polyline points="3.29 7 12 12 20.71 7"></polyline>
    <line x1="12" y1="22" x2="12" y2="12"></line>
  </svg>
)

const LayersIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="icon"
  >
    <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
    <polyline points="2 17 12 22 22 17"></polyline>
    <polyline points="2 12 12 17 22 12"></polyline>
  </svg>
)

const PaletteIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="icon"
  >
    <circle cx="13.5" cy="6.5" r=".5"></circle>
    <circle cx="17.5" cy="10.5" r=".5"></circle>
    <circle cx="8.5" cy="7.5" r=".5"></circle>
    <circle cx="6.5" cy="12.5" r=".5"></circle>
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path>
  </svg>
)

const HeadphonesIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="icon"
  >
    <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
  </svg>
)

const ActivityIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="icon"
  >
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
  </svg>
)

const BarChartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="icon"
  >
    <rect x="3" y="12" width="6" height="8" rx="1"></rect>
    <rect x="9" y="8" width="6" height="12" rx="1"></rect>
    <rect x="15" y="4" width="6" height="16" rx="1"></rect>
  </svg>
)

const Home = () => {
  return (
    <div className="portfolio">
      {/* Header/Navigation */}
      <header className="header">
        <div className="logo">
          <div className="logo-square"></div>
          <span className="logo-text">Juan Esteban Ramirez Perdomo</span>
        </div>
        <nav className="nav">
          <Link to ="/" className="nav-link">
            Home
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h2 className="hero-subtitle">Hi There!</h2>
          <h1 className="hero-title">
            I am Developer<span className="text-accent">|</span>
          </h1>
          <p className="hero-description">Student of Interactive Media Design with an interest in front-end development, focused on creating innovative and user-centric digital solutions.</p>
        </div>
        <div className="hero-image">
          {/* imagen del banner */}
          <img className="image-mia"src="./mia2.png" alt="Developer portrait" />
        </div>
      </section>

      {/* Contact Info Bar */}
      <section className="contact-bar">
        <div className="contact-container">
          <div className="contact-item">
            <span className="contact-label">Email</span>
            <span className="contact-value">Juanestebanrp123@gmail.com</span>
          </div>
          <div className="contact-item">
            <span className="contact-label">Location</span>
            <span className="contact-value">Cali, Col</span>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="about">
        <div className="about-container">
          <div className="about-image">
            {/* Image */}
            <img src="./mia.jpg" alt="Profile picture" />
          </div>
          <div className="about-content">
            <h3 className="about-subtitle">Who am I?</h3>
            <h2 className="about-title">I'm Juan Esteban Ramirez, a UX Designer and Front-End Developer</h2>
            <p className="about-description">
            Interactive Media Design student with a strong interest in front-end development, focused on creating innovative and user-centered digital solutions.
            I have 6 months of experience in UX/UI for Bancóldex, and knowledge of programming languages such as JavaScript, HTML, and CSS, as well as frameworks like React and Tailwind.
            </p>
            <div className="about-details">
              <div className="about-detail">
                <span className="detail-label">Name:</span>
                <span className="detail-value">Juan Esteban Ramirez</span>
              </div>
              <div className="about-detail">
                <span className="detail-label">From:</span>
                <span className="detail-value">Cali Col</span>
              </div>
              <div className="about-detail">
                <span className="detail-label">Email:</span>
                <span className="detail-value">Juanestebanrp123@gmail.com</span>
              </div>
            </div>
            <a href="/cv.pdf" download>
              <button className="button">
                Download CV
              </button>
            </a>

          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="services-container">
          <h2 className="services-title">
            My Services
            <span className="services-background">SERVICES</span>
          </h2>
          <div className="services-grid">
            {/* Service 1 */}
            <div className="service-card">
              <div className="service-icon">
                <CubeIcon />
              </div>
              <h3 className="service-title">Web Development</h3>
              <p className="service-description">Developer with experience in front-end and back-end, working with frameworks such as React.</p>
            </div>

            {/* Service 2 */}
            <div className="service-card">
              <div className="service-icon">
                <LayersIcon />
              </div>
              <h3 className="service-title">User-Centered UX/UI Design</h3>
              <p className="service-description">Research, prototyping, and design of functional and visually appealing interfaces.  </p>
            </div>

            {/* Service 4 */}
            <div className="service-card">
              <div className="service-icon">
                <HeadphonesIcon />
              </div>
              <h3 className="service-title">Innovative Digital Solutions</h3>
              <p className="service-description">Building products aligned with user needs and strategic business goals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="services-container">
          <h2 className="services-title">
            My Projects
            <span className="services-background">MY PROJECTS</span>
          </h2>
          <div className="services-grid">
            {/* Service 1 */}
            <div className="service-card">
                <div className="service-icon">
                  <img src="./conecta.png" alt="Web Development icon" className="max-w-[300px] max-h-[300px] object-contain" />
                </div>

                <h3 className="service-title">Conecta digital</h3>
                
                <p className="service-description">
                I prototyped user-centered interfaces and conducted research to understand the client and their needs.
                </p>
                <a
                href="https://github.com/Jramirezzz/Recomendation-system?tab=readme-ov-file"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#420407] text-[#DBBEA9] px-8 py-4 rounded-xl text-base font-medium no-underline hover:bg-[#DBBEA9] hover:text-[#0D0D0D] transition-colors duration-300 mt-6 mb-6 mx-auto"
              >
                Ver más
              </a>
              </div>


            {/* Service 2 */}
            <div className="service-card">
              <div className="service-icon">
              <img src="./prodont.png" alt="Web Development icon" className="max-w-[300px] max-h-[300px] object-contain" />
              </div>

              <h3 className="service-title">Prodont Dental Clinic</h3>
              
              <p className="service-description">
              I designed interfaces, conducted user research, and developed the website for them.
              </p>

              <a
                href="https://github.com/Jramirezzz/Recomendation-system?tab=readme-ov-file"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#420407] text-[#DBBEA9] px-8 py-4 rounded-xl text-base font-medium no-underline hover:bg-[#DBBEA9] hover:text-[#0D0D0D] transition-colors duration-300 mt-6 mb-6 mx-auto"
              >
                Ver más
              </a>
            </div>

            {/* Service 4 */}
            <div className="service-card">
              <div className="service-icon">
              <img src="./recommends.png" alt="Web Development icon" className="max-w-[260px] max-h-[260px] object-contain" />
              </div>

              <h3 className="service-title">Recommendation system</h3>
              
              <p className="service-description">
              I developed a system that allows players to recommend games to each other based on their preferences.
              </p>

              <a
                href="https://github.com/Jramirezzz/Recomendation-system?tab=readme-ov-file"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#420407] text-[#DBBEA9] px-8 py-4 rounded-xl text-base font-medium no-underline hover:bg-[#DBBEA9] hover:text-[#0D0D0D] transition-colors duration-300 mt-6 mb-6 mx-auto"
              >
                Ver más
              </a>
            </div>
          </div>
        </div>
        <div className="mt-32 pt-12">
          <Footer />
        </div>

      </section>
    </div>
  )
}

export default Home
