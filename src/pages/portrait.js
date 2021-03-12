import React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import ImageGridPortrait from '../components/ImageGridPortrait'
import './portrait.module.scss'

const portrait = () => {
  return (
    <Layout>
    <div className="back">
      <StaticImage  
        src='../images/back.png' 
        placeholder="blurred"
        layout="fixed"
        width={1500}
        
        /> 
    </div>
      <h1>Portrait</h1>
      <ImageGridPortrait />
    </Layout>
  )
}

export default portrait
