import React from 'react'
import Layout from '../components/Layout'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { StaticQuery, graphql } from 'gatsby'



import awardOne from '../data/images/recompenses/award1.png'
import awardTwo from '../data/images/recompenses/award2.png'
import awardThree from '../data/images/recompenses/award3.png'
import awardFour from '../data/images/recompenses/award4.png'
import awardFive from '../data/images/recompenses/award5.png'


class IndexRecomp extends React.Component {
  
  render() {
      return (
          <WrapperFull>
            <HeaderAward>NOS RECOMPENSES</HeaderAward>
            <WrapperAwards>
                  <AwardImage src={awardOne}></AwardImage>
                  <AwardImage src={awardTwo}></AwardImage>
                  <AwardImage src={awardThree}></AwardImage>
                  <AwardImage src={awardFour}></AwardImage>
                  <AwardImage src={awardFive}></AwardImage>
            </WrapperAwards>
            <Link  to="/recompenses">DÉCOUVRIR</Link> 
          </WrapperFull>
          
          
      )
  }
}



export default IndexRecomp


const WrapperFull = styled.div`
text-align:center;
margin-top:10rem;
a {
    color: black;
    border: 1px solid black;
    padding: 12px 30px;
    text-decoration:none!important;
    cursor: pointer;
    font-size: 14px;
    box-shadow:none;
    margin:0 auto;
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


const WrapperAwards = styled.div`
max-width:50%;
height:auto;
display:-webkit-box;
display:-ms-flexbox;
display:flex;
margin:1rem auto 6rem;
margin-top:3rem;
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
    max-width:80%;
}
`

const AwardImage = styled.img`
width:7rem;
height:7rem;
@media (max-width: 900px) {
    width:5rem;
    height:5rem;
}
`

const HeaderAward = styled.h1`
margin-top:4rem;
font-family:'Archivo Black';  
background: -webkit-linear-gradient(14deg, #8d754c 0%, #d0b991 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
text-align:center;
margin-bottom:0;
border:none;
outline:none;
-webkit-transform: scaleY(0.85);
        transform: scaleY(0.85);
`


 









