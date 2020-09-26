import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createUseStyles } from "react-jss";
import NavBar from "./NavBar";
import Contact from "./Contact";
import Projects from "./Projects";
import Profile from "./Profile";

const useStyles = createUseStyles({
  "@global": {
    body: {
      margin: 0,
    },
    root: { height: "100vh" },

    "h1, h2": {
      fontFamily: "Red Hat Display",
    },
    h1: {
      color: "#393939",
      fontSize: "22px",
    },
    h2: {
      color: "#868686",
      fontSize: "16px",
    },
    "a, p": {
      fontFamily: "Roboto, Sans-Serif",
      fontSize: "14px",
    },
    a: {
      color: "#A06EC5",
      "&:hover": {
        color: "#C08EF5",
      },
    },
  },
  app: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    overflow: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  responsiveBox: {
    flex: "1 0 0",
    width: "100vw",
    minHeight: "60vh",
    maxHeight: "100vh",
    maxWidth: "1000px",
    display: "flex",
    justifyContent: "center",
    "@media (max-width: 750px)": {
      flexWrap: "wrap",
    },
  },
  contentWrapper: {
    flex: "2 1 60%",
    overflowY: "auto",
    padding: "20px",
    "@media (max-width: 750px)": {
      padding: "20px",
      paddingTop: "0",
    },
  },
});

function App() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.app}>
        <Router>
          <NavBar
            items={[
              { url: "/contact", text: "contact" },
              { url: "/projects", text: "projects" },
              {
                external: "true",
                url: "https://www.linkedin.com/in/henry-hill-3b2612148/",
                text: "Linkedin",
              },
              {
                external: "true",
                url: "https://www.github.com/henryhill1999",
                text: "Github",
              },
            ]}
          ></NavBar>
          <div className={classes.responsiveBox}>
            <Profile></Profile>
            <div className={classes.contentWrapper}>
              <Switch>
                <Route path="/contact">
                  <Contact></Contact>
                </Route>
                <Route path="/projects">
                  <Projects></Projects>
                </Route>
                <Route>
                  <Contact></Contact>
                </Route>
              </Switch>
            </div>
          </div>
        </Router>
      </div>
      <img
        src="ellipse.svg"
        alt="decorative cicle"
        style={{
          position: "fixed",
          zIndex: "-100",
          right: "-100px",
          bottom: "-200px",
        }}
      ></img>
    </>
  );
}

export default App;
