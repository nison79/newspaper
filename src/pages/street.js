import React from 'react'
import Layout from '../components/layout'
import ImageGridStreet from '../components/ImageGridStreet'
import '../pages/street.scss'

const street = () => {
  return (
    <Layout>
    <h1>Street</h1>
      <ImageGridStreet /> 
    </Layout>
  )
}

export default street
