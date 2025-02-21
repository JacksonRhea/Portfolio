import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import GenericModal from "../components/modal";

function Projects() {
  const [showProjectModal, setShowProjectModal] = useState(false);
  const [projectDictionary, setProjectDictionary] = useState<Record<string, ProjectInfo>>({});
  const [activeProject, setActiveProject] = useState<ProjectInfo | null>(null);

  useEffect(() => {
    setProjectDictionary({
      0: proj1,
      1: proj2,
      2: proj3,
      3: proj4,
      4: proj5,
      5: proj6
    });
  }, [showProjectModal]);

  return (
    <>
      <Container className="temp">
        <Row xs={1} md={2} className="g-5">
          {Object.entries(projectDictionary).map(([key, project]) => (
            <Col key={key} xs={12} lg={4} md={6} className="mb-4">
              <Card
                onClick={() => (
                  setShowProjectModal(true), setActiveProject(project)
                )}
              >
                <Card.Img variant="top" src={project.imageLink} />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* //Project Modal */}
      <GenericModal
        show={showProjectModal}
        title={activeProject?.title || ""}
        subheader={activeProject?.subheader || ""}
        description={activeProject?.description || ""}
        techstack={activeProject?.techstack || []}
        githubLink={activeProject?.githubLink || ""}
        imageLink={activeProject?.imageLink || ""}
        onHide={() => setShowProjectModal(false)}
      />
    </>
  );
}

export default Projects;

interface ProjectInfo {
  title: string;
  subheader: string;
  description: string;
  techstack: string[];
  githubLink: string;
  imageLink: string;
}

const proj1: ProjectInfo = {
  title: "Elden Ring Boss Checklist App",
  subheader: "Checklist for the bosses in Elden Ring",
  description: "This is a description of project 1",
  techstack: ["React", "Node.js", "Typescript"],
  githubLink: "https://github.com/project1",
  imageLink: "/vite.svg"
};

const proj2: ProjectInfo = {
  title: "ASU Computer Science Capstone",
  subheader: "Digital Pantry",
  description: "This is a description of project 2",
  techstack: ["React", "Node.js", "Typescript"],
  githubLink: "https://github.com/project1",
  imageLink: "/vite.svg"
};

const proj3: ProjectInfo = {
  title: "IOS Workout Generator App",
  subheader: "Generate Workouts based on user preferences",
  description: "This is a description of project 3",
  techstack: ["React", "Node.js", "Typescript"],
  githubLink: "https://github.com/project1",
  imageLink: "/vite.svg"
};

const proj4: ProjectInfo = {
  title: "ASU Game Development Capstone Project",
  subheader: "Keystone Labyrinth",
  description: "This is a description of project 4",
  techstack: ["React", "Node.js", "Typescript"],
  githubLink: "https://github.com/project1",
  imageLink: "/vite.svg"
};

const proj5: ProjectInfo = {
  title: "3D Party Game",
  subheader: "3D Party Game",
  description: "This is a description of project 5",
  techstack: ["React", "Node.js", "Typescript"],
  githubLink: "https://github.com/project1",
  imageLink: "/vite.svg"
};

const proj6: ProjectInfo = {
  title: "2D Platformer Game",
  subheader: "Reclaimed Treasure",
  description: "This is a description of project 6",
  techstack: ["React", "Node.js", "Typescript"],
  githubLink: "https://github.com/project1",
  imageLink: "/vite.svg"
};