import React from "react"
import Img from "gatsby-image"

const Slider = ({data}) => { 
  return (
    <div className="slider">
      <div className="slide current">
        <Img fluid={data.Seo.shareImage.image.childImageSharp.fluid}/>
        <div className="content">
          <h1>Hi <br/> I'm Luis Manzanero</h1>
          <p className='slider-text'>
            Scientist . Software Developer . Adventurer
          </p>
        </div>
      </div>     
    </div>
  );
}

export default Slider;