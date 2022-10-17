import React from "react" 
import Post from './post';
const Posts = ({ article, tag }) => { 
  const allPosts = article;    
  return (
     <div className="blog-posts">
      { allPosts.map((post, i) => {  
        if( tag == 'all' ) {
          return (
            <Post article={post} key={post.node.slug} />
          );
        }  

        if( post.node.category.name.toLowerCase() == tag) {
          return (
            <Post article={post} key={post.node.slug} />
          );
        } 
      })}
     </div>
  )
}

export default Posts;