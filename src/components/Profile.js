import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  profile: {
    marginTop: "9vh",
    padding: "30px",
    flex: "1 0 30%",
    display: "flex",
    justifyContent: "center",
    "& a": { textDecoration: "none" },
    "& h1, h2": {
      margin: "2px 5px",
    },

    "@media (max-width: 750px)": {
      padding: "20px",
      paddingBottom: "0",
      marginTop: "0",
      flexWrap: "nowrap",
      flexDirection: "row",
      alignItems: "center",
    },
  },
});

const Profile = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.profile}>
      <div>
        <a href=".">
          <img
            src="./profile.png"
            alt="profile"
            style={{ width: "auto", height: "auto" }}
          ></img>
        </a>
      </div>
      <div>
        <a href=".">
          <h1>Henry Hill</h1>
          <h2>Software Engineer</h2>
          <h2>Minerva Schools at KGI</h2>
        </a>
      </div>
    </div>
  );
};

export default Profile;
