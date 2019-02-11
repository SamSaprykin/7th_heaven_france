import React from 'react'

import styled from 'styled-components'
import { Link } from 'gatsby'
import Parallax from 'react-rellax'

import peelConconbre from '../data/images/homePage/peelConconbre.png'
import citron from '../data/images/homePage/citron.png'
import fleur from '../data/images/homePage/fleur.png'
import conconbre from '../data/images/homePage/conconbre.png'
import plusNouv from '../data/images/homePage/plusNouv.png'
import arrow from '../data/images/homePage/arrow.png'
import cloudNouv from '../data/images/homePage/cloudNouv.png'

import Fiveteen from '../data/images/parallax/54.png'
import Fourteen from '../data/images/parallax/45.png'

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
  font-family:'trashhandregular' !important;
}
`


class IndexNovautes extends React.Component { 
  render() {
      return (
        <Container>
            <ContentWrapper>
                <h2>NOUVEAUTés</h2>
                <ParalFiveteen>
                  <Parallax speed={-2} >  <img  src={Fiveteen} /> </Parallax>
                </ParalFiveteen>
                <ParalFourteen>
                  <Parallax speed={4} percentage={-1}>  <img src={Fourteen} />  </Parallax>
                </ParalFourteen>
               
                <WrapperMask>
                    <WrapperProductMask>
                        <WrapperInfo>
                            <h4> PEEL OFF AU CONCOMBRE<Arrow></Arrow></h4>
                           <GlobalStyle />
                            <CloudLine><h4 className="trashfont">élimine la saleté les impuretés !</h4></CloudLine>
                        </WrapperInfo>
                        <PeelConc src={peelConconbre} />
                    </WrapperProductMask>
                    <WrapperIngredients>
                        <Ingredient>
                            <IngrImage  src={citron} />
                            <h5 className="trashfont">lime pressée</h5>
                        </Ingredient>
                            <PlusNouvat src={plusNouv} />
                            
                        <Ingredient>
                            <IngrImage style={{maxWidth:`118px`}}  src={fleur} />
                            <h5 className="trashfont">JASMIN pressé</h5>
                        </Ingredient>
                            <PlusNouvat src={plusNouv} />
                        <Ingredient>
                            <IngrImage src={conconbre} />
                            <h5 className="trashfont">CONCOMBRE écrasé</h5>
                        </Ingredient>
                    </WrapperIngredients>
                </WrapperMask>
                <TitleWrapper>
                    <Link  to="/nouveautes">DÉCOUVRIR</Link>
                </TitleWrapper>
            </ContentWrapper>
             
        </Container>
      )
  }
}



export default IndexNovautes



const TitleWrapper = styled.div`
  max-width:16rem;
  height:auto;
  margin:0 auto;
  margin-top:4rem;
  padding-bottom:2rem;
  a {
    color: white;
    border: 1px solid white;
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

const Container = styled.div`
max-width:100%;
text-align: center;
color: white;
background-color:#62E9EF;
`

const ContentWrapper = styled.div`
max-width:80%;
margin:0 auto;
position:relative;
h2 {
    font-family:"Montserrat";
    text-transform:uppercase;
    -webkit-transform: scaleY(0.85);
            transform: scaleY(0.85);
    
    font-size:3rem;
    color:white;
    padding-top:3rem;
    margin:0!important;
}
`

const WrapperMask = styled.div`
max-width:100%;
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
-ms-flex-pack:distribute;
    justify-content:space-around;
margin-top:2rem;
-ms-flex-wrap:wrap;
    flex-wrap:wrap;
@media(max-width: 800px) {
  -webkit-box-align:center;
      -ms-flex-align:center;
          align-items:center;
}
`

const PeelConc = styled.img`
max-width:20rem;
@media(max-width: 800px) {
  max-width:16rem;
}
@media(max-width: 600px) {
  max-width:9rem;
}
`

const WrapperProductMask = styled.div`
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
max-width:40rem;
-ms-flex-wrap:wrap;
    flex-wrap:wrap;
`

const WrapperInfo = styled.div`
max-width:15rem;
h4 {
    font-size:1.4rem;
    margin:0;
    font-family:"Montserrat";
    @media(max-width: 800px) {
      font-size:0.9rem;
    }
}
@media(max-width: 800px) {
  max-width:12rem;
}
@media(max-width: 600px) {
  max-width:9rem;
}
`

const CloudLine = styled.div`
background-image:url(${cloudNouv});
background-size:100%;
background-repeat:no-repeat;
max-width:19rem;
height:8rem;
padding:2rem 0;
@media(max-width: 800px) {
  text-align:right;
} 
h4 {
  
  font-weight:300;
  width:14rem;
  text-transform:uppercase;
  @media(max-width: 800px) {
    max-width:9rem;
  }
}
@media(max-width: 800px) {
  max-width:12rem;
}
@media(max-width: 800px) {
  padding:1rem 0;
}
  
`

const Arrow = styled.div`
width:3rem;
background-image:url(${arrow});
background-size:100%;
height:2rem;
margin-left:16rem;
@media(max-width: 800px) {
    margin-left:12rem;
}
@media(max-width: 600px) {
    margin-left:8rem;
}
    
`


const WrapperIngredients = styled.div`
margin-top:3.5rem;
width:36rem;
display:-webkit-box;
display:-ms-flexbox;
display:flex;
-webkit-box-orient:horizontal;
-webkit-box-direction:normal;
-ms-flex-direction:row;
        flex-direction:row;
-webkit-box-align:center;
-ms-flex-align:center;
        align-items:center;
-ms-flex-pack:distribute;
    justify-content:space-around;
  
`

const Ingredient = styled.div`
display:-webkit-box;
display:-ms-flexbox;
display:flex;
-webkit-box-orient:vertical;
-webkit-box-direction:normal;
-ms-flex-direction:column;
        flex-direction:column;
-webkit-box-pack:center;
-ms-flex-pack:center;
        justify-content:center;
-webkit-box-align:center;
-ms-flex-align:center;
        align-items:center;

font-weight:300;
font-size:1.1rem;
h5 {
    text-transform:uppercase;
    margin-top:1rem;
    letter-spacing:0.2rem;
}
  
`

const PlusNouvat = styled.img`
max-width:4.1rem;
@media(max-width: 600px) {
  width:2.1rem;
}
`

const IngrImage = styled.img`
  max-width:8.6rem;
  @media(max-width: 600px) {
    width:6rem;
  }
`



const ParalFiveteen = styled.div`
position:absolute;
z-index:10;
left:-18%;
top:-182%;
img  {
  max-width:430px;
  height:auto;
  @media (max-width: 1200px) {
    max-width: 300px;
    top:300%;  
  }
  @media (max-width: 1000px) {
    max-width: 250px;  
  }
  @media (max-width: 800px) {
    max-width: 150px;
      
  }
  
}
`




const ParalFourteen = styled.div`
position:absolute;
z-index:10;
left:-22%;
top:70%;
img  {
  max-width:430px;
  height:auto;
  @media (max-width: 1200px) {
    display:none;
  }  
}
`




















