import React from 'react'
import Layout from '../components/layout'
import ImageGridGallery from '../components/ImageGridGallery'
import '../pages/street.scss'

const street = () => {
  return (
    <Layout>
    <h1>Street</h1>
      <ImageGridGallery /> 
    </Layout>
  )
}

export default street
