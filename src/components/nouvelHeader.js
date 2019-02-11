import React from 'react'
import Layout from '../components/Layout'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'


import marquRouge from '../data/images/nouveautes/marque-rouge.png'

const NouvelHeader = () => (
    <StaticQuery
      query={graphql`
        query ImageNouvel {
          file(relativePath: {
            regex:"/femmeTop/"
          }) {
            childImageSharp{
              sizes(maxWidth:600) {
                  ...GatsbyImageSharpSizes
              }
            } 
          }
        }
      `}
      render={data => (
      <div>
        <BigHeader style={{zIndex:`-100`}}>
            <WrapperImages>
                <TextElle>LES NOUVEAUTÉS À VENIR PROCHAINEMENT</TextElle>
                <img src={marquRouge} />
                
            </WrapperImages>
            <WomWrap>
                <Img sizes={data.file.childImageSharp.sizes} /> 
            </WomWrap>            
        </BigHeader>
        
      </div>           
      )}
    />
  )  



export default NouvelHeader

const BigHeader = styled.div`
width:100%;
background-color: #f4a8a9;
position:relative;
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
-webkit-box-pack:justify;
-ms-flex-pack:justify;
        justify-content:space-between;

& p,h2 {
    font-family:'Montserrat';
}
`


const TextElle = styled.p`
color:white;
font-size:2.5rem;
max-width:24rem;
text-align:left;
float: none;
position: absolute;
z-index:1;
top: 55%;
left: 30%;
font-family:'Montserrat';
-webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
@media(max-width: 800px) {
    font-size:1.2rem;
    width:15rem;
    margin-left:-7.5rem;
    left: 50%;
}
@media(max-width: 600px) {
    font-size:1rem;
    width:10rem;
    margin-left:-5rem;
}
`

const WrapperImages = styled.div`
max-width:30%;
   img {
       max-width:600px;
       @media(max-width: 1200px) {
        max-width:360px;
    }
    @media(max-width: 800px) {
        max-width:240px;
   }
   @media(max-width: 600px) {
    max-width:180px;
}
}
`

const WomWrap = styled.div`
max-width:50rem;
width:50rem;
height:auto;
img {
    margin-top:0;
    width:100%;
    height:auto;
    
}
`

