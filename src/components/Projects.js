import React from "react";
import ProjectCard from "./ProjectCard";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  projectsBox: {
    display: "flex",
    flexWrap: "wrap",
    minWidth: "180px",
  },
});

const Projects = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.projectsBox}>
      <ProjectCard
        title="Scry"
        text="Educational application using interactive multimedia to teach critical humanities thinking to a non-academic audience."
        imgsrc="./scry.png"
        link="https://github.com/henryhill1999/Constantine"
      ></ProjectCard>
      <ProjectCard
        title="Scrape the Past"
        text="Analytical and educational web-app, teaching digital humanities techniques while providing a powerful interface for geographic analysis."
        imgsrc="stp.png"
        link="https://github.com/henryhill1999/ScrapeThePast"
      ></ProjectCard>
      <ProjectCard
        title="Sparrow"
        text="Winner of the 2019 Lockheed Martin Manassas Hackathon.
        Pulls data on shipwrecks from the Wikipedia API, allowing users to locate shipwrecks geographically and learn about their background."
        imgsrc="sparrow.png"
        link="https://github.com/YrrepNoj/TreatMeLikeAPirate"
      ></ProjectCard>
      <ProjectCard
        title="Amanda Hill RDH"
        text="Custom personal website built using React."
        imgsrc="ahrdh.png"
        link="https://amandahillrdh.com"
      ></ProjectCard>
      <ProjectCard
        title="MapEdit/GeoCompress"
        text="A pair of GUI and Python tools that I created to efficiently generate and compress custom border data in GeoJSON format. "
        imgsrc="mapedit.png"
        link="https://github.com/henryhill1999/GeoCompress"
      ></ProjectCard>
    </div>
  );
};

export default Projects;
