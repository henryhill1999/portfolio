import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  card: {
    flex: "1 0 180px",
    boxShadow: "0px 3px 5px #0003",
    borderRadius: "5px",
    margin: "8px",
    backgroundColor: "#FFF",
    padding: "8px",
    color: "#000",
    textDecoration: "none",
  },
});

const ProjectCard = (props) => {
  const classes = useStyles();

  return (
    <a
      href={props.link}
      className={classes.card}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <img src={props.imgsrc} alt="screenshot of Scry web-app"></img>
      </div>
      <h2>{props.title}</h2>
      <p>{props.text}</p>
    </a>
  );
};

export default ProjectCard;
