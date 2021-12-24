import React, { useState, useEffect, useRef }from 'react';  
import Project from '../components/project';
import SEO from "../components/seo"
import Layout from '../layouts/layout';  
// import useGetProjects from '../services/hooks/useProjectsHook';


const Projects = () => { 
  // const { data, status, isloading, error } = useGetProjects('https://lmanzanero.herokuapp.com/projects');
  const projectItems = useRef(null);
  const [ tag, setTag ] = useState('all');
  useEffect(() => {   
    const projectItems = document.querySelectorAll('.project-item .category')
    if(tag != 'all') { 
      projectItems.forEach((item, index) => { 
        //ensure all items are populated again before filtering
        document.querySelectorAll('.project-item')[index].style.display = 'block';
        //filter times if category is included in innerHTML string
        if(!item.innerHTML.toLowerCase().includes(tag.toLowerCase())) {
          document.querySelectorAll('.project-item')[index].style.display = 'none';
        }
      })
    } else {
      //ensures to populate page if all is selected
      document.querySelectorAll('.project-item').forEach(item => item.style.display = 'block')
    }
  }, [tag])
  const onClickItem = (e) => { 
    const options = document.querySelectorAll('.option'); 
    setTag(e.target.innerHTML.toLowerCase());
    options.forEach(option => { 
      option.classList.remove('active');
    });
    e.target.classList.add('active');
  }

  return (
    <Layout>
        <SEO 
            title="Projects"
            description="Here is a collection of many projects that I have worked on, contributed, or built for fun!"
        /> 
        <div className="page">
          <h1 className="title">Projects!</h1>
          <p className="sub-title">Here is a collection of many projects that I have worked on, contributed, or built for fun!</p>
          <div className="page-categories">
                <ul>
                  <li><span className="option active" onClick={onClickItem}>All</span></li>
                  <li><span className="option" onClick={onClickItem}>JavaScript</span></li>
                  <li><span className="option" onClick={onClickItem}>React</span></li>
                  <li><span className="option" onClick={onClickItem}>Vue</span></li>
                  <li><span className="option" onClick={onClickItem}>Svelte</span></li>
                  <li><span className="option" onClick={onClickItem}>Node.js</span></li>
                  <li><span className="option" onClick={onClickItem}>Flutter/Dart</span></li>    
                  <li><span className="option" onClick={onClickItem}>Kotlin</span></li> 
                </ul>
          </div>
          <div className="project-items" ref={projectItems}>
            {/* {
             isloading ? 'loading...' : data.map(project => ( 
                <Project project={project} tag={tag} />
              ))
            } */}
            <Project 
              name="ESL Real Time Games" 
              tags="#JavaScript #Svelte" 
              image_url="https://esl-games.vercel.app/esl-social.jpg"
              project_link="https://esl-games.vercel.app/" />
            <Project 
              name="Gift Cards Belize" 
              tags="#React" 
              image_url="https://res.cloudinary.com/daeq8bixw/image/upload/v1620461000/Screenshot_2021_05_08_at_16_03_09_79b61516a1.png"
              project_link="https://giftcards.bz/" />
            <Project 
              name="EcoCrypt.org" 
              tags="#React #Node.js #JavaScript" 
              image_url="https://res.cloudinary.com/daeq8bixw/image/upload/v1616780380/Screenshot_2021_03_27_at_01_39_31_2e20c61e4f.png"
              project_link="https://ecocrypt.org/" />
            <Project 
              name="Belize Coronavirus Tracker" 
              tags="#JavaScript" 
              image_url="https://res.cloudinary.com/daeq8bixw/image/upload/v1616780119/Screenshot_2021_03_27_at_01_35_10_48b2e4fa7b.png"
              project_link="https://lmanzanero.github.io/belize-coronavirus-tracker/" />
            <Project 
              name="BettaPay" 
              tags="#Vue" 
              image_url="https://res.cloudinary.com/daeq8bixw/image/upload/v1620461285/Screenshot_2021_05_08_at_16_07_54_892743a8fe.png"
              project_link="https://bettapay.app/" />
            <Project 
            name="BettaPay Mobile" 
            tags="#Flutter/Dart" 
            image_url="https://res.cloudinary.com/daeq8bixw/image/upload/v1622399770/Screenshot_2021_05_31_at_02_34_10_e4db41c0eb.png"
            project_link="https://bettapay.app/" />
            <Project 
              name="EcoCrypt.org Mobile" 
              tags="#Flutter/Dart" 
              image_url="https://res.cloudinary.com/daeq8bixw/image/upload/v1620548473/Blog_Cover_85b173ce50.png"
              project_link="https://ecocrypt.org/" />
            <Project 
              name="Belizing Payments - Android" 
              tags="#Kotlin" 
              image_url="https://res.cloudinary.com/daeq8bixw/image/upload/v1620460534/belizing_payments_bdb861e244.png"
              project_link="hhttps://payments.belizing.com/" />
            <Project 
              name="React Firestore Shopping Cart" 
              tags="#React #CloudFunctions #firestore" 
              image_url="https://res.cloudinary.com/daeq8bixw/image/upload/v1623945259/Screenshot_2021_06_17_at_23_54_09_4b9ce0c97b.png"
              project_link="https://lmanzanero.github.io/firebase-react-store/" />
            <Project 
              name="JavaScript Realtime Quiz" 
              tags="#JavaScript #Node.js #Socket.io" 
              image_url="https://res.cloudinary.com/daeq8bixw/image/upload/v1622399771/Screenshot_2021_05_28_at_01_11_53_d46b1e8513.png"
              project_link="http://real-time-games-staging.herokuapp.com/real-time-quiz" />
            <Project 
              name="JavaScript Calculator" 
              tags="#JavaScript" 
              image_url="https://res.cloudinary.com/daeq8bixw/image/upload/v1616779674/Screenshot_2021_03_27_at_01_27_43_99d47c0a15.png"
              project_link="https://lmanzanero.github.io/functional-js-calculator/" />
            <Project 
              name="JavaScript Weather App" 
              tags="#JavaScript" 
              image_url="https://res.cloudinary.com/daeq8bixw/image/upload/v1616780011/Screenshot_2021_03_27_at_01_33_24_005ba354d7.png"
              project_link="https://lmanzanero.github.io/weather-app/" />
            <Project 
              name="JavaScript Youtube Player" 
              tags="#JavaScript" 
              image_url="https://res.cloudinary.com/daeq8bixw/image/upload/v1616780325/Screenshot_2021_03_27_at_01_38_35_371e9928b4.png"
              project_link="https://lmanzanero.github.io/video-carousel-slider/" />
          </div>
        </div>
    </Layout>
  );
}

export default Projects;
