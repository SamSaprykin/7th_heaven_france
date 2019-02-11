import React from 'react'
import Layout from '../components/Layout'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'

import veggie from '../data/images/valeurs/veggie.png'
import products from '../data/images/valeurs/products.png'
import noanimal from '../data/images/valeurs/noanimal.png'
import bgmin from '../data/images/valeurs/bgmin.png'

import { createGlobalStyle } from 'styled-components'


import * as fontFiles from "../fonts/index";

const GlobalStyle  = createGlobalStyle `


@font-face {
  font-family: 'trashhandregular';
  src: url(${fontFiles.TrashHandWOFF2}) format('woff2'),
       url(${fontFiles.TrashHandWOFF}) format('woff');
  font-weight: normal;
  font-style: normal;

}

.trashfont {

  font-family:'trashhandregular';
}
`


const NosValeurs = ({location}) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        file(relativePath: {
          regex:"/bgmin/"
        }) {
          childImageSharp{
            sizes(maxWidth: 700) {
                ...GatsbyImageSharpSizes
            }
          } 
        }
      }
    `}
    render={data => (
      <Layout location={location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: "Nos valeurs"}]}
          title="7th Heaven - Valeurs"
          />  
        <ContainerIng style={{zIndex:`-100`}}>
          <ImageContainer>
              <ImageNoval />
          </ImageContainer>
          <VeggieImage src={veggie} />
          <ProductsValeurs src={products} />
          <RabiitValeurs src={noanimal} />
          <NoValuersText><h3>100%</h3> <p>VEGETARIEN</p></NoValuersText>
          <AucunSur><h3>AUCUN</h3><h2>TEST</h2>  <p>SUR ANIMAUX</p></AucunSur>
          <CrueltyFree><h3>CRUELTY</h3><h2>FREE</h2> </CrueltyFree>
          <GlobalStyle />
          <NoValuersTextSmall><h3>100%</h3> <p>VEGETARIEN</p></NoValuersTextSmall>
          <NoValuersTextMiddle><h3>100%</h3> <p>VEGAN</p></NoValuersTextMiddle>
          <NoValuersTextBig>NOS VALEURS</NoValuersTextBig>
          <DescriptionProductOne className="trashfont">Aucun test sur animal n’est réalisé avec nos produits</DescriptionProductOne>
          <DescriptionProductTwo className="trashfont">Aucune molécule animale n’intègre la composition de nos produits</DescriptionProductTwo>
          <DescriptionProductThree className="trashfont">Nous sommes Membre de l’association anglaise contre la vivisection</DescriptionProductThree>
          <DescriptionProductFour className="trashfont">Tous nos produits sont « cruelty free» D’où la présence du petit lapin…</DescriptionProductFour>
        </ContainerIng>  
      </Layout>
    )}
  />
)  


export default NosValeurs


const ContainerIng = styled.div`
  position: relative;
  font-family: "Arial";
`

const ImageContainer = styled.div`
  max-width:2000px;
  overflow:hidden;
`
const ImageNoval = styled.div`
  height: 1558px;
  min-width:1200px;
  background-image: url(${bgmin});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`


const VeggieImage = styled.img`
  position:absolute;
  top:9%;
  right:28%;
  max-width:5rem;
  
  @media (max-width: 1300px) {
    right:40%;           
  }
  @media (max-width: 800px) {
    right:20%;           
  }  
  
`

const ProductsValeurs = styled.img`
  position:absolute;
  bottom:6%;
  left:20%;
  max-width:60%;
  @media (max-width: 1400px) {
    max-width:80%;
    left:50%;
    margin-left:-40%;         
  }
  @media (max-width: 1000px) {
    max-width:90%;
    left:50%;
    margin-left:-45%;         
  }
  @media (max-width: 800px) {
    max-width:90%;
    left:50%;
    margin-left:-45%;         
  }
    
`

const DescriptionProductOne = styled.h5`
position:absolute;
bottom:30%;
left:10%;
color:white;
max-width:20rem;
text-align:center;
text-transform:uppercase;

font-weight:400;
font-size:1.1rem;
@media (max-width: 1400px) {
  max-width:14rem;
  font-size:1rem;     
}

