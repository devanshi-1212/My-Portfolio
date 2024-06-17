import styles from "./ProjectsStyles.module.css";
import acttrack from "../../assets/act-track.png";
import fitnessapp from "../../assets/fitness-app.png";
import memoriesapp from "../../assets/memories-app.png";
import mernchatapp from "../../assets/mern-chat-app.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>

      <div className={styles.projectsContainer}>
        <ProjectCard
          src={acttrack}
          h3="Activity Tracker"
          p="Extension to track online screen time"
          link="https://github.com/devanshi-1212/Activity-Tracker"
        />

        <ProjectCard
          src={mernchatapp}
          h3="MERN Chat"
          p="Chat App"
          link="https://github.com/devanshi-1212/MernChat"
        />

        <ProjectCard
          src={memoriesapp}
          h3="Memories"
          p="Posts sharing app"
          link="https://github.com/devanshi-1212/Memories"
        />

        <ProjectCard
          src={fitnessapp}
          h3="Fitness App"
          p="Gym exercises/techniques app"
          link="https://github.com/devanshi-1212/FitnessApp"
        />
      </div>
    </section>
  );
}

export default Projects;
