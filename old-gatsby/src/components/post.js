import React from "react"
import { Link } from "gatsby"
import Moment from 'react-moment';
import Img from "gatsby-image"

const Post = ({ article }) => { 
  console.log(article)
  return (
    <Link to={`/blog/${article.node.slug}/`}>
      <div className="blog-post">
          <div className="image">
              <Img fluid={article.node.image.childImageSharp.fluid} style={{ height: '100%', objectFit: 'cover',}}/>
           </div>
          <div className="blog-info">
            <div className="category">#<span>{article.node.category.name}</span></div>
            <div className="blog-title"><h2>{article.node.title}</h2></div>
            <div className="exerpt">{article.node.content}</div>
            <div className="author">Luis Manzanero</div> 
            <div className="published-date"> <Moment format="MMM Do YYYY">{article.node.publishedAt}</Moment></div>
          </div>
      </div>  
    </Link>
  )
}

export default Post;