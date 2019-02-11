import React from 'react'
import Layout from '../components/Layout'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { navigate } from 'gatsby'
import Img from 'gatsby-image'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import buttonAvis from '../data/images/product/buttonAvis.png'

import { createGlobalStyle } from 'styled-components'

import * as fontFiles from "../fonts/index";


const GlobalStyle  = createGlobalStyle `
@font-face {
  font-family: 'northwellregular';
  src: url(${fontFiles.NorthwellWOF2}) format("truetype"),
       url(${fontFiles.NorthwellWOF}) format("truetype");
  font-weight: normal;
  font-style: normal;

}


.footerContact { 

  font-family:'northwellregular';
}

`

const customStyles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(255, 255, 255, 0.85)'
    },
    content : {
      width                 : '40rem',
      height                : '27rem',
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };




class ProductPage extends React.Component {
    constructor () {
        super();
        this.state = {
            fromHome: true
        };
        
        }
       
        componentWillUnmount() {
        clearTimeout(this.interval);
        }
  render() {
    const { markdownRemark } = this.props.data
    const featureProducts = get(this, 'props.data.allMarkdownRemark.edges')
    
    return (
      <Layout location={this.props.location} fromHome={this.state.fromHome} >
        <Helmet
              htmlAttributes={{ lang: 'en' }}
              meta={[{ name: 'description', content: "Produit Homme"}]}
              title={markdownRemark.frontmatter.title}
          />
        <ProductHeader >
            <GlobalStyle />
            <Img className="MainImage" style={{width:`100%`}} sizes={markdownRemark.frontmatter.bgImage.childImageSharp.sizes} />
            <ImageProduct>
                <Img sizes={markdownRemark.frontmatter.productImage.childImageSharp.sizes} />
            </ImageProduct>
            
            <InfoWrapper>
                <h2>{markdownRemark.frontmatter.title}</h2>
                <p>{markdownRemark.frontmatter.benefits}</p>
                <h3>INGREDIENTS CLÉS:</h3>
                <IconIngr>
                    <Img sizes={markdownRemark.frontmatter.ingredientsProduct.childImageSharp.sizes} />
                </IconIngr>
            </InfoWrapper>
        </ProductHeader>
        <ProductTutos>
            <ContentWrapper>
                <div dangerouslySetInnerHTML={{
                        __html:markdownRemark.html
                    }} />
                
            <VideoWrapper>
                <h2 className="footerContact">Nos Tutos Beautés</h2>
                <h5>Reveal our top tips</h5>    
                <WrappButton>
                        <VideoButton onClick={ () => navigate('/tutos')} role="link">
                            <Img sizes={markdownRemark.frontmatter.videoImage.childImageSharp.sizes} />
                        </VideoButton>
                </WrappButton>
           </VideoWrapper>
           </ContentWrapper>
        </ProductTutos>
        <AvisClient>
            <h2 className="footerContact">Avis Client</h2>
            <p>Parce que votre avis compte, soyez la première à laisser un commentaire sur ce produit</p>
            <h5>JE DONNE MON AVIS</h5>
            <ButtonAvis></ButtonAvis>
        </AvisClient>
        <AnotherMasks>
            <h1>Vous devriez essayer également</h1>
            <MasksFooterWrapper>
                {featureProducts.map(({ node }) => {
                        
                        return (
                                        
                            <div style={{width:`10rem`,height:`auto`}} key={node.frontmatter.slug}>
                            
                                <Link style={{ boxShadow: 'none' }} to={`/produitHomme/${node.frontmatter.slug}`}  >
                                    <div>
                                        <Img sizes={node.frontmatter.productImage.childImageSharp.sizes} />
                                    </div>
                                    
                                </Link>                                   
                            
                            </div>              
                        )
                    })}
            </MasksFooterWrapper> 
        </AnotherMasks>
      </Layout>
    )
  }
}

