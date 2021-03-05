import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from '../components/layout'
import './ImageGrid.scss'




const ImageGrid = () => {

  const widthLand= 800
  const heightLand = 600

  return (
    <Layout>
  
      
      <div className="archive">
        <article className="article">
        <StaticImage 
        src='../images/gallery/roses.jpg'
        alt="portrait"
        aspectRatio={4/3}
        fit="cover"
        layout="constrained"
        quality={100}
        />
        <h2>STREET</h2>
        </article>

        <article className="article">
        <StaticImage 
        src='../images/gallery/playg.jpg'
        alt="portrait"
        aspectRatio={4/3}
        fit="cover"
        quality={100}
        />
        <h2>PORTRAIT</h2>
        </article>

        <article className="article">
        <StaticImage 
        src='../images/gallery/airplane.jpg'
        alt="portrait"
        aspectRatio={4/3}
        fit="cover"
        quality={100}
        
        />
        <h2>BLACK/WHITE</h2>
        </article>

        <article className="article">
        <StaticImage 
        src='../images/gallery/flowers.jpg'
        alt="portrait"
        aspectRatio={4/3}
        fit="cover"
        quality={100}
        />
        <h2>NATURE</h2>
        </article>
      </div>
    </Layout>
  )
}

export default ImageGrid
