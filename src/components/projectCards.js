import React from "react";
import Img from 'gatsby-image';
import {graphql , useStaticQuery} from 'gatsby';

const ProjectCards = (props) => {
    const data = useStaticQuery(graphql`
        query {
            nike: file(relativePath: { eq: "test.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 728) {
                        ...GatsbyImageSharpFluid
                     }
                  }
               }      
         }
        `);

    const caseStudies = [
        {
            id: 1,
            title: 'Project Title 1',
            category: 'Project Category',
            img: <Img fluid={data.nike.childImageSharp.fluid}/>
        },
        {
            id: 2,
            title: 'Project Title 2',
            category: 'Project Category',
            img: <Img fluid={data.nike.childImageSharp.fluid}/>
        },
        {
            id: 3,
            title: 'Project Title 3',
            category: 'Project Category',
            img: <Img fluid={data.nike.childImageSharp.fluid}/>
        },
        {
            id: 4,
            title: 'Project Title 4',
            category: 'Project Category',
            img: <Img fluid={data.nike.childImageSharp.fluid}/>
        },
    ];

    return (
        <section className='projectCards'>
            <div className='container'>
                <div className='row'>
                    <div className='case-hero-container'>
                        <div className='case-hero-image'>
                            {/** Needs to be updated **/}
                            {/*<Img fluid={data.nike.childImageSharp.fluid}/>*/}
                            <Img require={props.data.homepage_project_hero.url}/>
                        </div>
                        <div className='case-hero-details'>
                            {/** Needs to be updated **/}
                            <h2>{props.data.homepage_project_title.text}</h2>
                            <span>{props.data.homepage_project_category.text}</span>
                        </div>
                    </div>
                    <div className='case-container'>
                    {caseStudies.map(caseItem => (
                        <div className='case' key={caseItem.id}>
                            <div className='case-image'>
                                <Img require={props.data.homepage_project_hero.url}/>
                            </div>
                            <div className='case-details'>
                                <h2>{props.data.homepage_project_title.text}</h2>
                                <span>{props.data.homepage_project_category.text}</span>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProjectCards;
