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

function App() {
  const me = new URL("./assets/me.PNG", import.meta.url).href;

  return (
    <>
      <a id="home" />
      <div className="home">
        <Navbar fixed="top" bg="dark" data-bs-theme="dark">
          <Container className="justify-content-space-between">
            <Navbar.Brand href="#home">Jackson Rhea</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">About Me</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#experience">Experience</Nav.Link>
              <Nav.Link href="#contact">Contact Me</Nav.Link>
              <Nav.Link href="#resume">Resume</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <div className="d-flex align-items-center">
          <Image className="me" src={`${me}`} roundedCircle />
          <div className="ml-5">
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
      <Projects />

      {/* // Experience */}
      <div className="experience" id="experience">
        <h2 className="section-header">Experience</h2>
        <div className="d-flex mt-5">
          <Image src="./assets/react.svg" roundedCircle />
          <div>
            <h2 className="section-header">Sandhills Global (GoCurrency)</h2>
            <p className="job-text">June 2023 - Present</p>
            <h3 className="role-text">Software Developer</h3>
            <p className="job-text">Coded shit man</p>
          </div>
        </div>

        <div className="d-flex mt-5">
          <Image src="./assets/react.svg" roundedCircle />
          <div>
            <h2 className="section-header">The Scion Group</h2>
            <p className="job-text">February 2022 - October 2022</p>
            <h3 className="role-text">Leasing Agent</h3>
            <p className="job-text">Leased shit man</p>
          </div>
        </div>
      </div>

      <div className="contact" id="contact">
        <h2 className="section-header">Get in Touch</h2>
        <div className="d-flex">
          <Form.Control
            className="contact-inputs"
            size="lg"
            type="text"
            placeholder="Your Name"
          />
          <Form.Control
            className="contact-inputs"
            size="lg"
            type="text"
            placeholder="Your Email"
          />
        </div>
        <Form.Control
          className="contact-inputs"
          as="textarea"
          placeholder="Your Message"
          rows={5}
        />
        <Button className="button" variant="primary">
          Send Message
        </Button>
      </div>

      {/* // Footer */}
      <Navbar bg="dark" data-bs-theme="dark">
        <Container className="justify-content-space-between">
          <Navbar.Brand href="#home">Jackson Rhea</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">About Me</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#contact">Contact Me</Nav.Link>
            <Nav.Link href="#resume">Resume</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default App;
