import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"


import './ImageGridStreet.scss'




const ImageGridStreet = () => {

  // const widthP= 400
  // const heightP = 400

  return (
    
  
      
      <div className="archive">
        
          <article className="article">
          <StaticImage 
          src='../images/gallery/thess.jpg'
          alt="portrait"
          aspectRatio={4/3}
          fit="cover"
          layout="constrained"
          quality={100}
          />
          </article>
        

        <article className="article">
          <StaticImage 
          src='../images/gallery/stella.jpg'
          alt="portrait"
          aspectRatio={4/3}
          fit="cover"
          quality={100}
          />
        </article>
        

        <article className="article">
          <StaticImage 
          src='../images/gallery/bwelli.jpg'
          alt="portrait"
          aspectRatio={4/3}
          fit="cover"
          quality={100}
          />

        </article>

        <article className="article">
          <StaticImage 
          src='../images/gallery/field2.jpg'
          alt="portrait"
          aspectRatio={4/3}
          fit="cover"
          quality={100}
          />
        </article>

        <article className="article">
          <StaticImage 
          src='../images/gallery/thess.jpg'
          alt="portrait"
          aspectRatio={4/3}
          fit="cover"
          layout="constrained"
          quality={100}
          />
          </article>
        

        <article className="article">
          <StaticImage 
          src='../images/gallery/stella.jpg'
          alt="portrait"
          aspectRatio={4/3}
          fit="cover"
          quality={100}
          />
        </article>
        

        <article className="article">
          <StaticImage 
          src='../images/gallery/bwelli.jpg'
          alt="portrait"
          aspectRatio={4/3}
          fit="cover"
          quality={100}
          />
        </article>

        <article className="article">
          <StaticImage 
          src='../images/gallery/field2.jpg'
          alt="portrait"
          aspectRatio={4/3}
          fit="cover"
          quality={100}
          />
        </article>




      </div>
    
  )
}

export default ImageGridStreet
