import React from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import styled from 'styled-components'


import Layout from '../components/Layout'
import IndexHeader from '../components/indexHeader'
import IndexHistoire from '../components/indexHistoire'
import IndexRecomp from '../components/indexRecomp'
import IndexNews from '../components/indexNews'
import IndexElle from '../components/indexElle'
import IndexLui from '../components/indexLui'
import IndexNovautes from '../components/indexNovautes'
import IndexTutos from '../components/indexTutos'




class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )
    
    
    return (
      <Layout location={this.props.location} title={siteTitle} >
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
          body={{margin:`0`}}
        />
        
        <IndexHeader />
        <IndexHistoire />
        <IndexRecomp />
        <IndexNews />
       
        <IndexElle />
        <IndexLui />
        <IndexNovautes />
        <IndexTutos />
      </Layout>
    )
  }  
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }  
  }
`