@media (max-width: 1200px) {
  bottom:27%;     
}  
@media (max-width: 900px) {
  font-size:0.8rem;
  max-width:10rem;     
}
@media (max-width: 600px) {
  left:50%;
  margin-left:-5rem;
  max-width:12rem;
  bottom:29%;     
}  
`

const DescriptionProductTwo = styled.h5`
  position:absolute;
  bottom:42%;
  left:26%;
  color:white;
  max-width:20rem;
  text-align:center;
  text-transform:uppercase; 
  font-weight:400;
  font-size:1.1rem;
  @media (max-width: 1400px) {
    max-width:14rem;
    font-size:1rem;     
  }
  @media (max-width: 1200px) {
    bottom:37%;     
  } 
  @media (max-width: 900px) {
    font-size:0.8rem;
    max-width:10rem;      
  }
  @media (max-width: 600px) {
    
    max-width:12rem;
    bottom:24%;
    left:50%;
    margin-left:-6rem;     
  }    
  
`
const DescriptionProductThree = styled.h5`
  position:absolute;
  bottom:42%;
  left:50%;
  color:white;
  max-width:20rem;
  text-align:center;
  text-transform:uppercase;
  font-weight:400;
  font-size:1.1rem;
  @media (max-width: 1400px) {
    max-width:14rem;
    font-size:1rem;     
  }
  @media (max-width: 1200px) {
    bottom:37%;     
  }
  
  @media (max-width: 900px) {
    font-size:0.8rem;
    max-width:10rem;     
  }
  @media (max-width: 600px) {
    
    max-width:12rem;
    bottom:34%;
    left:50%;
    margin-left:-6rem; 
  }     
   
`

const DescriptionProductFour = styled.h5`
  position:absolute;
  bottom:34%;
  left:70%;
  color:white;
  max-width:20rem;
  text-align:center;
  text-transform:uppercase;
  font-weight:400;
  font-size:1.1rem;
  @media (max-width: 1400px) {
    max-width:14rem;
    font-size:1rem;     
  }
  @media (max-width: 1200px) {
    bottom:27%;     
  }
  @media (max-width: 900px) {
    font-size:0.8rem;
    max-width:10rem;      
  }
  @media (max-width: 600px) {
    
    max-width:12rem;
    bottom:20%;
    left:50%;
    margin-left:-6rem;     
  }   
`

const RabiitValeurs = styled.img`
  position:absolute;
  top:6.5%;
  left:6.5%;
  max-width:15%;
`

const NoValuersText = styled.div`
color:white;
position:absolute;
top:4%;
right:8%;
max-width:15rem;
font-size:1.8rem;
h3 {
  font-size:4.5rem;
  margin:0;
}
p {
  font-weight:600;
}
@media (max-width: 800px) {
  right:2%; 
  top:45%;          
}

`


const AucunSur = styled.div`
  color:white;
  position:absolute;
  text-align:justify;
  top:11.5%;
  left:14%;
  max-width:15rem;
  font-size:1.4rem;
  @media (max-width: 1280px) {
    display:none;           
  } 
  h3 {
    font-size:2.7rem;
    margin:0;
    
  }
  h2 {
    font-size:4rem;
    margin:0;
    line-height:4rem;
  }
  p {
    font-weight:600;
  }
`

const NoValuersTextBig  = styled.h1`
    position:absolute;
    top:35%;
    right:18%;
    font-size:3rem;
    color:white;
    max-width:29rem;
    @media (max-width: 1200px) {
        top:32%;           
    }
     
    @media (max-width: 600px) {
      
      font-size:4rem;           
    } 
`

const NoValuersTextMiddle = styled.div`
    color:white;
    position:absolute;
    top:18%;
    right:5%;
    max-width:15rem;
    font-size:1.8rem;
    h3 {
      font-size:2.5rem;
      margin:0;
      lin-height:2rem;
    }
    p {
      font-weight:600;
    }
    @media (max-width: 1280px) {
      display:none;           
    } 
`

const CrueltyFree = styled.div`
  color:white;
  position:absolute;
  text-align:justify;
  top:25%;
  left:35%;
  max-width:15rem;
  font-size:1rem;
  @media (max-width: 1280px) {
          
  } 
  h3 {
    font-size:1.6rem;
    margin:0;
    line-height:1.2rem;
  }
  h2 {
    font-size:2.8rem;
    margin:0;
    line-height:2.6rem;
  }
  
`

const NoValuersTextSmall = styled.div`
  color:white;
  position:absolute;
  top:15%;
  right:36%;
  max-width:15rem;
  font-size:1.2rem;
  h3 {
    font-size:3rem;
    margin:0;
  }
  p {
    font-weight:600;
  }
  @media (max-width: 1000px) {
    right:40%;           
  } 
`

 