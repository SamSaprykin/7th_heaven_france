import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'
import get from 'lodash/get'

import gamme from '../../data/images/pourElle/gamme.png'
import produit from '../../data/images/pourElle/produit1.png'

import produit2 from '../../data/images/pourElle/produit2.png'
import produit3 from '../../data/images/pourElle/produit3.png'
import produit4 from '../../data/images/pourElle/produit4.png'
import produit5 from '../../data/images/pourElle/produit5.png'
import produit6 from '../../data/images/pourElle/produit6.png'
import produit7 from '../../data/images/pourElle/produit7.jpg'

import Layout from '../../components/Layout'
import masquesSpecifiques from '../../data/images/categories/mask-specifique.jpg'


export const query = graphql`
query SpecificMasks{
    allMarkdownRemark(
        limit:9,
        filter: {fileAbsolutePath: {regex: "\/product/"},frontmatter: {category: {eq: "masques-specifiques-spa"}}}
        
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


export default class SpecificMasks extends React.Component {
    render() {
        const SpecificMasks = get(this, 'props.data.allMarkdownRemark.edges')
        return (
            <Layout location={this.props.location}>
            <Helmet
                htmlAttributes={{ lang: 'en' }}
                meta={[{ name: 'description', content: "MASQUES SPECIFIQUES"}]}
                title="7th Heaven - MASQUES SPECIFIQUES"
            />   
            <BigHeader style={{zIndex:`-100`}}>
                <WrapperImages>
                    <TextElle>MASQUES SPECIFIQUES</TextElle>
                </WrapperImages>            
            </BigHeader>
            <ProductsWrapper>
                 
                  {SpecificMasks.map(({ node }) => {
                    
                    return (
                                    
                        <div style={{width:`10rem`,height:`auto`,margin:`2rem auto`}} key={node.frontmatter.slug}>
                                <div>
                                    <Img sizes={node.frontmatter.productImage.childImageSharp.sizes}  />
                                </div>
                                
                                                             
                            <h5>{node.frontmatter.title}</h5>
                            <Link style={{ boxShadow: 'none' }} to={`/produit/${node.frontmatter.slug}`}>découvrir</Link>
                        </div>              
                    )
                })}
                           
                 
              </ProductsWrapper>
              <PageContent>
              <Column>
            
            <ProductItemCat src={gamme} style={{width:`100%`,filter:`brightness(100%)`}}></ProductItemCat>
                
            <Link to="/gamme/masques-boue-argile">
                <Container>
                    <ProductItemCat src={produit2} style={{width:`100%`}}></ProductItemCat>
                    <BottomLeft>MASQUES<br />  A LA BOUE</BottomLeft>
                </Container>                  
            </Link>
            
            </Column>
            <Column>
            <Link to="/gamme/peel-off">
            <Container>
                <ProductItemCat src={produit} style={{width:`100%`}}></ProductItemCat>
                <BottomLeft>MASQUES<br /> PEEL OFF</BottomLeft>
                </Container>     
            </Link>
            <Link to="/gamme/masques-specifiques-spa">
            <Container>
                <ProductItemCat src={produit7} style={{width:`100%`}}></ProductItemCat>
                <BottomLeft>MASQUES<br /> SPECIFIQUES SPA</BottomLeft>
                </Container>     
            </Link>
            </Column>
            <Column>
            <Link to="/gamme/produits-tube">
            <Container>
                <ProductItemCat src={produit3} style={{width:`100%`}}></ProductItemCat>
                <BottomLeft>PRODUITS<br />EN TUBES</BottomLeft>
                </Container>     
            </Link>
            <Link to="/gamme/strips">
            <Container>
                <ProductItemCat src={produit4} style={{width:`100%`}}></ProductItemCat> 
                <BottomLeft>LES<br />PATCHES</BottomLeft>
                </Container>     
            </Link>
            </Column>
            <Column>
            <Link to="/gamme/masques-speciaux">
            <Container>
                <ProductItemCat src={produit5} style={{width:`100%`}}></ProductItemCat>
                <BottomLeft>MASQUES<br /> SPECIAUX</BottomLeft>
                </Container>     
            </Link>
            <Link to="/gamme/masques-tissue">
            <Container>
                <ProductItemCat src={produit6} style={{width:`100%`}}></ProductItemCat>
                <BottomLeft>MASQUES<br /> TISSUE</BottomLeft>
                </Container>     
            </Link>
            </Column>
        </PageContent>
        </Layout>
    
      
        
      )}
    
    } 







    const BigHeader = styled.div`
    width: 100%;
    background-image: url(${masquesSpecifiques});
    height: 600px;
    background-repeat: no-repeat;
    background-size: contain;
    position:relative;
    
    text-align:center;
    padding-top:5rem;
    @media(max-width: 1100px) {
        height: 400px;
    }
    @media(max-width: 800px) {
        height: 250px;
    }
    @media(max-width: 600px) {
        height: 200px;
    }
    @media(max-width: 600px) {
        padding:5rem 0;
    }
    `
    
    
    const TextElle = styled.p`
    font-family:'Montserrat';
    font-weight:600;
    text-transform:uppercase;
    color:white;
    font-size:3.4rem;
    float: none;
    position: absolute;
    z-index:1;
    color:black;
    width:20rem;
    text-align:left;
    top: 45%;
    left: 30%;
    -webkit-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
    @media(max-width: 1000px) {
        font-size:2rem;
        top:20%;
        width:20rem;
    }
    @media(max-width: 600px) {
        font-size:1rem;
        top:24%;
        width:5rem;
    }
    `
    
    const WrapperImages = styled.div`
    max-width:42rem;
    width:100%;
    height:auto;
    margin:3rem auto;
    `
    
    const ImageGirl = styled.img`
    margin:0 auto;
    max-width:500px;
    height:auto;
    @media(max-width: 600px) {
        max-width: 350px;
    }
    `
    const ImagePaint = styled.img`
        max-width:35rem;
        margin:0 auto;
           
    `
    
    const PageContent = styled.div`
    display: -ms-flexbox; /* IE10 */
    display: -webkit-box;
    display: flex;
    -ms-flex-wrap: wrap; /* IE10 */
    flex-wrap: wrap;
    `
    
    const Column = styled.div`
    -ms-flex: 25%; /* IE10 */
    -webkit-box-flex: 25%;
        flex: 25%;
    max-width: 25%;
    @media(max-width: 800px) {
        -ms-flex: 50%;
        -webkit-box-flex: 50%;
                flex: 50%;
        max-width: 50%;
    }
    @media(max-width: 600px) {
        -ms-flex: 100%;
        -webkit-box-flex: 100%;
                flex: 100%;
        max-width: 100%;
    }
    img {
    margin:0;
    padding:0;
    vertical-align: middle;
    }
    `
    
    const ProductItemCat = styled.img`
       
        width: 100%;
        margin-bottom:0;
        width: 100%;
        margin-bottom:0;
        filter: brightness(40%);
        :hover {
            filter: brightness(100%);
          }
    `
    
    const ProductsWrapper = styled.div`
    font-family: Montserrat;
    width:80%;
    margin:2rem auto;
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex;
    height:auto;
    -ms-flex-direction:row;
    flex-direction:row;
    -ms-flex-wrap:wrap;
        flex-wrap:wrap;
    -webkit-box-align:center;
    -ms-flex-align:center;
    align-items:center;
    -webkit-box-pack:justify;
    -ms-flex-pack:justify;
    @media(max-width: 800px) {
        flex-direction:column;
    }
            justify-content:space-between;
            h5 {
                font-size:1rem;
                
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
    


    const Container = styled.div`
    position: relative;
    text-align: center;
    color: white;
  `
  
  const BottomLeft = styled.div`
      font-family:"Montserrat";
      position: absolute;
      bottom: 8px;
      left: 16px;
      text-align:left;
  `