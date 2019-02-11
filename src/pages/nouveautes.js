import React, { Component } from 'react'
import Layout from '../components/Layout'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'
import get from 'lodash/get'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'

import NouvelHeader from '../components/nouvelHeader'

export const query = graphql`
query newProductQuery{
  allMarkdownRemark(
      limit:9,
      filter: {fileAbsolutePath: {regex: "\/data/"},frontmatter: {new: {eq:true } } }
      
    ) {
      edges {
          node {
            frontmatter {
                slug
                new
                title
                productImage {
                  childImageSharp{
                      sizes(maxWidth: 430) {
                          ...GatsbyImageSharpSizes
                      }
                  }
              }
            }
          }
      }    
  }
  
}

`



export default class IndexPage extends React.Component {
    
  
    render() {
      const newProducts = get(this, 'props.data.allMarkdownRemark.edges')
      return (
        <Layout location={this.props.location}>
           <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: "Les nouveautés"}]}
          title="7th Heaven - Nouveautés"
          />           
          <NouvelHeader />
          <NewProducts>
              <h2>NOS NOUVELLES GAMMES</h2>
              <ProductsWrapper>
                  <ProductItem>
                  {newProducts.map(({ node }) => {
                    
                    return (
                                    
                        <div style={{width:`10rem`,height:`auto`,margin:`0.8rem 2rem`}} key={node.frontmatter.slug}>
                                <div>
                                    <Img  sizes={node.frontmatter.productImage.childImageSharp.sizes}  />
                                </div>
                                
                                                             
                            <h5 stylec={{width:`10rem`}}>{node.frontmatter.title}</h5>
                            <Link style={{ boxShadow: 'none' }} to={`/produit/${node.frontmatter.slug}`}>découvrir</Link>
                        </div>              
                    )
                })}
                           
                  </ProductItem>
              </ProductsWrapper>
          </NewProducts>
        </Layout>
      )
    }
  }


const NewProducts = styled.div`
text-align:center;
margin:3rem auto;
font-family:'Montserrat';
h2 {
    color: #dc0262;    
}
`

const ProductsWrapper = styled.div`
width:90%;
margin:0 auto;
display:-webkit-box;
display:-ms-flexbox;
display:flex;
-webkit-box-orient:horizontal;
-webkit-box-direction:normal;
-ms-flex-direction:row;
        flex-direction:row;
-ms-flex-wrap:wrap;
    flex-wrap:wrap;
-webkit-box-align:center;
-ms-flex-align:center;
        align-items:center;
-webkit-box-pack:justify;
-ms-flex-pack:justify;
        justify-content:space-between;
`

const ProductItem = styled.div`
padding: 3%;
margin-top:0.2rem;
height:auto;
-webkit-box-flex: 1;
-ms-flex-positive: 1;
        flex-grow: 1;
-ms-flex-preferred-size: 25%;
    flex-basis: 25%;
display:-webkit-box;
display:-ms-flexbox;
display:flex;
-webkit-box-orient:vertical;
-webkit-box-direction:normal;
-ms-flex-direction:row;
        flex-direction:row;
justify-content:space-around;
-webkit-box-align:center;
-ms-flex-align:center;
-ms-flex-wrap:wrap;
    flex-wrap:wrap;
        align-items:flex-end;
        @media(max-width: 600px) {
            flex-direction:column;
            align-items:center;
        }

h5 {
    font-size:0.9rem;
    width:10rem;
    text-transform:uppercase;
    text-align:center!important;
    margin:0!important;
    height:3rem;
    font-weight:400;
    padding-bottom:1rem;
    padding-top:1rem;
}
img {
    max-width:10rem;
    @media (max-width: 800px) {
        width:7rem;            
    } 
}
a {
    padding:0.2rem 2.5rem;
    background-color:white;
    text-transform:uppercase;
    font-size:0.8rem;
    border:0.5px solid black;
    outline: none;
    text-decoration:none;
    color:black;
}

`

