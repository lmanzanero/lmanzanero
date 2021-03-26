import React, { useState, useEffect }from 'react';  
import SEO from "../components/seo"
import Layout from '../layouts/layout';  
import useGetProjects from '../services/hooks/useProjectsHook';


const Projects = () =>{ 
  const { data, status, isloading, error } = useGetProjects('https://lmanzanero.herokuapp.com/projects');
  console.log(data, status, isloading, error); 
  // const onClickItem = (e) => { 
  //   const options = document.querySelectorAll('.option'); 
  //   options.forEach(option => { 
  //     option.classList.remove('active');
  //   });
  //   e.target.classList.add('active');
  // }

  return (
    <Layout>
        <SEO 
            title="Projects"
            description="Here is a collection of many projects that I have worked on, contributed, or built for fun!"
        /> 
        <div className="page">
          <h1 className="title">Cool Projects I have built!</h1>
          <p className="sub-title">I enjoy being artistic with web design, mobile development, music, and videography!</p>
          <div className="projects-options">
                <ul>
                  <li><span className="option active" >All</span></li>
                  <li><span className="option">Web Dev</span></li>
                  <li><span className="option">Mobile Dev</span></li>
                  <li><span className="option">Videos</span></li>
                  <li><span className="option">Music</span></li>   
                </ul>
          </div>
          <div className="project-items">
            {
             isloading ? 'loading...' : data.map(project => ( 
                <div key={project.id} className="project-item">
                    <img alt="" src={project.img_url.formats.medium.url}/>
                    <div className="project-inner">
                     <div className="project-title">{project.project_name}</div>
                      {/* <div className="category">Web Design</div> */}
                      <div className="links">
                        <a href={project.link} target="_blank" rel="noreferrer"><button>Live Link</button></a>
                      </div>
                    </div>
                </div>
              ))
            }
          </div>
        </div>
    </Layout>
  );
}

export default Projects;
