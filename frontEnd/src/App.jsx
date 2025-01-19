import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const showSection = (sectionId) => {
    event.preventDefault();
    setActiveSection(sectionId);
  };

  return (
    <div className="container">
      {/* Left Bar */}
      <div className="left-bar">
        <div className="profile-pic">
          <img src="my-avatar.png" alt="Profile Picture" />
        </div>
        <h2>Pranesh S</h2>
        <p className="tagline">
          Passionate ECE Student<br />
          Bridging Hardware and Software
        </p>
        <div className="info">
          <div className="info-row">
            <div className="info-heading"><strong>Phone:</strong></div>
            <div className="info-value">+91 8248926449</div>
          </div>
          <div className="info-row">
            <div className="info-heading"><strong>Email:</strong></div>
            <div className="info-value">praneshyou@gmail.com</div>
          </div>
          <div className="info-row">
            <div className="info-heading"><strong>Address:</strong></div>
            <div className="info-value">Coimbatore, Tamil Nadu</div>
          </div>
          <div className="info-row">
            <div className="info-heading"><strong>College:</strong></div>
            <div className="info-value">Sri Krishna College of Engineering and Technology</div>
          </div>
          <div className="info-row">
            <div className="info-heading"><strong>Degree:</strong></div>
            <div className="info-value">Bachelor of Engineering</div>
          </div>
          <div className="info-row">
            <div className="info-heading"><strong>Branch:</strong></div>
            <div className="info-value">Electronics and Communication</div>
          </div>
          <div className="info-row">
            <div className="info-heading"><strong>Year:</strong></div>
            <div className="info-value">2nd Year</div>
          </div>
          <div className="info-row">
            <div className="info-heading"><strong>Programming Languages:</strong></div>
            <div className="info-value">C, C++, Java, Python, JavaScript, Assembly</div>
          </div>
        </div>
      </div>

      {/* Right Bar */}
      <div className="right-bar">
        <nav className="navbar">
          <a href="#home" onClick={() => showSection('home')}>Home</a>
          <a href="#skills" onClick={() => showSection('skills')}>Skills</a>
          <a href="#project" onClick={() => showSection('project')}>Project</a>
          <a href="#contact" onClick={() => showSection('contact')}>Contact</a>
        </nav>
        <div id="home" className={`content-section ${activeSection === 'home' ? 'active' : ''}`}>
          <div className="home_container">
            <h2>Hello,</h2>
            <h2>I am Pranesh S</h2>
            <p className="descrption">Proactive ECE student with a strong foundation in electronics design, programming, and signal processing.</p>
            <p className="descrption">
              Enthusiastic Electronics and Communication Engineering student seeking to leverage technical skills and knowledge in circuits, communication systems, and embedded technologies to contribute to innovative projects and professional growth.
            </p>
            <p className="descrption">
              Driven by a keen interest in embedded systems and communication technologies, I am eager to translate my technical expertise into practical solutions.
            </p>
          </div>
          <div className="home_container">
            <h2>Education</h2>
            <dl>
              <dt>
                <h3>University of Engineering</h3>
              </dt>
              <dd>Sri Krishna College of engineering and Technology, Coimbatore — B.E.ECE</dd>
              <dd>Nov 2023<br />I sem CGPA: 8.04</dd>
              <dt>
                <h3>High School Education</h3>
              </dt>
              <dd>SSVM School, Coimbatore — HSC</dd>
              <dd>Mar 2023<br />percentage: 93.5</dd>
            </dl>
          </div>
        </div>
        <div id="project" className={`content-section ${activeSection === 'project' ? 'active' : ''}`}>
          <div className="project_container">
            <h2>JDBC Hospital Management</h2>
            <p className="descrption">This project involves designing a hospital management system using Java Database Connectivity (JDBC).</p>
          </div>
          <div className="project_container">
            <h2>People Counting Using IR Sensor and Embedded Systems</h2>
            <p className="descrption">This project utilizes Infrared (IR) sensors and embedded systems to develop a people-counting device.</p>
          </div>
          <div className="project_container">
            <h2>Smart Lock System</h2>
            <p className="descrption">This embedded system project features a secure smart lock controlled via a keypad.</p>
          </div>
          <div className="project_container">
            <h2>Smart Home Automation</h2>
            <p className="descrption">The Smart Home Automation project focuses on creating a system to control home appliances remotely.</p>
          </div>
        </div>
        <div id="skills" className={`content-section ${activeSection === 'skills' ? 'active' : ''}`}>
          <div className="skills_container">
            <h2>Technical Skills</h2>
            <ul>
              <li>Problem Solving</li>
              <li>Data Structures and Algorithms</li>
              <li>Web development</li>
              <li>Database Management System</li>
              <li>JDBC connectivity</li>
              <li>Android App Development</li>
              <li>Digital System Design</li>
              <li>Embedded System</li>
              <li>Circuit analysis</li>
              <li>Electronic Circuits</li>
            </ul>
          </div>
          <div className="skills_container">
            <h2>Programming Skills</h2>
            <ul>
              <li>Assembly Programming</li>
              <li>C Programming</li>
              <li>C++ Programming</li>
              <li>JAVA Programming</li>
              <li>Python Programming</li>
              <li>MySQL</li>
              <li>Bash</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
          </div>
          <div className="skills_container">
            <h2>Languages</h2>
            <ul>
              <li>Tamil</li>
              <li>English</li>
              <li>Hindi</li>
              <li>Kannada</li>
              <li>Malayalam</li>
            </ul>
          </div>
        </div>
        <div id="contact" className={`content-section ${activeSection === 'contact' ? 'active' : ''}`}>
          <div id="info_container" className="info">
            <div className="info-row">
              <div className="info-heading"><strong>Phone:</strong></div>
              <div className="info-value">+91 8248926449</div>
            </div>
            <div className="info-row">
              <div className="info-heading"><strong>Email:</strong></div>
              <div className="info-value">praneshyou@gmail.com</div>
            </div>
            <div className="info-row">
              <div className="info-heading"><strong>WhatsApp:</strong></div>
              <div className="info-value">+91 8248926449</div>
            </div>
            <div className="info-row">
              <div className="info-heading"><strong>College:</strong></div>
              <div className="info-value">Sri Krishna College of Engineering and Technology</div>
            </div>
            <div className="info-row">
              <div className="info-heading"><strong>Address:</strong></div>
              <div className="info-value">
                22B/15, Arunachala Devar Colony,<br />
                3rd street, Ramanathapuram,<br />
                Coimbatore-641045.
              </div>
            </div>
          </div>
          <div className="social-icons">
            <h3>Socials</h3><br />
            <a href="#" className="social-link" style={{ fontSize: '30px', color: '#25D366' }}>
              <ion-icon name="logo-whatsapp"></ion-icon>
            </a>
            <a href="#" className="social-link" style={{ fontSize: '30px', color: 'rgb(26, 108, 176)' }}>
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
            <a href="#" className="social-link" style={{ fontSize: '30px', color: '#ff0000' }}>
              <ion-icon name="logo-youtube"></ion-icon>
            </a>
            <a href="#" className="social-link" style={{ fontSize: '30px', color: '#000000' }}>
              <ion-icon name="logo-github"></ion-icon>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
