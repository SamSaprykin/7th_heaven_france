import React from 'react'

import styled from 'styled-components'
import { Link } from 'gatsby'


import layers from '../data/images/lestutos/layers.png'
import femmeMasque from '../data/images/homePage/femmeMasque.png'


class LeTutosIndex extends React.Component {
 

    
  render() {
    return (
      
         <LeTutosWrapper>
            
           <LeTutosItemFirst>
           <TitleWrapper>
              <LayerImage src={layers}></LayerImage>
              <TutosText>LES TUTOS</TutosText>
              <Link  to="/tutos">DÉCOUVRIR</Link>
            </TitleWrapper>
                          
              <TutosImage src={femmeMasque}></TutosImage>
           </LeTutosItemFirst>
          </LeTutosWrapper>
      
    )
  }
}



export default LeTutosIndex

const LeTutosWrapper = styled.div`
width:100%;
height:auto;
position:relative;
`
const LeTutosItemFirst = styled.div`
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
-ms-flex-pack:distribute;
    justify-content:space-around;
background-image: -webkit-linear-gradient(42deg, #84e1aa 0%, #77d9e2 100%);
background-image: linear-gradient(48deg, #84e1aa 0%, #77d9e2 100%);
background-size:100%;

`

const TutosImage = styled.img`
margin:0;
max-width: 60%;
height: auto;
min-width:40rem;
@media (max-width: 800px) {
  min-width:40rem;
}
@media (max-width: 600px) {
  min-width:26rem;
}
`
const LayerImage = styled.img`
margin-top:1rem;
max-width: 60%;
height: auto;
margin-bottom:5rem;
@media (max-width: 800px) {
  max-width:50%;
  margin-bottom:1rem;
}
`

const TutosText = styled.p`
  color:white;
  font-size:3.2rem;
  font-family:'Archivo Black';
  position:absolute;
  bottom:8rem;
  width:20rem;
  -webkit-transform: scaleY(0.85);
  -ms-transform: scaleY(0.85);
  transform: scaleY(0.85);
  @media (max-width: 800px) {
    font-size:2rem;
    bottom:4rem; 
  }
  @media (max-width: 500px) {
    font-size:1.4rem;
    width:8rem;
    left:1rem;    
  } 
`
const TitleWrapper = styled.div`
position: relative;
text-align: center;
color: white;
@media (max-width: 800px) {
    margin-right:-18rem;
    margin-bottom:10rem;
}
@media (max-width: 600px) {
    margin-right:-16rem;
    margin-bottom:1rem;
}
a {
color: white;
border: 1px solid white;
padding: 12px 30px;
text-decoration:none!important;
cursor: pointer;
font-size: 14px;
box-shadow:none;
margin-bottom:4rem;
position: absolute;
top: 60%;
left: 50%;
-webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
font-family: 'Lato';
font-weight:400;
letter-spacing:2px;
@media (max-width: 800px) {
  display:inline-block;
  margin-top:2rem;
}
}
a:link {
text-decoration: none;
}

a:visited {
text-decoration: none;
}
`








