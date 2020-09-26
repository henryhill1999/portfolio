import React from "react";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";

const useStyles = createUseStyles({
  navbar: {
    zIndex: 1000,
    position: "relative",
    backgroundColor: "#FFF",

    display: "flex",
    justifyContent: "center",

    width: "100vw",
    height: "60px",

    boxShadow: "0px 3px 5px #0003",
  },
  responsiveBox: {
    width: "100vw",
    maxWidth: 800,
    display: "flex",
    alignItems: "center",
  },
  sectionLeft: {
    display: "inline-flex",
    flexDirection: "column",
    justifyContent: "right",
    alignItems: "center",
    padding: "12px",
    "@media (max-width: 500px)": {
      display: "none",
    },
  },
  list: {
    listStyleType: "none",
    margin: 0,
    padding: 0,
    overflow: "hidden",
    "& a": {
      fontFamily: "Red Hat Display",
      display: "inline-flex",
      alignItems: "center",
      height: "26px",
      color: "#000",
      fontSize: "17px",
      padding: "12px",
      textDecoration: "none",

      transition: "background-color 0.2s",

      "&:hover": {
        textDecoration: "underline",
        // color: "#555",
        color: "#D6AEF5",
        cursor: "pointer",
      },
      "& span": {
        textAlign: "center",
      },
    },
  },
});

const Navbar = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.navbar}>
      <div className={classes.responsiveBox}>
        <div className={classes.sectionLeft}>
          <a href=".">
            <img src="./logo.svg" alt="Henry Hill styled text"></img>
          </a>
          <div style={{ borderLeft: "#CCC" }}></div>
        </div>
        <div style={{ flexGrow: 2 }}></div>
        <div className={classes.list}>
          {props.items.map((i) =>
            i.external ? (
              <a href={i.url} target="_blank" rel="noopener noreferrer">
                {i.text}
              </a>
            ) : (
              <Link to={i.url}>{i.text}</Link>
            ),
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
