import React from 'react'
import '../styles/styles.scss';

//Components
import Header from "../components/header";
import Banner from "../components/banner";
import ProjectCards from "../components/projectCards";
import Contact from "../components/contact";

const Home = () => {
  return (
      <>
        <Header/>
        <Banner/>
        <ProjectCards/>
        <Contact/>
      </>
  );
};

export default Home
