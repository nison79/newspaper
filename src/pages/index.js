import * as React from "react"
import Layout from '../components/layout'
import Quote from '../components/Quote'
import '../styles/styles.scss'
import ImageGrid from '../components/ImageGrid'





const IndexPage = () => {
  return (
    <Layout>
      <ImageGrid />
      <Quote />
    </Layout>
  )
}

export default IndexPage
