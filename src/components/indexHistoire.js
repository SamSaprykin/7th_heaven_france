import React from 'react'
import Layout from '../components/Layout'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'
import Parallax from 'react-rellax'

import TextComponent from "../animations/animateComponent";

import histoirePolaOne from '../data/images/homePage/histoirePolaOne.png'
import histoirePolaTwo from '../data/images/homePage/histoirePolaTwo.png'
import histoirePoudre from '../data/images/homePage/histoirePoudre.png'

class IndexHistoire extends React.Component {
  
  render() {
    return (
    <StaticQuery
      query={graphql`
        query HistoireMap {
          file(relativePath: {
            regex:"/hisoireMapIndex/"
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
              <HeaderNotreHitoire>NOTRE HISTOIRE</HeaderNotreHitoire>
              <Link  to="/histoire">DÉCOUVRIR</Link>
            </TitleWrapper>
            <Img sizes={data.file.childImageSharp.sizes} style={{maxWidth:`100%`,marin:`0 auto`}} />
            <TextComponent>
            </TextComponent>
            
            <HistoirePoudre src={histoirePoudre} />
            
        </Container>
                       
      )}
      />    
      )
    }
  }


export default IndexHistoire



const HeaderNotreHitoire = styled.h1`
    color:black;
    font-size:4rem;
    margin:0;
    margin-bottom:1rem;
    width:28rem;
    -webkit-transform: scaleY(0.85);
        -ms-transform: scaleY(0.85);
            transform: scaleY(0.85);
    font-family:'Archivo Black';
`


const PolaOne = styled.img`
  max-width:40%;
  min-width:15rem;
  height:auto;
  position:absolute;
  top: 10%;
  right: 16%; 
  z-index:3;
`


const PolaTwo = styled.img`
  max-width:40%;
  min-width:15rem;
  height:auto;
  top: 2%;
  position:absolute;
  right: 3%;
  z-index:4;
`


const HistoirePoudre = styled.img`
  max-width:50%;
  height:auto;
  bottom: 35%;
  position:absolute;
  right: 16px;
`


const Container = styled.div`
max-width:70%;
position: relative;
text-align: center;
color: white;
margin:1rem auto 5rem;
@media (min-width: 1400px) {
  margin-top:9rem; 
}
@media (min-width: 1800px) {
  margin-top:13rem; 
}
@media (min-width: 2400px) {
  margin-top:14rem;
}
@media (min-width: 3000px) {
  margin-top:18rem;
}
@media (max-width: 800px) {
  padding-bottom:8rem;
}
a {
  color: black;
  border: 1px solid black;
  padding: 12px 30px;
  text-decoration:none!important;
  cursor: pointer;
  font-size: 14px;
  -webkit-box-shadow:none;
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

const TitleWrapper = styled.div`
max-width:40rem;
height:auto;
bottom:20%;
position:absolute;
left:10%;
z-index:4;
@media (max-width: 1400px) {
  top:60%;
  left:-2%;
}
@media (max-width: 1200px) {
  max-width:26rem;
  top:70%;
}
@media (max-width: 600px) {
  max-width:12rem;
  top:110%;
  left:50%;
  margin-left:-6rem;
}
  
h1 {
  max-width:24rem;
  @media (max-width: 1000px) {
    max-width:15rem;
    font-size:2.6rem;
  }
  @media (max-width: 800px) {
    max-width:10rem;
    font-size:1.6rem;
  }
  
  
}
`


 









