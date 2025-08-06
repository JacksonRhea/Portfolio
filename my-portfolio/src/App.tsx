import "./App.css";
import {
  Container,
  Nav,
  Navbar,
  Image,
  Button,
  Form,
  NavDropdown,
} from "react-bootstrap";
import Projects from "./pages/projects";
import { useState } from "react";
import emailjs from '@emailjs/browser';
import ToastModel from "./components/toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons/faFileArrowDown";

function App() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSendEmail = () => {
    if (name === "" || email === "" || message === "") {
      setIsInvalid(true);
      setToastMessage("Please fill out all fields before sending the email.");
      setShowToast(true);
      setIsSuccess(false);
      return;
    }

    const templateParams = {
      name: name,
      email: email,
      message: message
    }

    emailjs.init({
      publicKey: `${import.meta.env.VITE_EMAILJS_API_PUBLIC_KEY}`,
      blockHeadless: true
    });

    emailjs.send(`${import.meta.env.VITE_EMAILJS_SERVICE_ID}`,
      `${import.meta.env.VITE_EMAILJS_TEMPLATE_ID}`,
      templateParams).then((response) => {
        setName("");
        setEmail("");
        setMessage("");
        setToastMessage(`Email sent successfully!`);
        setShowToast(true);
        setIsSuccess(true);
        setIsInvalid(false);
      }, (error) => {
        setToastMessage(`Error sending email. ${error}`);
        setShowToast(true);
        setIsSuccess(false);
      });
  }

  return (
    <>
      <div id="home" className="home">
        <Navbar fixed="top" bg="dark" data-bs-theme="dark">
          <Container className="justify-content-space-between">
            <Navbar.Brand href="#home">Jackson Rhea</Navbar.Brand>
            <Nav className="nav-link-container">
              <Nav.Link href="#home">About Me</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#experience">Experience</Nav.Link>
              <Nav.Link href="#contact">Contact Me</Nav.Link>
              <Nav.Link
                href="/Jackson_Rhea_Resume.pdf"
                download="Jackson_Rhea_Resume"
              >
                <FontAwesomeIcon
                  icon={faFileArrowDown}
                  style={{ color: "#d1d1d1", marginRight: "4" }}
                />
                Resume
              </Nav.Link>
            </Nav>

            <NavDropdown className="nav-link-dropdown" title="Menu">
              <NavDropdown.Item href="#home">About Me</NavDropdown.Item>
              <NavDropdown.Item href="#projects">Projects</NavDropdown.Item>
              <NavDropdown.Item href="#experience">Experience</NavDropdown.Item>
              <NavDropdown.Item href="#contact">Contact Me</NavDropdown.Item>
              <NavDropdown.Item
                href="/Jackson_Rhea_Resume.pdf"
                download="Jackson_Rhea_Resume"
              >
                <FontAwesomeIcon
                  icon={faFileArrowDown}
                  style={{ color: "#d1d1d1", marginRight: "4" }}
                />
                Resume
              </NavDropdown.Item>
            </NavDropdown>
          </Container>
        </Navbar>
        <div className="info-container">
          <div>
            <Image className="me" src="/me.PNG" roundedCircle />
          </div>
          <div className="link-container">
            <Button
              target="_blank"
              href="https://github.com/JacksonRhea"
              className="button-link img-left"
            >
              <Image className="link-img" src="/github.jpeg" roundedCircle />
            </Button>
            <Button
              target="_blank"
              href="https://linkedin.com/in/jackson-rhea"
              className="button-link"
            >
              <Image className="link-img" src="/linked.png" roundedCircle />
            </Button>
            <Button
              target="_blank"
              href="https://jacki-boi.itch.io"
              className="button-link img-left"
            >
              <Image className="link-img" src="/itch.jpg" roundedCircle />
            </Button>
          </div>
          <div className="bio">
            <h1 className="header text-start">Jackson Rhea</h1>
            <h5 className="text-start">'24 ASU Computer Science Student</h5>
            <p className="subheader text-start mt-5">
              Hello and welcome to my portfolio! I am a class of 2024 graduate
              at the Ira A. Fulton School of Engineering at Arizona State
              University. I've always had a passion for engineering, however,
              when I had to pick my major I didn't know what I wanted to do. I
              decided to go with Computer Science because I've always been
              interested in computers and games. Looking back now I know I made
              the right choice as my time in college showed me just a glimpse of
              what you can do in this field and I am beyond excited to keep
              creating and learning.
            </p>
            <h5 className="text-start mt-5">Arizona State University (ASU)</h5>
            <li className="text-start">
              Bachelor of Science in Computer Science (Summa Cum Laude)
            </li>
            <li className="text-start">Certificate of Game Development</li>
          </div>
        </div>
        <div className="skills">
          <h2 className="section-header">Some of my skills</h2>
          <div className="skills-container">
            {skills.skills.map((skill) => (
              <div className="skill">{skill}</div>
            ))}
          </div>
        </div>
      </div>

      {/* // Projects */}
      <div className="projects" id="projects">
        <h2 className="section-header">Projects</h2>
        <Projects />
      </div>

      {/* // Experience */}
      <div className="experience" id="experience">
        <h2 className="section-header">Experience</h2>
        <div className="job-container">
          <Image className="exp-img" src="/sandhills.jpeg" roundedCircle />
          <div>
            <h2 className="job-header">Sandhills Global (GoCurrency)</h2>
            <p className="job-text">June 2023 - Present</p>
            <h3 className="role-text">Software Developer</h3>
            <li className="job-text">
              Architected a GAP and Warranty service supporting 300+ products,
              enabling applicants to add coverage to equipment purchases, and
              generating six figures of business value
            </li>
            <li className="job-text">
              Integrated Equifax API to implement Anti-Money Laundering (AML)
              and Know Your Customer (KYC) support as part of an ongoing project
              aiming to reduce fraud by detecting high-risk applicants.
            </li>
            <li className="job-text">
              Played a pivotal role in migrating 100K+ legacy applications to a
              new platform version, contributing to improved performance and
              system modernization.
            </li>
            <li className="job-text">
              Developed a notes system enabling admins and managers to create,
              edit, and store application-related notes for streamlined internal
              communication.
            </li>
            <li className="job-text">
              Built functionality leveraging the Department of Transportation’s
              SAFER Report API, allowing users to quickly retrieve motor carrier
              safety data.
            </li>
            <li className="job-text">
              Followed Scrum methodology to achieve the timely delivery of
              software solutions
            </li>
          </div>
        </div>

        <div className="job-container">
          <Image className="exp-img" src="/scion.jpeg" roundedCircle />
          <div>
            <h2 className="job-header">The Scion Group</h2>
            <p className="job-text">February 2022 - October 2022</p>
            <h3 className="role-text">Leasing Agent</h3>
            <li className="job-text">
              Collaborated with a team to get 100% (823) of our leases signed
              for the next year
            </li>
            <li className="job-text">
              Led multiple tours to potential clients resulting in them signing
              that day
            </li>
          </div>
        </div>
      </div>

      <div className="contact" id="contact">
        <h2 className="section-header">Get in Touch</h2>
        <h6 className="contact-text">Email: Jacksonrhea24@gmail.com</h6>
        <p className="contact-text">Or fill out this form...</p>
        <div className="email-inputs">
          <div className="d-flex mb-5 justify-content-between">
            <div className="small-inputs">
              <Form.Control
                className="form-inputs"
                size="lg"
                type="text"
                placeholder="First and Last Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                isInvalid={isInvalid && name === ""}
              />
              <Form.Control.Feedback className="invalid" type="invalid">
                Name must have a value
              </Form.Control.Feedback>
            </div>
            <div className="small-inputs">
              <Form.Control
                className="form-inputs"
                size="lg"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                isInvalid={isInvalid && email === ""}
              />
              <Form.Control.Feedback className="invalid" type="invalid">
                Email must have a value
              </Form.Control.Feedback>
            </div>
          </div>
          <Form.Control
            className="contact-inputs"
            as="textarea"
            placeholder="Message..."
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            isInvalid={isInvalid && message === ""}
          />
          <Form.Control.Feedback className="invalid" type="invalid">
            Message must have a value.
          </Form.Control.Feedback>
          <Button
            onClick={handleSendEmail}
            type="submit"
            className="button"
            variant="primary"
          >
            Send Message
          </Button>
        </div>
      </div>

      {/* // Footer */}
      <div className="footer">
        <div className="footer-link-container">
          <Button
            target="_blank"
            href="https://github.com/JacksonRhea"
            className="footer-link"
          >
            <Image className="footer-img" src="/github.jpeg" roundedCircle />
          </Button>
          <Button
            target="_blank"
            href="https://linkedin.com/in/jackson-rhea"
            className="footer-link"
          >
            <Image className="footer-img" src="/linked.png" roundedCircle />
          </Button>
          <Button
            target="_blank"
            href="https://jacki-boi.itch.io"
            className="footer-link"
          >
            <Image className="footer-img" src="/itch.jpg" roundedCircle />
          </Button>
        </div>
        <div className="footer-nav-links">
          <a className="text-decoration-none" href="#home">
            <p className="footer-text">About Me</p>
          </a>
          <a className="text-decoration-none" href="#projects">
            <p className="footer-text">Projects</p>
          </a>
          <a className="text-decoration-none" href="#experience">
            <p className="footer-text">Experience</p>
          </a>
          <a className="text-decoration-none" href="#contact">
            <p className="footer-text">Contact Me</p>
          </a>
          <a className="text-decoration-none" href="#contact">
            <p className="footer-text">
              <FontAwesomeIcon
                icon={faFileArrowDown}
                style={{ color: "#d1d1d1", marginRight: "4" }}
              />
              Resume
            </p>
          </a>
        </div>
      </div>

      <ToastModel
        message={toastMessage}
        show={showToast}
        onShow={setShowToast}
        isSuccess={isSuccess}
      />
    </>
  );
}

export default App;


interface Skills {
  skills: string[];
}

const skills: Skills = {
  skills: [
    "C#", "TypeScript", "Python", "Swift", "HTML/CSS", "SQL",
    "React.js", "Node.js", "ASP.Net", "PostgreSQL", "Git", "Docker", "Scrum"
  ]
};