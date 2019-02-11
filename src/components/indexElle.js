import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'
import Parallax from 'react-rellax'


import Six from '../data/images/parallax/28.png'
import Eight from '../data/images/parallax/30.png'
import Ten from '../data/images/parallax/34.png'
import Eleven from '../data/images/parallax/36.png'


class IndexElle extends React.Component {
  
  render() {
      return (
          
        <StaticQuery
        query={graphql`
          query ImageElleIndex {
            file(relativePath: {
              regex:"/calque/"
            }) {
              childImageSharp{
                sizes(maxWidth:650) {
                    ...GatsbyImageSharpSizes
                }
              } 
            }
          }
        `}
        render={data => (
          
              <BigHeader>
                  <WrapperImages>
                      <TextElle>Pour Elle</TextElle>
                      <Img  sizes={data.file.childImageSharp.sizes} />
                     
                        <Link  to="/pour-elle">DÉCOUVRIR</Link>
                     
                  </WrapperImages>
                  <ParalSix>
                    <Parallax speed={4}>  <img src={Six} /> </Parallax>
                  </ParalSix> 

                  <ParalEight>
                    <Parallax speed={1}>  <img src={Eight} /> </Parallax>
                  </ParalEight> 

                  <ParalTen>
                    <Parallax speed={-1}>  <img src={Ten} /> </Parallax>
                  </ParalTen> 
                  <ParalEleven>
                      <Parallax speed={3}>  <img src={Eleven} /> </Parallax>
                  </ParalEleven>
                           
              </BigHeader>
             
        )}
      />
          
      )
  }
}



export default IndexElle




 
const BigHeader = styled.div`
  padding-top:2rem;
  width:100%;
  background-color: #f4a8a9;
  position:relative;

  @media(max-width: 600px) {
      padding:5rem 0;
  }
`


const TextElle = styled.p`
  color:white;
  width:26rem;
  font-family:'Archivo Black';
  font-size:4rem;
  float: none;
  position: absolute;
  z-index:1;
  top: 55%;
  left: 50%;
  margin-bottom:0;
  text-transform:uppercase;
  -webkit-transform: translate(-50%, -50%) scaleY(0.85);
  -ms-transform: translate(-50%, -50%) scaleY(0.85);
          transform: translate(-50%, -50%) scaleY(0.85);
  @media(max-width: 600px) {
      font-size:3rem;
      width:20rem;
  }
`

const WrapperImages = styled.div`
max-width:42rem;
margin:0 auto;
height:40rem;
text-align:center;
a {
  color: white;
  border: 1px solid white;
  padding: 12px 30px;
  text-decoration:none!important;
  cursor: pointer;
  font-size: 14px;
  -webkit-box-shadow:none;
          box-shadow:none;
  font-family: 'Lato';
  font-weight:400;
  letter-spacing:2px;
  margin-top:2rem;
  
}
a:link {
  text-decoration: none;
}

a:visited {
  text-decoration: none;
}
`


  



const ParalTen = styled.div`
  position: absolute;
  top: -41%;
  left: -1%;
  max-width: 200px;

  z-index: 0;
  img  {
    max-width:200px;
    height:auto;
    @media (max-width: 1200px) {
      max-width: 160px; 
    }
    @media (max-width: 1000px) {
      max-width: 140px;  
    }
    @media (max-width: 800px) {
      max-width: 80px;
        
    }
    @media (max-width: 600px) {
      max-width: 60px;
        
    } 
  }
`

const ParalSix = styled.div`
z-index: 30;
position: absolute;
top: 221%;
left: 6%;
max-width: 200px;

img  {
  max-width:200px;
  height:auto;
  @media (max-width: 1200px) {
    max-width: 130px; 
  }
  @media (max-width: 1000px) {
    max-width: 100px;  
  }
  @media (max-width: 800px) {
    max-width: 70px;
      
  }
  @media (max-width: 600px) {
    max-width: 60px;
      
  } 
}
`

const ParalEight = styled.div`
  position: absolute;
  top:101%;
  left: 2%;
  transform: translate3d(0px, 25px, 0px);
  z-index: 0;
  max-width: 50%;
  img  {
    max-width:250px;
    height:auto;
    @media (max-width: 1200px) {
      max-width: 130px; 
    }
    @media (max-width: 1000px) {
      max-width: 100px;  
    }
    @media (max-width: 800px) {
      display:none;
        
    }
    
  }
`


const ParalEleven = styled.div`
position: absolute;
top: 90%;
right: 0%;

height:auto;
-webkit-transform: translate3d(0px, -80px, 0px);
        transform: translate3d(0px, -80px, 0px);
z-index:15;

img  {
  max-width:450px;
  height:auto;
  @media (max-width: 1200px) {
    max-width: 300px; 
  }
  @media (max-width: 1000px) {
    max-width: 250px;  
  }
  @media (max-width: 800px) {
    max-width: 150px;
      
  }
  
}
`






