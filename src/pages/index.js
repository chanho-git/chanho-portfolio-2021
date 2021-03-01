import React from 'react'
import '../styles/styles.scss';
import {graphql} from "gatsby";

//Components
import Header from "../components/header";
import Banner from "../components/banner";
import ProjectCards from "../components/projectCards";
import Contact from "../components/contact";

const Home = (props) => {
  return (
      <>
        <Header/>
        <Banner/>
          {props.data.projects.edges.map(project => (
              <ProjectCards data={ project.node.data }/>
          ))}
        <Contact/>
      </>
  );
};

export default Home

export const query = graphql`
  query projects {
    projects : allPrismicProjectCard {
      edges {
        node {
          uid
          data {
            homepage_project_hero {
              url
            }
            homepage_project_title {
              text
            }
            homepage_project_category {
              text
            }
          }
        }
      }
    }
  }
`
