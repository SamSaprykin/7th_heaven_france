import React from 'react'
import Parallax from 'react-rellax'
import styled,{ keyframes } from 'styled-components'
import { Link } from 'gatsby'

import { StaticQuery, graphql } from 'gatsby'


import { shakeVertical } from '../animations/shake'
import { cloudInRight } from '../animations/clouds'
import { cloudInLeft } from '../animations/cloudsInleft'

import island from '../data/images/homePage/island.png'
import veggie from '../data/images/valeurs/veggie.png'
import landscapeHill from '../data/images/homePage/landscapeHill.png'
import noanimal from '../data/images/valeurs/noanimal.png'
import miniIle from '../data/images/homePage/miniIle.png'
import bigIle from '../data/images/homePage/bigIle.png'
import lapin from '../data/images/homePage/lapin.png'


import Zero from '../data/images/parallax/6.png'
import One from '../data/images/parallax/5-1.png'
import Two from '../data/images/parallax/2.png'
import Three from '../data/images/parallax/3.png'
import Four from '../data/images/parallax/4.png'
import Five from '../data/images/parallax/1.png'

import Seven from '../data/images/parallax/29.png'
import Nine from '../data/images/parallax/31.png'


import Oisea from '../data/images/parallax/oiseau.png'
import mediumIle from '../data/images/parallax/mediumIle.png'

