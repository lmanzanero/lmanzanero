import React from "react" 
import Layout from "../layouts/layout" 
import SEO from "../components/seo"
import '../layouts/layout' 
import { StaticQuery, graphql } from "gatsby"
import Slider from "../components/slider"
import { Link } from "gatsby"

const IndexPage = () => (
  <Layout> 
      <SEO 
          title="Scientist, Software Developer, Adventurer" 
          description="Hello! I am Luis Manzanero - An Aspiring environmental scientist with a passion for programming. I am from the world's most beautiful country, Belize!"
          isHomePage="true"
      /> 
      <div className="page">
      <StaticQuery
                 query={graphql`
                 query {
                   strapiHomepage {
                     Hero {
                       HeroText
                     }
                     Seo {
                       metaTitle
                       metaDescription 
                       shareImage {
                         id
                         image {
                          childImageSharp {
                            fluid(maxWidth: 3220) {
                              ...GatsbyImageSharpFluid
                            }
                           }
                         } 
                       }
                     }
                   }
                 }
               `}
              render={data => ( 
                  <Slider data={data.strapiHomepage}/>  
              )}
            />
      </div> 
  </Layout>
)

export default IndexPage
