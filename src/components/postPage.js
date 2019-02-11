import React, { Component } from 'react'
import Layout from './Layout'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import Helmet from 'react-helmet'

export default class postPage extends Component {
  render() {
    const { markdownRemark } = this.props.data
    const { location } = this.props
    return (
      <Layout location={location}>
        <Helmet
              htmlAttributes={{ lang: 'en' }}
              meta={[{ name: 'description', content: "Article"}]}
              title={markdownRemark.frontmatter.title}
          />
        <Img sizes={markdownRemark.frontmatter.featuredImage.childImageSharp.sizes} />
        <PostWrapper>
          <h3>{markdownRemark.frontmatter.title}</h3>
            
            <div dangerouslySetInnerHTML={{
                __html:markdownRemark.html
              }} />
          
          <h5>{markdownRemark.frontmatter.date}</h5>
        </PostWrapper>              
      </Layout>
    )
  }
}




export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(frontmatter: {
    slug: {
      eq: $slug
    }    
  }) {
      html
        frontmatter {
          slug
          date
          title
          featuredImage {
            childImageSharp{
                sizes(maxWidth: 430) {
                    ...GatsbyImageSharpSizes
                }
            }
        }
    }
    }
  }
` 

const PostWrapper = styled.div`
max-width:1024px;
height:auto;
margin:2rem auto;
@media (max-width: 1024px) {
  margin:0 2rem;
  h3 {
    font-size:14px;
  }
  div {
    max-width:600px;
  }
  pre {
    width:400px;
  }            
}

`