const IndexHeader = () => (
    <StaticQuery
      query={graphql`
        query LandscapeQuery {
          file(relativePath: {
            regex:"/landscapeHill/"
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
            <WrapperHeader>
                <WrapperImage>
                    <ImageContainer>
                        <ImageNoval style={{zIndex:`-1`}} />
                    </ImageContainer>
                   
                </WrapperImage>
                <VeggieImage src={veggie} />
                <RabiitValeurs src={noanimal} />
                <LapinImage src={lapin} />
                <BigIlle src={bigIle} />
                <MiniIlle src={miniIle} />
                <NoValuersText><h3>100%</h3> <p>VEGETARIEN</p></NoValuersText>
                <AucunSur><h3>AUCUN</h3><h2>TEST</h2>  <p>SUR ANIMAUX</p></AucunSur>
                <CrueltyFree><h3>CRUELTY</h3><h2>FREE</h2> </CrueltyFree>
                
                <NoValuersTextSmall><h3>100%</h3> <p>VEGETARIEN</p></NoValuersTextSmall>
                <NoValuersTextMiddle><h3>100%</h3> <p>VEGAN</p></NoValuersTextMiddle>
                <NoValuersButtonWrapper>
                  <NoValuersTextBig>NOS VALEURS</NoValuersTextBig>
                    <Link  to="/valeurs">DÉCOUVRIR</Link>
                </NoValuersButtonWrapper>
                
                
                <MaskBoueWrapper>
                    <MaskBoue>MASQUE A LA BOUE <span>ET L'HUILE D'ARGAN</span></MaskBoue>
                    <Link  to="/nouveautes">DÉCOUVRIR</Link>
                </MaskBoueWrapper>
                
                    <IslandPhoto src={island} />  
               
              

               
                <ParalOisea>
                  <Parallax speed={-1}>  <img  src={Oisea} /> </Parallax>
                </ParalOisea>
                <ParalIle>
                  <Parallax speed={2}>  <img  src={mediumIle} /> </Parallax>
                </ParalIle>  
                
               <ParalZero>
                  <Parallax speed={2}>  <img  src={Zero} /> </Parallax>
                </ParalZero> 
               <ParalFirst>
                  <Parallax speed={-1}>  <img  src={One} /> </Parallax>
                </ParalFirst> 
                <ParalSec>
                  <Parallax speed={-2}>  <img  src={Two} /> </Parallax>
                </ParalSec> 
                <ParalThree>
                  <Parallax speed={-3}>  <img  src={Three} /> </Parallax>
                </ParalThree> 
                <ParalFour>
                  <Parallax speed={5}>  <img  src={Four} /> </Parallax>
                </ParalFour> 
                <ParalFive>
                  <Parallax speed={-1}>  <img  src={Five} /> </Parallax>
                </ParalFive> 
               
                  <CloudFirst src={Seven}>
               
                  </CloudFirst> 
                  
                 
                <CloudSecond src={Nine}>
                  
                </CloudSecond> 
                
                
                
            </WrapperHeader>            
      )}
    />
  )   




export default IndexHeader


const ImageContainer = styled.div`
  max-width:100%;
  overflow:hidden;
`
const ImageNoval = styled.div`
height: 1558px;
min-width:1200px;
background-image: url(${landscapeHill});
background-position: center;
background-size: cover;
background-repeat: no-repeat;
`


const WrapperHeader = styled.div`
    width:100%;
    margin-bottom:3rem;
    
    a {
        color: black;
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

const WrapperImage = styled.div`
width:100%;
text-align:left;
img {
    position:relative;
} 
a {
  color: white;
  border: 1px solid white;
  padding: 12px 30px;
  text-decoration:none!important;
  cursor: pointer;
  font-size: 14px;
  box-shadow:none;
  

}
a:link {
  text-decoration: none;
}

a:visited {
  text-decoration: none;
}
    
`

const IslandPhoto = styled.img`
  -webkit-animation: ${shakeVertical} 15s cubic-bezier(0.455, 0.030, 0.515, 0.955) infinite both;
  animation: ${shakeVertical} 15s cubic-bezier(0.455, 0.030, 0.515, 0.955) infinite both;
  position:absolute;
  top:10vw;
  left:50%;
  max-width:24vw;
  margin-left:-12vw;
  @media (max-width: 1200px) {
    top:25vw;
    
  }
  @media (max-width: 800px) {
      top:24vw;
      min-width:16rem;
      margin-left:-8rem;
  }

`

const MiniIlle = styled.img`
  position:absolute;
  right: 34%;
  top: 80%;
  max-width:28vw;
  margin-left:-14vw;
  
    @media (max-width: 1200px) {
      max-width:26vw;
      
    }
    @media (max-width: 1000px) {
      max-width:22vw;  
    }
    @media (max-width: 800px) {
      max-width:16vw; 
      right: 40%; 
    }
    @media (max-width: 600px) {
      max-width:14vw;
      right: 38%;   
    } 
  

`




const CloudFirst = styled.img`
    left: 22%;
    top: 55%;
    position:absolute;
    -webkit-animation: ${cloudInRight} 20s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation: ${cloudInRight} 20s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    overflow: hidden ;
    @media (max-width: 1400px) {
      top: 32%;
      max-width:36vw; 
      right: 50%;
      margin-right:-8vw; 
      -webkit-animation:none; 
              animation:none;
    }
`



const CloudSecond = styled.img`
    left: 40%;
    top: 38%;
    position:absolute;
    -webkit-animation: ${cloudInLeft} 20s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    animation: ${cloudInLeft} 20s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    overflow: hidden ;
    @media (max-width: 1400px) {
      max-width:36vw; 
      right: 50%;
      margin-right:-8vw; 
      -webkit-animation:none; 
              animation:none;
    }
`









const MaskBoue = styled.h1`
    max-width:26vw;
    text-align:left;
    font-size:2rem;
    
    font-family:'Archivo Black';
    span {
        color: #FF9000;
        text-align:left;
        @media (max-width: 800px) {
        font-family:'Archivo Black';   
        text-align:center;
        }
    }
    @media (max-width: 800px) {
        font-size:1.3rem;    
        text-align:center;
        margin-bottom:2rem;
    }
    @media (max-width: 600px) {
        font-size:1.3rem;
        min-width:160px;
        
    }
`

const MaskBoueWrapper = styled.div`
    left:9vw;
    position:absolute;
    top:14vw;
    text-align:left;
    z-index:10;
    a {
      font-family: 'Lato';
      font-weight:300;
      margin-top:4rem;
    }
    @media (max-width: 800px) {
        top:29rem;
        left:50%;
        margin-left:-13vw;
        text-align:center;
                 
    }
    
  @media (max-width: 600px) {
    top:26rem;
    left:50%;
    margin-left:-80px;
    text-align:center;
             
}     
`


const VeggieImage = styled.img`
  position:absolute;
  top:42rem;
  right:28%;
  max-width:5rem;
  
  @media (max-width: 1300px) {
   
    right:40%;           
  }
  @media (max-width: 800px) {
    
    right:50%;           
  }
  @media (max-width: 600px) {
    top:40rem;
    right:50%;           
  }  
  
`




const NoValuersText = styled.div`
  color:white;
  position:absolute;
  top:41rem;
  right:12%;
  max-width:15rem;
  font-size:1.8rem;
  z-index:100;
  font-family:'Archivo Black';
  line-height:1.4rem;
  h3 {
    font-size:4.5rem;
    margin:0;
  }
  p {
    font-family:'Archivo Black';
  }
  @media (max-width: 800px) {
    right:2%;           
  }
  @media (max-width: 800px) {
    top:39rem;
              
  }  
  
`


const AucunSur = styled.div`
  color:white;
  position:absolute;
  text-align:justify;
  top:48rem;
  left:14%;
  max-width:15rem;
  font-size:1.4rem;
  font-family:'Archivo Black';
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
    line-height:3rem;
    
  }
  p {
    font-family:'Archivo Black';
    line-height:1rem;
  }
`


const NoValuersButtonWrapper = styled.div`
      position:absolute;
      top:69rem;
      right:8%;
      max-width:16rem;
      a {
        margin-left:2rem;
        color: white;
        border: 1px solid white;
        padding: 12px 30px;
        text-decoration:none!important;
        cursor: pointer;
        font-size: 14px;
        box-shadow:none;
        font-family: Lato;
    }
    a:link {
        text-decoration: none;
      }
      
      a:visited {
        text-decoration: none;
    }
`

const NoValuersTextBig  = styled.h1`
    font-family:'Archivo Black';
    font-size:3rem;
    color:white;
    
    transform: scaleY(0.85);
    @media (max-width: 1280px) {
      left:20%;
      top:70rem;           
    }
    @media (max-width: 800px) {
      font-size:2.5rem;           
    }  
    
    
`

const NoValuersTextMiddle = styled.div`
    color:white;
    position:absolute;
    top:55rem;
    right:5%;
    max-width:15rem;
    font-size:1.8rem;
    line-height:1rem;
    h3 {
      font-size:2.5rem;
      margin:0;
      line-height:0.8rem;
      font-family:'Archivo Black';
    }
    p {
      font-family:'Archivo Black';
    }
    @media (max-width: 1280px) {
      display:none;           
    } 
`

const CrueltyFree = styled.div`
  color:white;
  position:absolute;
  text-align:justify;
  top:60rem;
  left:35%;
  max-width:15rem;
  font-size:1rem;
  @media (max-width: 1280px) {
      left:80%;
      margin-left:-7.5rem;
      top:64rem;      
  } 
  h3 {
    font-size:1.6rem;
    margin:0;
    line-height:1rem;
    font-family:'Archivo Black';
  }
  h2 {
    font-size:2.8rem;
    margin:0;
    line-height:2.6rem;
    font-family:'Archivo Black';
  }
  
`

const NoValuersTextSmall = styled.div`
  color:white;
  position:absolute;
  top:55rem;
  right:39%;
  max-width:15rem;
  font-size:1.2rem;

  h3 {
    font-size:3rem;
    margin:0;
    font-family:'Archivo Black';
    line-height:1rem;
  }
  p {
    font-family:'Archivo Black';
  }
  @media (max-width: 1000px) {
    right:40%;           
  } 
`

const RabiitValeurs = styled.img`
  position:absolute;
  top:43.5rem;
  left:6.5%;
  max-width:15%;
  @media (max-width: 600px) {
    top:53.5rem;          
  } 
  
`
 
const LapinImage = styled.img`
  position:absolute;
  top:900px;
  max-width:200px;
  left:20vw;
  position:absolute;
  
  @media (min-width: 1700px) {
    top:980px;  
  }
  @media (min-width: 2000px) {
    top:1100px;  
  }
  @media (min-width: 2400px) {
    top:1180px;  
  }
  @media (min-width: 3000px) {
    top:1220px;  
  }
  @media (max-width: 1200px) {
    left:17vw;  
  }
  @media (max-width: 1000px) {
    left:20vw;  
  }
  @media (max-width: 800px) {
    left:26vw;  
  }
  @media (max-width: 600px) {
    left:32vw;  
  }      
`

const BigIlle = styled.img`
  position:absolute;
  top:48.5rem;
  
  max-width:13%;
  right:20vw;
  position:absolute;  
`



/* Parallax elements */


const ParalIle = styled.div`
  position:absolute;
  max-width: 1200px;
  right: 14%;
  top: 80%;
  transform: translate3d(0px, 41px, 0px);
  img {
    max-width:200px;
    height:auto;
    @media (max-width: 1200px) {
      max-width: 110px;
      right: 8%;   
    }
    @media (max-width: 1000px) {
      max-width: 90px;
      right: 4%;  
    }
    @media (max-width: 800px) {
      max-width: 70px;
      right: 2%;  
    }
    @media (max-width: 600px) {
      max-width: 50px; 
      right:0;   
    } 
  }
  
`


const ParalOisea = styled.div`
  left: 38%;
  top: 22%;
  position:absolute;
  @media (max-width: 600px) {
    max-width: 40px;
    left: 22%;  
  } 
  img {
    max-width:200px;
    height:auto;
    @media (max-width: 1200px) {
      max-width: 110px; 
    }
    @media (max-width: 1000px) {
      max-width: 80px;  
    }
    @media (max-width: 800px) {
      max-width: 60px;
      top: 8%;  
    }
    @media (max-width: 600px) {
      max-width: 40px;
      left: 2%;  
    } 
  }
  
`

const ParalZero = styled.div`
  position: absolute;
  top: 60%;
  left: 24%;
  max-width: 70px;
  transform: translate3d(0px, 48px, 0px);
  img  {
    max-width:200px;
    height:auto;
    @media (max-width: 1200px) {
      max-width: 110px; 
    }
    @media (max-width: 1000px) {
      max-width: 80px;  
    }
    @media (max-width: 800px) {
      max-width: 70px;
      top: 8%;  
    }
    @media (max-width: 600px) {
      max-width: 50px;
        
    } 
  }
`

 
const ParalFirst = styled.div`
  position: absolute;
  bottom:20rem;
  right:0;
  max-width: 182px;
  img  {
    max-width:182px;
    height:auto;
    @media (max-width: 1200px) {
      max-width: 140px; 
    }
    @media (max-width: 1000px) {
      max-width: 120px;  
    }
    @media (max-width: 800px) {
      max-width: 110px;
        
    }
    @media (max-width: 600px) {
      max-width: 90px;
        
    } 
  }

`
const ParalSec = styled.div`
  position: absolute;
  left: 16%;
  top: 40px;
  max-width: 120px;
  
  z-index:0;
  img  {
    max-width:120px;
    height:auto;
    @media (max-width: 1200px) {
      max-width: 110px; 
    }
    @media (max-width: 1000px) {
      max-width: 90px;  
    }
    @media (max-width: 800px) {
      max-width: 60px;
        
    }
    @media (max-width: 600px) {
      max-width: 50px;
        
    } 
  }
`


const ParalThree = styled.div`
  position: absolute;
  top: 13%;
  right: 22%;
  max-width: 140px;
  img  {
    max-width:140px;
    height:auto;
    @media (max-width: 1200px) {
      max-width: 110px; 
    }
    @media (max-width: 1000px) {
      max-width: 90px;  
    }
    @media (max-width: 800px) {
      max-width: 60px;
        
    }
    @media (max-width: 600px) {
      max-width: 50px;
        
    } 
  }
`

const ParalFour = styled.div`
  position: absolute;
  top: 56%;
  max-width: 110px;
  img  {
    max-width:110px;
    height:auto;
    @media (max-width: 1200px) {
      max-width: 80px; 
    }
    @media (max-width: 1000px) {
      max-width: 60px;  
    }
    @media (max-width: 800px) {
      max-width: 50px;
        
    }
    @media (max-width: 600px) {
      max-width: 40px;
        
    } 
  }
`




const ParalFive = styled.div`
position: absolute;
right: 20%;
top: -105px;
max-width: 140px;
img  {
  max-width:140px;
  height:auto;
  @media (max-width: 1200px) {
    max-width: 110px; 
  }
  @media (max-width: 1000px) {
    max-width: 90px;  
  }
  @media (max-width: 800px) {
    max-width: 70px;
      
  }
  @media (max-width: 600px) {
    max-width: 50px;
      
  } 
}
`



