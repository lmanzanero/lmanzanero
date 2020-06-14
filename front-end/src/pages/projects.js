import React from 'react';  
import Layout from '../layouts/layout';

const Projects = () =>{
  return (
    <Layout>
        <div className="page">
          <h1>My Recent Work</h1>
          <div className="projects-options">
                <ul>
                  <li><a href="#">All</a></li>
                  <li>Web Design</li>
                  <li>Mobile Development</li>
                  <li>Videos</li>
                  <li>Music</li>
                </ul>
          </div>
          <div className="project-items">
            <div className="project-item">
              <div className="project-inner">
                <div className="title">Project 1</div>
                <div className="category">Web Design</div>
                <div className="links">
                  <button>Live Link</button>
                </div>
              </div>
            </div>
            <div className="project-item">
              <div className="project-inner">
                <div className="title">Project 1</div>
                <div className="category">Web Design</div>
                <div className="links">
                  <button>Live Link</button>
                </div>
              </div>
            </div>
            <div className="project-item">
              <div className="project-inner">
                <div className="title">Project 1</div>
                <div className="category">Web Design</div>
                <div className="links">
                  <button>Live Link</button>
                </div>
              </div>
            </div>
            <div className="project-item">
              <div className="project-inner">
                <div className="title">Project 1</div>
                <div className="category">Web Design</div>
                <div className="links">
                  <button>Live Link</button>
                </div>
              </div>
            </div>
            <div className="project-item">
              <div className="project-inner">
                <div className="title">Project 1</div>
                <div className="category">Web Design</div>
                <div className="links">
                  <button>Live Link</button>
                </div>
              </div>
            </div>
            <div className="project-item">
              <div className="project-inner">
                <div className="title">Project 1</div>
                <div className="category">Web Design</div>
                <div className="links">
                  <button>Live Link</button>
                </div>
              </div>
            </div>
          </div>
      </div>
    </Layout>
  );
}

export default Projects;