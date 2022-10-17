import React, { useState, useEffect } from 'react';  
import { StaticQuery, graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from '../layouts/layout'; 
import Posts from '../components/posts';

const Blog = () =>{
  const [ tag, setTag ] = useState('all');
  useEffect(() => {  
    
  }, [])

  const onClickItem = (e) => { 
    setTag(e.target.innerHTML.toLowerCase());
    const options = document.querySelectorAll('.option'); 
    options.forEach(option => { 
      option.classList.remove('active');
    });
    e.target.classList.add('active');
  }
  return (
     <Layout>
       <SEO 
            title="Blog"
            description="I also enjoy writing about the environment, life experiences, music, and colloborate with other coders!"
       
        /> 
        <div className="page">
            <h1 className="title">Blog</h1>
            <p className="sub-title">I also enjoy writing about the environment, life experiences, and music!</p>
            <div className="page-categories">
                  <ul>
                    <li><span className="option active"onClick={onClickItem} >All</span></li>
                    <li><span className="option" onClick={onClickItem}>Nature</span></li>
                    <li><span className="option" onClick={onClickItem}>Story</span></li>
                    <li><span className="option" onClick={onClickItem}>Adventure</span></li>
                    <li><span className="option" onClick={onClickItem}>Music</span></li>   
                  </ul>
            </div>
            <div className="blog-posts">
            <StaticQuery
                 query={graphql`
                    query { 
                    allStrapiArticle(filter: {status: {eq: "published"}}) {
                    edges {
                    node {
                      strapiId
                      slug
                      title
                      content
                      publishedAt
                      category {
                        name
                      }
                      image {
                        childImageSharp {
                          fluid {
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
                  <Posts article={data.allStrapiArticle.edges} tag={tag}/>   
              )}
            />
            </div>
            {/* <button>Load More</button>  */}
        </div>
     </Layout>
  );
}

export default Blog;
