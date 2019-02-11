import React from 'react'
import Layout from '../components/Layout'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'
import Parallax from 'react-rellax'

import newspolaOne from '../data/images/homePage/newspola1.png'
import newspolaTwo from '../data/images/homePage/newspola2.png'
import newspolaThree from '../data/images/homePage/newspola3.png'

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


@font-face {
  font-family: 'trashhandregular';
  src: url(${fontFiles.TrashHandWOFF2}) format('woff2'),
       url(${fontFiles.TrashHandWOFF}) format('woff');
  font-weight: normal;
  font-style: normal;

}

.footerContact { 

  font-family:'northwellregular';
}
.trashfont {

  font-family:'trashhandregular';
}
`

const IndexNews = () => (
    <StaticQuery
      query={graphql`
        query IndexBgNews {
          file(relativePath: {
            regex:"/newsbgindex/"
          }) {
            childImageSharp{
              sizes(maxWidth:800) {
                  ...GatsbyImageSharpSizes
              }
            } 
          }
        }
      `}
      render={data => (
    
        <Container>
            <TitleWrapper>
              <HeaderNotreHitoire>#NEWS</HeaderNotreHitoire>
              <TextOn className="footerContact">News</TextOn>
              <Link to="/news">DÉCOUVRIR</Link>
            </TitleWrapper>
            <Img sizes={data.file.childImageSharp.sizes} style={{maxWidth:`50%`,margin:`0 auto`,zIndex:`-10`}} />
            <NewsTwo> 
                <Parallax speed={-2}  >  <img src={newspolaOne} style={{maxWidth:`400px`}} /> </Parallax>
            </NewsTwo>
            <WrapperOne>
              <Parallax speed={5} >  <img src={newspolaThree} style={{maxWidth:`370px`}} /></Parallax>
            </WrapperOne>
            <NewsOne src={newspolaTwo} />
            
        </Container>
                       
      )}
    />
  )  



export default IndexNews



const HeaderNotreHitoire = styled.h1`
  color:black;
  font-size:3rem;
  margin:0;
  margin-bottom:1rem;
  width:28rem;
  
  -webkit-transform: scaleY(0.85);
          transform: scaleY(0.85);
  font-family:'Archivo Black';
`


const TextOn = styled.div`
  color: #ff9999;
  font-size:9rem;
  position:absolute;
  top:-4.5rem;
  right:3rem;
  z-index:1;
  @media (max-width: 1000px) {
    max-width:20rem;
    font-size:5rem;
    font-weight:600;
    top:-2rem;
  }
  @media (max-width: 800px) {
    max-width:10rem;
    font-size:4rem;
    top:-1.5rem;
    right:1.4rem;
  }
`



const Container = styled.div`
max-width:80%;
height:40rem;
position: relative;
text-align: center;
color: white;
margin:5rem auto 5rem;
@media (max-width: 800px) {
  padding-bottom:8rem;
  margin-bottom:4rem;
}

`

const TitleWrapper = styled.div`
max-width:20rem;
height:auto;
bottom:40%;
position:absolute;
left:1%;
z-index:30;
@media (max-width: 1200px) {
  top:60%;
}
@media (max-width: 1000px) {
  max-width:16rem;
  top:70%;
}
@media (max-width: 600px) {
  max-width:12rem;
  top:90%;
  left:50%;
  margin-left:-6rem;
}

h1 {
  max-width:20rem;
  margin-bottom:1.5rem;
  @media (max-width: 1000px) {
    max-width:15rem;
    font-size:3rem;
  }
  @media (max-width: 800px) {
    max-width:10rem;
    font-size:2rem;
  }
  
  
}

a {
  color: black;
  position:relative;
  z-index:10;
  border: 1px solid black;
  padding: 12px 30px;
  text-decoration:none!important;
  cursor: pointer;
  font-size: 14px;
  box-shadow:none;
  font-family: 'Lato';
  font-weight:400;
  letter-spacing:2px;
}
a:link {
  text-decoration: none;
}

a:visited {
  text-decoration: none;
}
  
`

const NewsTwo = styled.div`
  max-width:25%;
      
  height:auto;
  position:absolute;
  top: -70%;
  right: 26%; 
  @media (max-width: 800px) {
    right:46%;
    
  }
  @media (max-width: 600px) {
    right:100%;
    top: -41%;
  }
  z-index:-1;

`

const NewsOne = styled.img`
  max-width:30%;
  min-width:15rem;
  height:auto;
  top: 2%;
  position:absolute;
  right: 1%;
  z-index:-2;
`

const WrapperOne = styled.div`
max-width:40%;
min-width:15rem;
height:auto;

position:absolute;
right: 36%;
z-index:-4;
bottom: -185%;
`





 









