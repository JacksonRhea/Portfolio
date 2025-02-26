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
      <Container>
        <Row xs={1} md={2} className="g-5">
          {Object.entries(projectDictionary).map(([key, project]) => (
            <Col key={key} xs={12} lg={4} md={6} className="mb-4">
              <Card
                onClick={() => (
                  setShowProjectModal(true), setActiveProject(project)
                )}
                className="project-card"
              >
                <Card.Img variant="top" className="modal-img" src={project.cardImageLink} />
                <Card.Body className="card-body">
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.briefDescription}</Card.Text>
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
        mediaLink={activeProject?.mediaLink || ""}
        modalImageLink={activeProject?.modalImageLink || ""}
        onHide={() => setShowProjectModal(false)}
      />
    </>
  );
}

export default Projects;

interface ProjectInfo {
  title: string;
  subheader: string;
  briefDescription: string;
  description: string;
  techstack: string[];
  mediaLink: string;
  cardImageLink: string;
  modalImageLink: string;
}

const proj1: ProjectInfo = {
  title: "Elden Ring Boss Checklist App (CS)",
  subheader: "Project Title: Elden Ring Boss Tracker",
  briefDescription: "An app to track completed bosses in Elden Ring",
  description: "To enhance my experience playing Elden Ring, I created a custom app to track my progress. While existing mods and paid services offered similar functionality, I wanted to build my own solution. One significant challenge was the lack of APIs providing comprehensive boss data, so I manually compiled all the necessary information—a time-consuming but rewarding process. \n\n Using TypeScript and React Native, technologies I’m most familiar with, I developed a mobile app featuring data for all 207 bosses. The app allows users to track completed bosses, view remaining challenges, and filter by completion status or specific regions. I hosted the app through the Apple Developer Program, enabling friends to use it during their playthroughs. While I haven't decided whether to officially release it, this project was both a fun and valuable learning experience.",
  techstack: ["React Native", "Node.js", "Typescript", "Expo Go", "Apple Developer Program"],
  mediaLink: "https://github.com/JacksonRhea/EldenRingBossList",
  cardImageLink: "/elden-ring.png",
  modalImageLink: "/elden-ring.png"
};

const proj2: ProjectInfo = {
  title: "Mobile Pantry Application (CS)",
  subheader: "Project Title: Digital Pantry",
  briefDescription: "Mobile app to track what's in your pantry",
  description: "Digital Pantry is a mobile application compatible with Android and iOS. The front end is created using TypeScript and React Native. The back end is created using TypeScript, Express, PostgreSQL, Docker, and ChatGPT for recipe generation. \n\n Digital Pantry is an app made in React Native using Typescript where users can track and manage what is inside their pantry. Users are able to add items into their pantries while also adding other members of their household to their “house” which allows anyone to add/edit items that are in the pantry. Digital Pantry also has a recipe generation portion where the items that are directly inside your pantry are sent to Chat GPT and recipes that only contain your ingredients are returned with directions on how to prepare the meals.",
  techstack: ["React Native", "RESTful services", "Typescript", "Docker", "PostgreSQL", "Expo Go"],
  mediaLink: "https://github.com/DigitalPantry",
  cardImageLink: "/digital-pantry.jpeg",
  modalImageLink: "/digital-pantry.jpeg"
};

const proj3: ProjectInfo = {
  title: "IOS Workout Generator App (CS)",
  subheader: "Project Title: Workout Generator",
  briefDescription: "Generates workouts based on user preferences",
  description: "Created as a class project, this workout generator app was built using Swift and Firebase for data storage. Users could sign up, log in, and manage their profiles. The app's core functionality was generating workouts based on user inputs. By selecting parameters like difficulty, muscle group, and workout type, the app would make a call to a public RESTful API and display a curated list of exercises based on the user’s preferences.",
  techstack: ["Swift", "Firebase"],
  mediaLink: "https://github.com/JacksonRhea/Workout-Generator",
  cardImageLink: "/workout-generator.png",
  modalImageLink: "/workout-generator.png"
};

const proj4: ProjectInfo = {
  title: "Dungeon Crawler (Game Dev)",
  subheader: "Project Title: Keystone Labyrinth",
  briefDescription: "Dungeon Crawler made in Unreal Engine 5 with multiplayer",
  description: "For our game development capstone, we created a multiplayer dungeon crawler using Unreal Engine 5. I was responsible for implementing a procedural dungeon plugin, ensuring each dungeon spawned with a specific number of rooms, keys to escape, and enemy encounters. I also served as the level designer, a role I’m especially proud of as the final environments turned out exceptionally well in Unreal. On the last day of class, groups of four classmates played from our selection of four characters, explored our two dungeons, and faced the final boss, making for a successful showcase.",
  techstack: ["Unreal Engine", "C++", "Blueprints"],
  mediaLink: "https://ttruxng.itch.io/keystone-labyrinth",
  cardImageLink: "/keystone.png",
  modalImageLink: "/lobby.png"
};

const proj5: ProjectInfo = {
  title: "3D Platformer Game (Game Dev)",
  subheader: "Project Title: Project Party",
  briefDescription: "Platformer made in Unity containing several minigames",
  description: "Project Party is a 3D game created in Unity by me and three other classmates, where each member developed a unique minigame. I created level based on the game red light green light, which proved to be both challenging and rewarding. The most complex part was managing timers, which presented unexpected hurdles and a lot of coordination to ensure everything ran smoothly. After much trial and error, I successfully implemented the mechanics, and seeing the level run smoothly made all the effort worthwhile.",
  techstack: ["Unity", "C#"],
  mediaLink: "https://jacki-boi.itch.io/project-party",
  cardImageLink: "/project-party.png",
  modalImageLink: "/minigame.png"
};

const proj6: ProjectInfo = {
  title: "2D Adventure Game (Game Dev)",
  subheader: "Project Title: Reclaimed Treasure",
  briefDescription: "Side-scrolling adventure game with a goal of slaying skeletons",
  description: "This was my first real coding project in game development, and it remains one of the most enjoyable I've worked on. Built with the GameMaker engine, which uses a language similar to JavaScript and other C-like languages, the project challenged me to learn a new syntax while creating a complete game from scratch. Designing levels, enemies, mechanics, a boss fight, and even a few hidden easter eggs made the process incredibly rewarding. Playing through the finished product from start to finish was an unforgettable experience.",
  techstack: ["GameMaker", "GML"],
  mediaLink: "https://youtu.be/7BrTvSiJbDE",
  cardImageLink: "/treasure-menu.png",
  modalImageLink: "/treasure-menu.png"
};