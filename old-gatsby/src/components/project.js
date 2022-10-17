import React from 'react' 
export default function Project({name, image_url, tags, project_link}) { 
  return (
    <div className="project-item">
        <img alt="" src={image_url}/>
        <div className="project-inner">
          <div className="project-title">{name}</div>
          <div className="category">{tags}</div>
          <div className="links">
            <a href={project_link} target="_blank" rel="noreferrer">Live Link</a>
          </div>
        </div>
    </div>
  )
}
