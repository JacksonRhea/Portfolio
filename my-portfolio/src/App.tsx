import "./App.css";
import {
  Col,
  Container,
  Nav,
  Navbar,
  Row,
  Image,
  Button,
  Form,
} from "react-bootstrap";
import Projects from "./pages/projects";
import { useState } from "react";
import emailjs from '@emailjs/browser';

function App() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);
  const [sentEmail, setSentEmail] = useState(false);

  const handleSendEmail = () => {
    if (name === "" || email === "" || message === "") {
      setIsInvalid(true);
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
      }, (error) => {
        
      });
  }

  return (
    <>
      <a id="home" />
      <div className="home">
        <Navbar fixed="top" bg="dark" data-bs-theme="dark">
          <Container className="justify-content-space-between">
            <Navbar.Brand href="#home">Jackson Rhea</Navbar.Brand>
            <Nav className="justify-content-end">
              <Nav.Link href="#home">About Me</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#experience">Experience</Nav.Link>
              <Nav.Link href="#contact">Contact Me</Nav.Link>
              <Nav.Link href="/Public_Resume.pdf" download="Jackson_Rhea_Resume">Resume</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <div className="d-flex align-items-center mb-5">
          <div>
            <Image className="me" src="/me.PNG" roundedCircle />
          </div>
          <div className="link-container">
            <Button target="_blank" href="https://github.com/JacksonRhea" className="button-link img-left">
              <Image className="link-img" src="/github.jpeg" roundedCircle />
            </Button>
            <Button target="_blank" href="https://linkedin.com/in/jackson-rhea" className="button-link">
              <Image className="link-img" src="/linked.png" roundedCircle />
            </Button>
            <Button target="_blank" href="https://jacki-boi.itch.io" className="button-link img-left">
              <Image className="link-img" src="/itch.jpg" roundedCircle />
            </Button>
          </div>
          <div className="bio">
            <h1 className="header text-start">Hi, I'm Jackson Rhea</h1>
            <p className="subheader text-start">
              Computer science graduate (Summa Cum Laude) with full-stack
              development experience in React, Node.js, ASP.Net, and Typescript.
              Skilled in building scalable, high-performance applications, and
              optimizing APIs for efficiency. Passionate about problem-solving,
              clean and efficient code, and delivering impactful software
              solutions in fast-paced environments.
            </p>
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
        <div className="d-flex mt-5">
          <Image className="exp-img" src="/sandhills.jpeg" roundedCircle />
          <div>
            <h2 className="job-header">Sandhills Global (GoCurrency)</h2>
            <p className="job-text">June 2023 - Present</p>
            <h3 className="role-text">Software Developer</h3>
            <li className="job-text">Currently architecting the creation of a GAP and Extended Warranty service which will allow thousands of applications to add on products to cover their financed equipment, expected to generate over six figures of business value</li>
            <li className="job-text">Successfully integrated with the Department of Transportation’s FMCSA RESTful API to automate the generation of safety reports, reducing manual workload and improving sales efficiency</li>
            <li className="job-text">Developed back-end RESTful APIs using ASP.Net, enhancing data retrieval speed and maintainability</li>
            <li className="job-text">Followed Scrum methodology in order to achieve the timely delivery of software solutions</li>
          </div>
        </div>

        <div className="d-flex mt-5">
          <Image className="exp-img" src="/scion.jpeg" roundedCircle />
          <div>
            <h2 className="job-header">The Scion Group</h2>
            <p className="job-text">February 2022 - October 2022</p>
            <h3 className="role-text">Leasing Agent</h3>
            <li className="job-text">Collaborated with a team to get 100% (823) of our leases signed for the next year</li>
            <li className="job-text">Led multiple tours to potential clients resulting in them signing that day</li>
          </div>
        </div>
      </div>

      <div className="contact">
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
          <Button onClick={handleSendEmail} type="submit" className="button" variant="primary">
            Send Message
          </Button>
          <Form.Control.Feedback className="valid" type="valid">Email sent!</Form.Control.Feedback>
          </div>
      </div>

      {/* // Footer */}
      <div className="footer">
        <div className="footer-link-container">
          <Button target="_blank" href="https://github.com/JacksonRhea" className="footer-link">
            <Image className="footer-img" src="/github.jpeg" roundedCircle />
          </Button>
          <Button target="_blank" href="https://linkedin.com/in/jackson-rhea" className="footer-link">
            <Image className="footer-img" src="/linked.png" roundedCircle />
          </Button>
          <Button target="_blank" href="https://jacki-boi.itch.io" className="footer-link">
            <Image className="footer-img" src="/itch.jpg" roundedCircle />
          </Button>
        </div>
        <div className="d-flex m-4">
          <a className="text-decoration-none" href="#home"><p className="footer-text">About Me</p></a>
          <a className="text-decoration-none" href="#projects"><p className="footer-text">Projects</p></a>
          <a className="text-decoration-none" href="#experience"><p className="footer-text">Experience</p></a>
          <a id="contact" className="text-decoration-none" href="#contact"><p className="footer-text">Contact Me</p></a>
        </div>
      </div>
    </>
  );
}

export default App;
