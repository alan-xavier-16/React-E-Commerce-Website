import React from "react";
import Directory from "../../components/directory/Directory.component";
import "./HomePage.styles.scss";

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="directory-menu">
        <Directory />
      </div>
    </div>
  );
};

export default HomePage;
