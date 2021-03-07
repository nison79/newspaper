import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from 'gatsby'

import './ImageGrid.scss'




const ImageGrid = () => {

  // const widthP= 400
  // const heightP = 400

  return (
    
  
      
      <div className="archive">
        <Link to="/street">
          <article className="article">
          <StaticImage 
          src='../images/gallery/thess.jpg'
          alt="portrait"
          aspectRatio={4/3}
          fit="cover"
          layout="constrained"
          quality={100}
          
          
          // width={widthP}
          // height={heightP}
          />
          <h2>STREET</h2>
          <p>The shots that can capture the life in the city. The key is always to be creative and see the unnatural in the nature of the enviroment.
          Those strange moments are everything.
          </p>
          </article>
        </Link>

        <article className="article">
        <StaticImage 
        src='../images/gallery/stella.jpg'
        alt="portrait"
        aspectRatio={4/3}
        fit="cover"
        quality={100}
        />
        <h2>PORTRAIT</h2>
        <p>People are unique. People are beautiful. People are mysterious creatures. I want to expose those facts, the bright side of life , the bright side of people.</p>
        </article>

        <article className="article">
        <StaticImage 
        src='../images/gallery/bwelli.jpg'
        alt="portrait"
        aspectRatio={4/3}
        fit="cover"
        quality={100}
        
        
        />
        <h2>BLACK/WHITE</h2>
        <p>The color does not matter, but the feelings of the scenery. Black and White shots have amazing power and we want to be servants of this power.</p>
        </article>

        <article className="article">
        <StaticImage 
        src='../images/gallery/field2.jpg'
        alt="portrait"
        aspectRatio={4/3}
        fit="cover"
        quality={100}
        />
        <h2>NATURE</h2>
        <p>Nature has many faces. I always attracted by the beauty and the uniqueness of everything that surrounds me. I want to be part of that, I want to explore the unknown of nature. </p>
        </article>
      </div>
    
  )
}

export default ImageGrid
