import React from 'react'
import Layout from '../components/Layout'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'

import womanRecom from '../data/images/recompenses/womanRecom.png'
import charcoal from '../data/images/recompenses/charcoal.png'
import rectangle from '../data/images/recompenses/Rectangle.png'
import manRecom from '../data/images/recompenses/manRecom.png'
import products from '../data/images/recompenses/products.png'
import bg from '../data/images/recompenses/bg.jpg'
import bubble from '../data/images/recompenses/bubble.png'

import awardOne from '../data/images/recompenses/award1.png'
import awardTwo from '../data/images/recompenses/award2.png'
import awardThree from '../data/images/recompenses/award3.png'
import awardFour from '../data/images/recompenses/award4.png'
import awardFive from '../data/images/recompenses/award5.png'

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


class Recompenses extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <Helmet
            htmlAttributes={{ lang: 'en' }}
            meta={[{ name: 'description', content: "Nos Récompenses"}]}
            title="7th Heaven - Récompenses"
        />  
        <GlobalStyle />
        <TopWrapper>
            <LeftContent>
                <TextRec>RÉCOMPENSE</TextRec>
                <LineBlack src={rectangle} />
                <TwoLine>Premier Produit lancé 
                    au Charbon Actif au UK</TwoLine>
                <CharcoalImage src={charcoal}></CharcoalImage>       
            </LeftContent>
                <MainWrapper>
                    <WomanRecom src={womanRecom}></WomanRecom>
                </MainWrapper>
        </TopWrapper>
        <ManWrapper>
            <BubbleImage src={bubble}></BubbleImage>       
            <MainWrapperMan>
                <ManRecom src={manRecom}></ManRecom>
            </MainWrapperMan>
            <RightContent>
                <TextRec>RÉCOMPENSE</TextRec>
                <LineBlack src={rectangle} />
                <TwoLineRight>Première gamme <br />
                    dédiée aux hommes</TwoLineRight>    
                <ProductsImage src={products}></ProductsImage>       
            </RightContent> 
        </ManWrapper>
        <WrapperLastOne>
            <WeProud className="footerContact">We are proud of</WeProud>
        <WrapperAwards>
            <AwardItem>
                <AwardImage src={awardOne}></AwardImage>
                <h5>CHAROCAL PEEL-OFF</h5>
                <p>Best New Face Mask 2017 Bronze Winner!</p>
            </AwardItem>
            <AwardItem>
                <AwardImage src={awardTwo}></AwardImage>
                <h5>Charcoal Masque </h5>
                <p>Best New Skin Care Product 2016</p>
            </AwardItem>
            <AwardItem>
                <AwardImage src={awardThree}></AwardImage>
                <h5>Mask category winner</h5>
                <p>The Peel Off range</p>
            </AwardItem>
            <AwardItem>
                <AwardImage src={awardFour}></AwardImage>
                <h5>Best Mask winner</h5>
                <p>Brazilian Clay fabric mask</p>
            </AwardItem>
            <AwardItem>
                <AwardImage src={awardFive}></AwardImage>
                <h5>Charcoal Peel-Off</h5>
                <p>Best New Face Mask 2017 Bronze Winner!</p>
            </AwardItem>
        </WrapperAwards>        
        </WrapperLastOne> 
      </Layout>
    )
  }
}


export default Recompenses


const TopWrapper = styled.div`
    
background-image: -webkit-linear-gradient(42deg, #f1c3f8 0%, #f8c9c3 20%, #f8c3d9 100%);
background-image: linear-gradient(48deg, #f1c3f8 0%, #f8c9c3 20%, #f8c3d9 100%);
background-size:100%;
box-sizing:border-box;
width:100%;
height:auto;
display:-webkit-box;
display:-ms-flexbox;
display:flex;
-webkit-box-orient:horizontal;
-webkit-box-direction:normal;
-ms-flex-direction:row;
        flex-direction:row;
-webkit-box-align:end;
-ms-flex-align:end;
        align-items:flex-end;
-ms-flex-pack: distribute;
    justify-content: space-around;
font-family:'Montserrat';
font-weight:800;
@media (max-width: 800px) {
    -webkit-box-align:center;
        -ms-flex-align:center;
            align-items:center;
    -webkit-box-orient:vertical;
    -webkit-box-direction:normal;
        -ms-flex-direction:column;
            flex-direction:column;
}
`

const MainWrapper = styled.div`
float: right;
max-width: 100%;
margin-top:4rem;
overflow: hidden;
margin-right:14rem;
box-sizing:border-box;
@media (max-width: 500px) {
    width: 100%;
}
@media (max-width: 800px) {
    width: 80%;
    margin-right:0;
}
`

const WomanRecom = styled.img`
    max-width:100%;
    margin-top:2rem;
    height:auto;
    margin-bottom:-1rem;
    @media (max-width: 800px) {
        margin-top:0rem;
        
    }      
`
const CharcoalImage = styled.img`
    width:20%;
    height:auto;
    margin-bottom:1rem; 
`
const LineBlack = styled.img`
    width:2rem;
    height:0.2rem;
    @media (max-width: 800px) {
        margin-bottom:0;
    }
`

const TwoLine = styled.p`
    width:12rem;
    line-height:1.5rem;
    @media (max-width: 800px) {
        margin:1rem auto;
        width:16rem;
    }
`

