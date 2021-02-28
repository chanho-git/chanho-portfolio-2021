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
        <ProjectCards/>
          {props.data.projects.edges.map(project => (
              <Contact data={ project.node.data }/>
          ))}
      </>
  );
};

export default Home

export const query = graphql`
    query projects{
      projects: allPrismicProjectCard {
            edges {
              node {
                data {
                  test {
                    text
                  }
                }
              }
            }
          }
        }
`