export const query = graphql`
query ProductHommeQuery($slug: String!){
  allMarkdownRemark(
    limit:3,
    filter: {fileAbsolutePath: {regex: "\/hommeProduit/"},frontmatter: {new: {eq:true } } }
    
  ) {
      edges {
          node {
            frontmatter {
                slug
                
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
  markdownRemark(frontmatter:{
    slug:{
      eq:$slug
    }
  }) {
    html
    frontmatter {
      title
      benefits
      id
      slug 
      bgImage {
        childImageSharp{
            sizes(maxWidth: 800) {
                ...GatsbyImageSharpSizes
            }
        }
      }
      productImage {
          childImageSharp{
              sizes(maxWidth: 430) {
                  ...GatsbyImageSharpSizes
              }
          }
      }
      videoImage {
        childImageSharp{
            sizes(maxWidth: 150) {
                ...GatsbyImageSharpSizes
            }
        }
    }
    ingredientsProduct {
        childImageSharp{
            sizes(maxWidth: 200) {
                ...GatsbyImageSharpSizes
            }
        }
    }
    }
  }
}

`

export default ProductPage



const ProductHeader = styled.div`
font-family:'Montserrat';
font-weight:500;
width:100%;
position:relative;
z-index:-20;
height:auto;
background-color: #000000;
display:-webkit-box;
display:-ms-flexbox;
display:flex;
-webkit-box-orient:horizontal;
-webkit-box-direction:normal;
-ms-flex-direction:row;
        flex-direction:row;
-ms-flex-pack:distribute;
    justify-content:space-around;

.MainImage {
    @media (max-width: 900px ) {
        height:600px;                  
    }    
}
` 
const ImageProduct = styled.div`
width:16%;
height:auto;
left:17%;
top:15%;
position:absolute;
@media (max-width: 900px ) {
    top:18%;
    left:50%;
    margin-left:-4rem;
    width:8rem;                 
}
`

const InfoWrapper = styled.div`
font-family:'Montserrat';
font-weight:500;
position:absolute;
top:23%;
right:4%;
width:42%;
height:auto;
@media (max-width: 900px ) {
    top:55%;
    left:50%;
    margin-left:-21%;
    text-align:center;                 
}
@media (max-width: 600px ) {
    top:60%;
    left:50%;                 
}
h2  {
    font-size:2.6rem;
    margin-bottom:0.5rem;
    @media (max-width: 1200px ) {
        font-size:2rem;                  
    }
    @media (max-width: 900px ) {
        font-size:1.5rem;                  
    }
    @media (max-width: 600px ) {
        font-size:1rem; 
        margin-top:1rem;                 
    }
}
h3  {
    margin-bottom:0.5rem;
    @media (max-width: 1200px ) {
        font-size:1.1rem;                  
    }
    @media (max-width: 900px ) {
        font-size:1rem;                  
    }
    @media (max-width: 600px ) {
        font-size:0.7rem;                  
    }
}
p 


{
    @media (max-width: 768px ) {
        font-size:1.1rem;                  
    }
}
color:white;
max-width:40rem;
`


const IconIngr = styled.div`
max-width:60%;
margin-bottom:0.5rem;
margin-left:0.5rem;

    @media (max-width: 900px ) {
        margin:0 auto;                  
    }
    @media (max-width: 900px ) {
        max-width:70%;                  
    }

`

const IconWrapper = styled.div`

display:-webkit-box;
display:-ms-flexbox;
display:flex;
-webkit-box-orient:horizontal;
-webkit-box-direction:normal;
-ms-flex-direction:row;
        flex-direction:row;
-webkit-box-pack:start;
-ms-flex-pack:start;
        justify-content:flex-start;
p {
    text-align:center;
    font-size:8px;
    width:6rem;
    margin:0 0.15rem;
    
}

`

const ProductTutos = styled.div`
    background-color:#ffffff;
    width:100%;
    font-family:'Montserrat';
    font-weight:500;
`

const ContentWrapper = styled.div`
max-width:1200px;
margin:2rem auto;
display:-webkit-box;
display:-ms-flexbox;
display:flex;
-webkit-box-orient:horizontal;
-webkit-box-direction:normal;
-ms-flex-direction:row;
        flex-direction:row;
-webkit-box-pack: justify;
-ms-flex-pack: justify;
        justify-content: space-between;
@media (max-width: 1300px) {
    padding:0 2rem;          
 }
@media (max-width: 1024px) {
       
       margin-top:0;
       padding:0 2rem;           
    }
div {
    @media (max-width: 1024px) {
        margin:0rem auto 2rem;
        max-width:600px; 
    @media (max-width: 1000px) {
        text-align:center;           
     }          
    }
     h1 {
        color: #cf3590;
        font-weight:200;
        margin-top:8rem;
    }
    p {
        width:26rem;
        font-size:1.1rem;
        text-align:justify;
        margin-bottom:0.5rem;
        @media (max-width: 768px) {
            
            width:22rem;
            text-align:justify;  
            margin:0!important;          
        }
    }
}
@media (max-width: 1024px) {
    -webkit-box-orient:vertical;
    -webkit-box-direction:normal;
        -ms-flex-direction:column;
            flex-direction:column;           
}
   
`

