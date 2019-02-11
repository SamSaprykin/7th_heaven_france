import React from 'react'
import Layout from '../components/Layout'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'

import MapPourLui from '../components/MapPourLui'
import CosmeticLui from '../components/cosmeticLui'
import buttonScroll from '../data/images/homme/buttonScroll.png'
import pourLLuiImage from '../data/images/homme/pourlui.png'

const ProductsHommeListing = graphql`
    query ProductsHommeListing {
        allMarkdownRemark(limit:4,sort:{
        order: DESC
        fields:[frontmatter___date]
        },filter:{ fileAbsolutePath: {regex : "\/hommeProduit/"} }) {
        edges {
        node {
           
            frontmatter {
            title
            slug
            productImage {
                childImageSharp{
                    sizes(maxWidth: 700) {
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



  const PourLui = ({location}) => (
    <Layout location={location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: "Gamme homme"}]}
          title="7th Heaven - Pour Lui"
          />
        <BigHeader style={{zIndex:`-100`}}>
                <WrapperImages>
                    <TextElle>Pour Lui</TextElle>
                    <img src={pourLLuiImage} />
                </WrapperImages>            
            </BigHeader>
            <CosmeticLui />
            <ProductsLui>
                <StaticQuery
                        query={ProductsHommeListing}
                        render={({allMarkdownRemark}) => (
                            allMarkdownRemark.edges.map((edge) => (                      
                                <ProductLui key={edge.node.frontmatter.slug}>
                                    <Link to={`/produit/${edge.node.frontmatter.slug}`}>
                                        <Img sizes={edge.node.frontmatter.productImage.childImageSharp.sizes} />
                                    </Link>
                                    <h2>{edge.node.frontmatter.title}</h2>
                                </ProductLui>
                            ))
                        )}
                />
                
                
            </ProductsLui>
            <MapPourLui />
    </Layout>
    
)

export default PourLui


const BigHeader = styled.div`
width:100%;
background-color: #131313;
font-family:'Montserrat';
position:relative;
padding:3rem 0;
text-align:center;
padding-top:5rem;
@media(max-width: 600px) {
    padding:5rem 0;
}
`


const TextElle = styled.p`
color:white;
font-size:4rem;
float: none;
position: absolute;
z-index:1;
top: 72%;
left: 50%;
font-family:'Montserrat';
text-transform:uppercase;
font-weight:600;
-webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
@media(max-width: 600px) {
    font-size:3rem;
    width:20rem;
}
`

const WrapperImages = styled.div`
    max-width:100%;
    height:auto;
    img {
        max-width:100%;
        height:auto;
    }
`




const ProductsLui = styled.div`
width:100%;
height:auto;
display:-webkit-box;
display:-ms-flexbox;
display:flex;
-webkit-box-orient:horizontal;
-webkit-box-direction:normal;
-ms-flex-direction:row;
        flex-direction:row;
-webkit-box-align:start;
-ms-flex-align:start;
        align-items:flex-start;
-webkit-box-pack:center;
-ms-flex-pack:center;
        justify-content:center;
-ms-flex-wrap:wrap;
    flex-wrap:wrap;
background-color: #000000;
color:white;

`

const ProductLui = styled.div`
max-width:24rem;
 
margin:3rem 4rem 1rem;
@media(max-width: 1000px) {
  margin:2rem 2rem 1 rem;
}
h2 {
    max-width:8rem;
    font-family:'Montserrat';
    font-size:1rem;
    text-align:center;
    margin-top:1rem;
    margin-bottom:2rem;
    @media(max-width: 1000px) {
      max-width:6rem;
    }
}
  
`

const ProductLuiImage = styled.img`
max-width:8rem;
@media(max-width: 1000px) {
  max-width:6rem;
}
`