const LeftContent = styled.div`
    
    float: left;
    width: 40%;
    padding: 10px 15px;
    margin-top: 7px;
    margin-left:6rem;
    
    @media (max-width: 500px) {
        width: 100%;
        padding:0;
        margin-top:4rem;
    }
    @media (max-width: 800px) {
        width: 60%;
        text-align:center;
        margin-top:4rem;
        margin-left:0!important;
    }
    @media (max-width: 1000px) {
        margin-left:7rem;
        text-align:center;
    }
`
const ManWrapper = styled.div`
    
background-image: url(${bg});
background-size:100%;
width:100%;
height:auto;
display:-webkit-box;
display:-ms-flexbox;
display:flex;
-webkit-box-orient:horizontal;
-webkit-box-direction:normal;
-ms-flex-direction:row;
        flex-direction:row;
-webkit-box-align:end;
-ms-flex-align:end;
        align-items:flex-end;
-ms-flex-pack: distribute;
    justify-content: space-between;

@media (max-width: 800px) {
    -webkit-box-orient: vertical;
    -moz-box-orient: vertical;
    box-orient: vertical;
    -webkit-box-align:center;
        -ms-flex-align:center;
            align-items:center;
    -webkit-box-orient:vertical;
    -webkit-box-direction:normal;
        -ms-flex-direction:column-reverse;
            flex-direction:column-reverse;
    background-size:220%;
    backgroun-position:center;
    background-repeat:no-repeat;
    
}
`

const ManRecom = styled.img`
    max-width:160%;
    margin-top:2rem;
    height:auto;
    margin-bottom:-0.2rem;
    margin-left:16rem;
    @media (max-width: 800px) {
        margin-top:0rem;
        margin-left:0rem;
        max-width:80%;
    }
    @media (max-width: 1200px) {
        margin-top:0rem;
        margin-left:0rem;
        max-width:100%;
    }      
`

const MainWrapperMan = styled.div`
float: right;
max-width: 160%;
margin-top:1rem;

margin-right:4rem;
box-sizing:border-box;

@media (max-width: 500px) {
    width: 100%;
}
@media (max-width: 800px) {
    width: 80%;
    margin-right:0;
    
    -webkit-box-ordinal-group: 0;
    -moz-box-ordinal-group: 0;
    box-ordinal-group: 0;
}
`

const TwoLineRight = styled.p`

line-height:1.5rem;


`

const RightContent = styled.div`
text-align:right;

width: 30%;
padding: 10px 15px;
margin-top: 7px;
margin-bottom:2rem;
margin-right:10rem;
font-family:'Montserrat';
font-weight:800;
@media (max-width: 500px) {
    width: 100%;
    padding:0;
    margin-right:0;
    text-align:center;
}
@media (max-width: 800px) {
    width: 60%;
    text-align:center;
    margin:0;
    
    
    -webkit-box-ordinal-group: 1;
    -moz-box-ordinal-group: 1;
    box-ordinal-group: 1;
    
}
`
const ProductsImage = styled.img`
    width:50%;
    height:auto;
    margin-bottom:0;
    
`

const WrapperAwards = styled.div`
width:100%;
height:auto;
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
background-color:white;
-ms-flex-pack:distribute;
    justify-content:space-around;
@media (max-width: 800px) {
    -webkit-box-orient:vertical;
    -webkit-box-direction:normal;
        -ms-flex-direction:column;
            flex-direction:column;
}
`

const AwardImage = styled.img`
width:7rem;
height:7rem;
@media (max-width: 800px) {
    width:6rem;
    height:6rem;
}
`

const WrapperLastOne = styled.div`
display:-webkit-box;
display:-ms-flexbox;
display:flex;
-webkit-box-orient:vertical;
-webkit-box-direction:normal;
-ms-flex-direction:column;
        flex-direction:column;
width:100%;
height:auto;
    h3 {
        
        font-size:4rem;
        color: #fe94ba;
        text-align:center;
    }
`

const AwardItem = styled.div`
text-align:center;
font-family: "Helvetica Neue"!important;
font-size:0.8rem;
margin-bottom:2rem;
font-weight:400;    
h5 {
    font-family: "Helvetica Neue"!important;
    font-weight:400;
    text-transform:uppercase;
    margin:0;
    margin-top:0.2rem;
    @media (max-width: 800px) {
        font-size:1rem;
        margin-bottom:0.2rem;
    }
}
p {
    font-family: "Helvetica Neue";
    @media (max-width: 800px) {
        display:none;
    }
}
`

const TextRec = styled.p`
    font-size:2.6rem;
    font-weight:500;
    font-family:'Montserrat';
    font-weight:800;
    margin:0.2rem 0;
    @media (max-width: 1200px) {
        font-size:1.4rem;
        margin-bottom:0;
        margin-top:6rem;
    }
    @media (max-width: 800px) {
        font-size:1.4rem;
        margin-bottom:0;
        margin-top:2rem;
    }
`

const WeProud = styled.h3`
    color:inherit;
    font-weight:400;
    
    @media (max-width: 800px) {
        font-size:1.8rem!important;
    }
`

const BubbleImage = styled.img`
    max-width:12%;
    position:absolute;
    top:40rem;
    left: 0;
    @media (max-width: 800px) {
        top:46rem;
        max-width:18%;
    }
    @media (max-width: 600px) {
        max-width:24%;
        top:36rem;
    }
`

