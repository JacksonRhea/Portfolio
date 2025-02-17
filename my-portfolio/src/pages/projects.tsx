import { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import GenericModal from "../components/modal";

function Projects() {
  const [showProject1Modal, setShowProject1Modal] = useState(false);
  const [showProject2Modal, setShowProject2Modal] = useState(false);
  const [showProject3Modal, setShowProject3Modal] = useState(false);
  const [showProject4Modal, setShowProject4Modal] = useState(false);
  const [showProject5Modal, setShowProject5Modal] = useState(false);
  const [showProject6Modal, setShowProject6Modal] = useState(false);

  return (
    <>
      <div className="projects" id="projects">
        <h2 className="section-header">CS Projects</h2>
        <Row>
          <Col>
            <Button variant="primary" onClick={() => setShowProject1Modal(true)}>Launch Project</Button>
          </Col>
          <Col>
            <Button variant="primary" onClick={() => setShowProject2Modal(true)}>Launch Project</Button>
          </Col>
          <Col>
            <Button variant="primary" onClick={() => setShowProject3Modal(true)}>Launch Project</Button>
          </Col>
        </Row>
        <h2 className="section-header">Game Development Projects</h2>
        <Row>
          <Col>
            <Button variant="primary" onClick={() => setShowProject4Modal(true)}>Launch Project</Button>
          </Col>
          <Col>
            <Button variant="primary" onClick={() => setShowProject5Modal(true)}>Launch Project</Button>
          </Col>
          <Col>
            <Button variant="primary" onClick={() => setShowProject6Modal(true)}>Launch Project</Button>
          </Col>
        </Row>
      </div>

      {/* //Project 1 Modal */}
      <GenericModal 
        show={showProject1Modal} 
        title={proj1.title} 
        description={proj1.description} 
        techstack={proj1.techstack}
        githubLink={proj1.githubLink}
        imageLink={proj1.imageLink}
        onHide={() => setShowProject1Modal(false)}
      />

      {/* //Project 2 Modal */}
      <GenericModal 
        show={showProject2Modal} 
        title={proj2.title} 
        description={proj2.description} 
        techstack={proj2.techstack}
        githubLink={proj2.githubLink}
        imageLink={proj2.imageLink}
        onHide={() => setShowProject2Modal(false)}
      />

      {/* //Project 3 Modal */}
      <GenericModal 
        show={showProject3Modal} 
        title={proj3.title} 
        description={proj3.description} 
        techstack={proj3.techstack}
        githubLink={proj3.githubLink}
        imageLink={proj3.imageLink}
        onHide={() => setShowProject3Modal(false)}
      />

      {/* //Project 4 Modal */}
      <GenericModal 
        show={showProject4Modal} 
        title={proj4.title} 
        description={proj4.description} 
        techstack={proj4.techstack}
        githubLink={proj4.githubLink}
        imageLink={proj4.imageLink}
        onHide={() => setShowProject4Modal(false)}
      />

      {/* //Project 5 Modal */}
      <GenericModal 
        show={showProject5Modal} 
        title={proj5.title} 
        description={proj5.description} 
        techstack={proj5.techstack}
        githubLink={proj5.githubLink}
        imageLink={proj5.imageLink}
        onHide={() => setShowProject5Modal(false)}
      />

      {/* //Project 6 Modal */}
      <GenericModal 
        show={showProject6Modal} 
        title={proj6.title} 
        description={proj6.description} 
        techstack={proj6.techstack}
        githubLink={proj6.githubLink}
        imageLink={proj6.imageLink}
        onHide={() => setShowProject6Modal(false)}
      />
    </>
  );
}

export default Projects;

interface ProjectInfo {
  title: string;
  description: string;
  techstack: string[];
  githubLink: string;
  imageLink: string;
}

const proj1: ProjectInfo = {
  title: "Project 1",
  description: "This is a description of project 1",
  techstack: ["React", "Node.js", "Typescript"],
  githubLink: "https://github.com/project1",
  imageLink: "https://example.com/project1.png"
};

const proj2: ProjectInfo = {
  title: "Project 2",
  description: "This is a description of project 2",
  techstack: ["React", "Node.js", "Typescript"],
  githubLink: "https://github.com/project1",
  imageLink: "https://example.com/project1.png"
};

const proj3: ProjectInfo = {
  title: "Project 3",
  description: "This is a description of project 3",
  techstack: ["React", "Node.js", "Typescript"],
  githubLink: "https://github.com/project1",
  imageLink: "https://example.com/project1.png"
};

const proj4: ProjectInfo = {
  title: "Project 4",
  description: "This is a description of project 4",
  techstack: ["React", "Node.js", "Typescript"],
  githubLink: "https://github.com/project1",
  imageLink: "https://example.com/project1.png"
};

const proj5: ProjectInfo = {
  title: "Project 5",
  description: "This is a description of project 5",
  techstack: ["React", "Node.js", "Typescript"],
  githubLink: "https://github.com/project1",
  imageLink: "https://example.com/project1.png"
};

const proj6: ProjectInfo = {
  title: "Project 6",
  description: "This is a description of project 6",
  techstack: ["React", "Node.js", "Typescript"],
  githubLink: "https://github.com/project1",
  imageLink: "https://example.com/project1.png"
};