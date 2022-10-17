import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Moment from "react-moment"

import Layout from "../layouts/layout"
import Seo from "../components/seo"
import Markdown from 'react-markdown';
import ShareButtons from "../components/social/shareButtons"

const BlogPost = ({ data }) => {  
  const article = data.strapiArticle
  console.log(article);
  return (
    <Layout>
       <Seo
          title={article.Seo.metaTitle}
          description={article.Seo.metaDescription}
          image={article.Seo.shareImage.image.publicURL}
        />
      <div className="page"> 
        <div id="banner">
          <Img style={{width: '100%', height: '70vh', objectFit: 'cover'}} fluid={article.image.childImageSharp.fluid}/> 
        </div> 
        <div className="markdown"> 
          <div className="markdown-container">
          <h1 className="title">{article.title}</h1>
          <ShareButtons/>
          <Markdown source={article.content} escapeHtml={false} />  
            <br/>
            <br/>
            <hr className="uk-divider-small" />
            <br/>
            <div className="uk-grid-small uk-flex-left" data-uk-grid="true">
                <div className="author-info">
                    <div>
                      {article.user.image && <Img fixed={article.user.image.childImageSharp.fixed} imgStyle={{ position: 'static',  borderRadius: '50%' }} />}
                      <p className="username">By { article.user.username }</p>
                    </div>
                    <p className="date">Published: <Moment format="MMM Do YYYY">{article.published_at}</Moment></p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ArticleQuery($slug: String!) {
    strapiArticle(slug: { eq: $slug }, status: {eq: "published"}) {
      strapiId
      title
      content
      publishedAt
      Seo {
        metaDescription
        metaTitle
        shareImage {
          image {
            publicURL
          }
        }
      }
      image {
        publicURL
        childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
        }
      } 
      user {
        username
        image {
          childImageSharp {
            fixed(width: 30, height: 30) {
              src
            }
          }
        } 
      }
    }
  }
`

export default BlogPost;