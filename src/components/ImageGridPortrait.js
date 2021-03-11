import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"


import './ImageGridPortrait.scss'




const ImageGridPortrait = () => {

  // const widthP= 400
  // const heightP = 400

  return (
    
  
      
      <div className="archive">
        
          <article className="article">
          <StaticImage 
          src='../images/portrait-gallery/Efi.jpg'
          alt="portrait"
          aspectRatio={3/4}
          fit="cover"
          layout="constrained"
          quality={100}
          />
          </article>
        

        <article className="article">
          <StaticImage 
          src='../images/portrait-gallery/stella-beach.jpg'
          alt="portrait"
          aspectRatio={3/4}
          fit="cover"
          quality={100}
          />
        </article>
        

        <article className="article">
          <StaticImage 
          src='../images/portrait-gallery/elli-stella.jpg'
          aspectRatio={3/4}
          fit="cover"
          quality={100}
          />

        </article>

        <article className="article">
          <StaticImage 
          src='../images/portrait-gallery/nick.jpg'
          alt="portrait"
          aspectRatio={3/4}
          fit="cover"
          quality={100}
          />
        </article>

        <article className="article">
          <StaticImage 
          src='../images/portrait-gallery/drinking-water.jpg'
          alt="portrait"
          aspectRatio={3/4}
          fit="fill"
          layout="constrained"
          width={800}
          quality={100}
          />
          </article>

          <article className="article">
          <StaticImage 
          src='../images/portrait-gallery/ell-christmas.jpg'
          alt="portrait"
          aspectRatio={3/4}
          fit="fill"
          layout="constrained"
          width={800}
          quality={100}
          />
          </article>

          <article className="article">
          <StaticImage 
          src='../images/portrait-gallery/efi2.jpg'
          alt="portrait"
          aspectRatio={3/4}
          fit="fill"
          layout="constrained"
          width={800}
          quality={100}
          />
          </article>

          <article className="article">
          <StaticImage 
          src='../images/portrait-gallery/stella-close.jpg'
          alt="portrait"
          aspectRatio={3/4}
          fit="fill"
          layout="constrained"
          width={800}
          quality={100}
          />
          </article>

          <article className="article">
          <StaticImage 
          src='../images/portrait-gallery/george.jpg'
          alt="portrait"
          aspectRatio={3/4}
          fit="fill"
          layout="constrained"
          width={800}
          quality={100}
          />
          </article>

          <article className="article">
          <StaticImage 
          src='../images/portrait-gallery/elpida.jpg'
          alt="portrait"
          aspectRatio={3/4}
          fit="fill"
          layout="constrained"
          width={800}
          quality={100}
          />
          </article>

          <article className="article">
          <StaticImage 
          src='../images/portrait-gallery/dad.jpg'
          alt="portrait"
          aspectRatio={3/4}
          fit="fill"
          layout="constrained"
          width={800}
          quality={100}
          />
          </article>
        
        
      </div>
    
  )
}

export default ImageGridPortrait