const WrappButton = styled.div`
text-align:center;
margin:0 auto;
@media (max-width: 768px) {
  max-width:100px;         
}
`
const VideoButton = styled.div`
background-size:100%;
background-repeat:no-repeat;    
outline:none;
background-color:transparent; 
width:18rem;
height:18rem;
border:none;
margin:0 auto;
cursor: pointer;
@media (max-width: 1024px) {
    left: 190px;
    bottom:-110px;
            
}
@media (max-width: 768px) {
    position: realtive;
                        
}
    
`
const CloseButton = styled.button`
    border:none;
    background:none;
    outline:none;
    cursor:pointer;
`

const VideoWrapper = styled.div`
text-align:center;
    
h2 {
  color:#cf3590;
  margin-bottom:0.2rem;
  font-size:2.5rem;
  font-weight:400;  
  color:black;
  @media (max-width: 768px) {
    margin-bottom:1rem;
                     
  }
}
h5 {
    max-width:14rem;
    height:4rem;
    font-weight:400;
    font-size:1.2rem;
    margin:2rem auto;
    color: #000000;
    font-family:'Montserrat';
    font-weight:600;
    line-height:1rem;
    font-size:0.9rem;
    @media (max-width: 768px) {
       display:none;
       margin:0.1rem auto;                 
    }
}     
`

const GridImages = styled.div`
display: -ms-grid;
display: grid;
-ms-grid-columns: (20rem)[2];
    grid-template-columns: repeat(2,20rem);
grid-auto-rows: 200px;
position: relative;
@media (max-width: 1024px) {
    margin:2rem auto;
    max-width:300px;
    grid-auto-rows: 100px;          
}
`



const ImageRose = styled.img`
    max-width:320px;
    height:auto;
    @media (max-width: 768px) {
        display:none;          
    }
    
`

const ImageSalt = styled.img`
    max-width:300px;
    height:auto;
    @media (max-width: 768px) {
        display:none;          
    }
`

const AvisClient = styled.div`
background-color: #232323;
    
display:-webkit-box;

display:-ms-flexbox;

display:flex;
-webkit-box-orient:vertical;
-webkit-box-direction:normal;
-ms-flex-direction:column;
        flex-direction:column;
text-align:center;
color:#ffffff;
h2 {
    font-size:3.3rem;
    
    font-weight:400;
    
}
p {
    width:15rem;
    margin:0 auto;
    font-size:1rem;
    font-family:'Montserrat';
    font-weight:500;
    text-align:justify;
}
h5 {
    font-weight:200;
    font-size:1.4rem;
}
`

const ButtonAvis = styled.button`
    background-image: url(${buttonAvis});
    background-size:100%;
    width:2rem;
    height:2rem;
    outline:none;
    border:none;
    background-color:transparent;
    margin:1rem auto; 
`

const AnotherMasks = styled.div`
background-color:black;
text-align:center;
padding:2rem 0;
h1 {
    color:white;
    margin:0;
    padding:0;
    font-size:1.5rem;
    font-family:'Montserrat';
    font-weight:500;
    text-transform: uppercase;        
}
`

const MasksFooterWrapper = styled.div`
max-width:1024px;
margin:3rem auto 0;
display:-webkit-box;
display:-ms-flexbox;
display:flex;
-webkit-box-orient:horizontal;
-webkit-box-direction:normal;
-ms-flex-direction:row;
        flex-direction:row;
-ms-flex-pack:distribute;
    justify-content:space-around;
@media (max-width: 1024px) {
    -webkit-box-orient:vertical;
    -webkit-box-direction:normal;
        -ms-flex-direction:column;
            flex-direction:column;
            align-items:center;         
    }
img {
    
    @media (max-width: 1024px) {
    width:7rem;
             
  }
}
`