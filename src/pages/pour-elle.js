import React from 'react'
import Layout from '../components/Layout'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import { StaticQuery, graphql,Link } from 'gatsby'


import gamme from '../data/images/pourElle/gamme.png'
import produit from '../data/images/pourElle/produit1.png'
import calque from '../data/images/pourElle/calque.png'

import produit2 from '../data/images/pourElle/produit2.png'
import produit3 from '../data/images/pourElle/produit3.png'
import produit4 from '../data/images/pourElle/produit4.png'
import produit5 from '../data/images/pourElle/produit5.png'
import produit6 from '../data/images/pourElle/produit6.png'
import produit7 from '../data/images/pourElle/produit7.jpg'




const PourElle = (location) => (
    <Layout location={location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: "Gamme femme"}]}
          title="7th Heaven - Pour Elle"
          />  
        <BigHeader style={{zIndex:`-100`}}>
            <WrapperImages>
                <TextElle>Pour Elle</TextElle>
                <CalqueImage src={calque} />
            </WrapperImages>            
        </BigHeader>
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
    
)

  



export default PourElle


const BigHeader = styled.div`
width:100%;
background-color: #f4a8a9;
position:relative;
padding:3rem 0;
text-align:center;
padding-top:5rem;
@media(max-width: 600px) {
    padding:5rem 0;
}

`

const CalqueImage = styled.img`
max-width:100%;
height:auto;


`
const TextElle = styled.p`
font-family:'Montserrat';
font-weight:600;
text-transform:uppercase;
color:white;
font-size:4.4rem;
float: none;
position: absolute;
z-index:1;
top: 55%;
left: 50%;
-webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
@media(max-width: 600px) {
    font-size:3rem;
    width:20rem;
}
`

const WrapperImages = styled.div`
max-width:42rem;
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
background-blend-mode: multiply;
        background: rgba(0, 0, 0, 0.5);
}
`

const ProductItem = styled.img`
   
    width: 100%;
    margin-bottom:0;
`

const ProductItemCat = styled.img`
        width: 100%;
        margin-bottom:0;
        filter: brightness(40%);
        :hover {
            filter: brightness(100%);
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