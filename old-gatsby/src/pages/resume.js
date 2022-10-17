import React, { useState } from 'react';   
import Modal from '../components/modal';
import ResumeContent from '../components/ResumeContent';
import SEO from "../components/seo"
import Layout from '../layouts/layout';

 

const Resume = () =>{
 const initalResumeContent = {
    title: 'title',
    date: 'date',
    techs: '',
    desc: 'desc',
    siteLink: '#'
  }
  const [ isCartModalOpen, setCartModalOpen ] = useState(false);
  const [ resumeContent, setResumeContent ] = useState(initalResumeContent);
  return (
     <Layout>
          <div className="page">
          <SEO title="Resume"
                description="I have a bachelors Degree in Enviornmetal Science from Galen Univeristy. Worked for companies such as Belizing.com, Oblip.com..."
    
          />   
          <Modal
            isOpen={isCartModalOpen} 
            modalHandler={setCartModalOpen}
            >
              <ResumeContent
                title={resumeContent.title}
                date={resumeContent.date}
                techs={resumeContent.techs}
                desc={resumeContent.desc}
                siteLink={resumeContent.siteLink}
              />
          </Modal>
          <h1 className="title">Resume</h1> 
          <h4 className="sub-title">A timeline of where I have worked.</h4>
          <ul className="timeline"> 
          <li>
              <div className="direction-r">
                <div className="flag-wrapper">
                  <span className="flag">Nebulacore.tech</span>
                  <span className="time-wrapper"><span className="time">2018 - present</span></span>
                </div>
                <div className="desc">Full stack developer & Mobile Developer!
                   <br/>
                   <span className="more" onClick={() => {
                     setCartModalOpen(true)
                     setResumeContent({
                      title: 'Nebula Core Technologies',
                      date: '2018-present',
                      techs: '#Javascript/TypeScript #Vue.js #React-Native #flutter #dart',
                      desc: '<p>I\'m part of a team of international entrepreneurs and engineers building the technologies of tomorrow.</p>',
                      siteLink: "https://nebulacore.tech/"
                     })
                    }}>learn more</span>
                </div> 
              </div>
            </li>
            <li>
              <div className="direction-l">
                <div className="flag-wrapper">
                  <span className="flag">Gift Cards Belize</span>
                  <span className="time-wrapper"><span className="time">2020 - present</span></span>
                </div>
                <div className="desc">Front-end Web developer
                   <br/>
                   <span className="more" onClick={() => {
                     setCartModalOpen(true)
                     setResumeContent({
                      title: 'Gift Cards Belize',
                      date: '2020-present',
                      techs: '#Javascript/TypeScript #Vue.js #Node.js #Websockets',
                      desc: '<p>Gift Cards Belize is an ecommerce website that allows Belizeans to purchase gift cards easily, at any time of the day without a credit card. At Gift Cards Belize, I built the front end portion of the website from mocks ups using various web technologies, and currently building features to integrate with other payments methods. </p>',
                      siteLink: 'https://giftcards.bz/'
                    })
                    }}>learn more</span>
                </div> 
              </div>
            </li>
            <li>
              <div className="direction-r">
                <div className="flag-wrapper">
                  <span className="flag">EcoCrypt.org</span>
                  <span className="time-wrapper"><span className="time">2018 - present</span></span>
                </div>
                <div className="desc">Full Stack Web Developer
                  <br/>
                  <span className="more" onClick={() => {
                    setCartModalOpen(true)
                    setResumeContent({
                      title: 'EcoCrypt.org',
                      date: '2018 - present',
                      techs: '#Javascript/TypeScript #Node.js #React #Next.js #flutter #dart',
                      desc: 'While at Galen University, for my final project, I developed the idea of creating a social network to enforce environmental laws. The main functionality, granting users to report any illegal activity that might breach our environmental laws, in the hopes that authorities can act upon as soon as possible with concrete evidence. This is still an ongoing project which I have opened sourced, and plan to work on as a hobby or use to further my studies.',
                      siteLink: 'https://ecocrypt.org/'
                     })
                  }}>learn more</span></div>  
              </div>
            </li>
            <li>
              <div className="direction-l">
                <div className="flag-wrapper">
                  <span className="flag">Belizing.com</span>
                  <span className="time-wrapper"><span className="time">2018 - 2020</span></span>
                </div>
                <div className="desc">Content Creator & Android Developer
                   <br/>
                   <span className="more" onClick={() => {
                     setCartModalOpen(true)
                     setResumeContent({
                       title: 'Belizing.com',
                       date: '2018 - 2020',
                       techs: '#kotlin #AndroidStudio #Javascript #Node.js - Alexa Skills Kit',
                       desc: 'While on my last semester at Galen University, I started to work at GoBelizing L.T.D as a software engineer. GoBelizing has grown to be the largest online platform and marketplace for tours and activities in Belize, and is constantly evolving in new ways to meet the demands of online exposure. I eventually created an android app called Belizing Payments, which extended their existing platform to meet android users to accept payments on demand with their phones. Also, I did videos and edited podcast episodes to complement the company’s ever evolving platform. All the videos I have edited can be found on their Youtube Channel.',
                       siteLink: 'https://belizing.com/'
                      })
                   }}>learn more</span>
                </div> 
              </div>
            </li>
            <li>
              <div className="direction-r">
                <div className="flag-wrapper">
                  <span className="flag">Galen University</span>
                  <span className="time-wrapper"><span className="time">2016 - 2018</span></span>
                </div>
                <div className="desc">Web Developer and content creator
                   <br/>
                   <span className="more" onClick={() => {
                     setCartModalOpen(true)
                     setResumeContent({
                       title: 'Galen University',
                       date: '2016 - 2018',
                       techs: '#Wordpress #JavaScript',
                       desc: 'After applying for Galen University Environmental Science degree and their scholarship program, I was granted a work scholarship based on my programming skills. My main role was as a content creator, however, I eventually developed an interactive blog called The Soaring Eagle, which was used as the school’s main informative blog at that time. I also enrolled in a few computer science classes to polish my programming skills.'
                      })
                   }}>learn more</span>
                </div> 
              </div>
            </li>
            <li>
              <div className="direction-l">
                <div className="flag-wrapper">
                  <span className="flag">DegaSolutions Inc.</span>
                  <span className="time-wrapper"><span className="time">2015 - 2016</span></span>
                </div>
                <div className="desc">Front-end Web & Wordpress Developer
                   <br/>
                   <span className="more" onClick={() => {
                     setCartModalOpen(true)
                     setResumeContent({
                       title: 'DegaSolutions Inc.',
                       date: '2015 - 2016',
                       techs: '#JavaScript #Angular #Ionic/Cordova #wordpress',
                       desc: 'After enrolling in a few IT classes at Sacred Heart Junior College, and after helping others with programming, I was recommended for a remote software job while finishing up my associates degree. While at Dega Solutions, we were building a movie recommendation app that was based on the user\'s interaction.'
                      })
                   }}>learn more</span>
                </div> 
              </div>
            </li>
          </ul> 
          <br/>
          {/* <Link to="/resume"><button>More</button></Link>  */}
            {/* <div className="work-section">
              <article className="work-item">
                <div className="work-item-inner">
                    <div className="work-logo">
                      <img alt="Belizing.com" src="https://di7b4gw2u10mc.cloudfront.net/295000/294288.906.486da78a22.jpg"/>
                    </div>
                    <div className="work-heading">
                      <h2>Full Stack Web Developer at Belizing.com</h2>
                      <span>2018-present</span>
                    </div>
                    <div className="work-content">
                      <p>Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may.</p>
                      <p>Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may.</p>
                      <p>Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may.</p>
                    </div>
                </div>
              </article>
            </div> */}
        </div>
    </Layout>
  );
}

export default Resume;
