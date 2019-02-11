import React from 'react'
import Layout from '../components/Layout'
import styled from 'styled-components'
import Helmet from 'react-helmet'

import histoire from '../data/images/histoire/7thheaven_video_histoire.mp4'
import land from '../data/images/histoire/land.png'
import lime from '../data/images/histoire/lime.png'
import map from '../data/images/histoire/map.png'
import mapfull from '../data/images/histoire/mapfull.png'
import montagneJeunesse from '../data/images/histoire/montagne-jeunesse.png'
import greenBanner from '../data/images/histoire/green-banner.png'



class OurHistory extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: "Notre histoire"}]}
          title="7th Heaven - Histoire"
          />  
        <video style={{zIndex:`-100`,position:`relative`}} width="100%" height="auto" autoPlay={true} loop={true}  muted >
            <source style={{zIndex:`-100`}} src={histoire} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <SectionIngredients>
            <ContainerIng>
                
                <TextFirst>MONTAGE JEUNESSE, D’ORIGINE ANGLAISE</TextFirst>
                
                <ImageLand src={land} />
                <TextSecond>
                Nous disposons également d’une unité de Recherche &amp; Développement,
                 basée quant à elle à Horsham, petite ville du Sussex de l’ouest,
                  en Angleterre, composée de 7 personnes, créant et développant 
                  l’intégralité de nos recettes.
	            </TextSecond>
                <TextThree>
               
                  MONTAGNE JEUNESSE International Limited est une société indépendante,
                     d’origine anglaise, dont le siège social est basé au Pays de Galles,
                      à Port Talbot, une ville proche de Cardiff.
                </TextThree>
                <TextFour>
                    <img src={montagneJeunesse} />
                </TextFour>
            </ContainerIng>
        </SectionIngredients>
        <SectionMap>
            <LeaderText>LEADER MONDIAL</LeaderText>
            <MapContainer>
                <MapFull src={mapfull}></MapFull>
                <div>Avec plus de 30 années de présence et de succès dans les
                 produits de beauté,<br />nous commercialisons nos différents produits
                  dans plus de 89 pays au travers le monde.</div>
            </MapContainer>
            <TextRight>
                <div>
                    <h2>30</h2>
                    <p>ANNEES DE SUCCES</p>
                </div>
                <div>
                    <h2>89</h2>
                    <p>PAYS DISTRIBUENT NOS PRODUITS</p>
                </div>               
            </TextRight>
        </SectionMap>
        <SectionMask>
            <Container>
                <MaskPhoto src={greenBanner}></MaskPhoto>
                <TextBlock>
                    <h1>100</h1><p>MILLIONS DE MASQUES VENDUS DANS LE MONDE</p>
                </TextBlock>
            </Container>
            <MaskText>	Dépassant le chiffre de plus de 100 millions 
                de masques vendus dans le monde en une année, sous différentes marques, 
                nous sommes le leader mondial incontesté de ce marché.
            </MaskText>
        </SectionMask>
      </Layout>
    )
  }
}

export default OurHistory






const SectionIngredients = styled.div`
width:100%;
height:auto;
margin:0;
margin-top:-1rem;
padding-top:4rem;
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
background: -webkit-linear-gradient(left, #FFFFFF 50%, #FFEEE7 50%);
background: linear-gradient(90deg, #FFFFFF 50%, #FFEEE7 50%);
-ms-flex-pack: distribute;
    justify-content: space-around;
    @media (max-width: 800px) {
    -webkit-box-align:center;
        -ms-flex-align:center;
            align-items:center;
    -webkit-box-orient:vertical;
    -webkit-box-direction:normal;
        -ms-flex-direction:column;
            flex-direction:column;
    margin-bottom:0;
}
      
`

const ContainerIng = styled.div`
position: relative;
text-align:center;
color: #847C7C;
@media (max-width: 800px) {
    margin-bottom:4rem;           
} 
`

const ImageLand = styled.img`
max-width:60%;
margin:0 auto;
@media (max-width: 800px) {
    max-width:80%;           
} 
@media (max-width: 560px) {
    max-width:100%;           
} 
`

const TextFirst = styled.h5`
position:absolute;
text-transform: uppercase;
font-size: 23px;
bottom: 55%;
left: 10%;
font-weight: normal;
max-width: 16rem;
text-align: justify;
font-family: 'Montserrat';
font-weight:600;
@media (max-width: 1200px) {
    bottom: 100%;
    text-align:center;
    left: 50%;
    margin:0;
    font-size:16px;
    max-width:16rem;
    margin-left:-8rem;        
}
@media (max-width: 800px) {
    max-width:12rem;
    bottom:100%;
    left:50%;
    margin-left:-6rem;             
}

`
const TextSecond = styled.p`
position: absolute;
width: 18rem;
text-align: justify;
font-size: 13px;
left:31%;
bottom:5%;
margin-left:-14rem;
line-height: 1.6;
font-family: 'Montserrat';
color: #817b7b;
@media (max-width: 1200px) {
    bottom: 30%;
    left: 2%;
    width: 15rem;
    margin-left:0; 
               
}
@media (max-width: 800px) {
    width:250px;
    height:80px;
    top:94%;
    left:50%;
    margin-left:-125px;
    font-size:10px;
    background-color:white;
                
}
    
`
const TextThree = styled.p`
position: absolute;
background-color: white;
padding: 30px;
width: 340px;
text-align: justify;
font-size: 13px;
bottom: 33%;
right: 18%;
z-index: 3;
line-height: 1.6;
font-family: 'Montserrat';
color: #817b7b;
@media (max-width: 1200px) {
    left:50%;
    bottom:2%;
    padding: 10px;
    margin-left:-170px;             
}
@media (max-width: 800px) {
    padding:2px;
    font-size:10px;
    left:50%;
    margin-left:-125px;
    bottom:2%;
    max-width:250px;           
}

`

const TextFour = styled.div`
position: absolute;
max-width: 100px;
bottom:15%;
right:21.5%;
img {
    max-width:150px;
      
}
@media (max-width: 1200px) {
    bottom:35%;
    right:10%;
         
}
@media (max-width: 800px) {
    left:5%;
    max-width:120px;         
}
@media (max-width: 500px) {
    display:none;         
}     
`

const LeaderText = styled.p`
font-size:1.2rem;
width:10rem;

font-weight:600;

text-align:left;
@media (max-width: 800px) {
    font-size:20px;
    margin-top:4rem;
    width:14rem;
    text-align:center;            
}
@media (max-width: 560px) {
    margin-top:2rem;           
}  
`


const TextRight = styled.div`
text-align:center;
display:-webkit-box;
display:-ms-flexbox;
display:flex;
-webkit-box-pack:start;
-ms-flex-pack:start;
        justify-content:flex-start;
-webkit-box-orient:vertical;
-webkit-box-direction:normal;
-ms-flex-direction:column;
        flex-direction:column;
        font-family: 'Montserrat';
width:6rem;
@media (max-width: 800px) {
    
    -webkit-box-align:center;
    
        -ms-flex-align:center;
    
            align-items:center;
    width:20rem;        
} 
h2 {
    font-size:3.5rem;
    margin:0.5rem auto;
    @media (max-width: 800px) {
        font-size:2.5rem;
        margin-top:1.5rem;            
    } 
}
p {
    font-size:12px;
    line-height:14px;
    width:6rem;
    @media (max-width: 800px) {
        width:10rem;
        margin-bottom:0;
        font-size:16px;
        line-height:18px;            
    }
}
`

const SectionMask = styled.div`
max-width:70rem;
height:auto;
margin:0 auto;
margin-top:10rem;
display:-webkit-box;
display:-ms-flexbox;
display:flex;
-webkit-box-orient:vertical;
-webkit-box-direction:normal;
-ms-flex-direction:column;
        flex-direction:column;
-webkit-box-align:end;
-ms-flex-align:end;
        align-items:flex-end;
color: #817b7b;
margin-bottom:5rem;
`

const MaskPhoto = styled.img`
    max-width:70%;
    height:auto;
    margin-right:5rem;
    @media (max-width: 800px) {
        max-width:100%;
        margin-right:0;
        margin-bottom:2rem;            
    } 
`

const MaskText = styled.p`
    max-width:30rem;
    margin-top:-8rem;
    background-color:#ffffff;
    height:auto;
    padding:2rem 3rem;
    text-align:justify;
    box-sizing:border-box;
    font-family: 'Montserrat';
    @media (max-width: 800px) {
        margin:0 auto;
        margin-top:-1rem;
        padding-top:0;
        padding-bottom:4rem;           
    }
`



const SectionMap = styled.div`
    box-sizing:border-box;
    max-width:67%;
    height:auto;
    margin:4rem auto;
    display:flex;
    flex-direction:row;
    align-items:center;
    color: #817b7b;
    font-family: 'Montserrat';
    justify-content: space-around;
    @media (max-width: 800px) {
        align-items:center;
        flex-direction:column;
        margin-bottom:0;
    }
    
`
const MapContainer = styled.div`
    position:relative;
    text-align: center;
    font-family: 'Montserrat';
    color: #817b7b;
    div {
        position:absolute;
        font-family: 'Montserrat';
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width:40%;
        line-height:22px;
        font-size:13px;
        text-align:center;
    }
`
const MapFull = styled.img`
    max-width:80%;
    height:auto;
    margin:0 auto;
    @media (max-width: 800px) {
        max-width:380px;           
    }
`

const Container = styled.div`
    position: relative;
    z-index:-100;
`

const TextBlock = styled.div`
position: absolute;
text-align:center;
top: 1px;
left:100px;
color: white;
width:10rem;
height:auto;
z-index:100;
display:-webkit-box;
display:-ms-flexbox;
display:flex;
-webkit-box-orient:vertical;
-webkit-box-direction:normal;
-ms-flex-direction:column;
        flex-direction:column;
-webkit-box-pack:start;
-ms-flex-pack:start;
        justify-content:flex-start;
        font-family: 'Montserrat';
@media (max-width: 1000px) {
    top:-30px;           
}
@media (max-width: 800px) {
    left:30px;           
}
h1 {
    font-size:4rem;
    margin-bottom:0.2rem;
    font-family: 'Montserrat';
}
p {
    font-size:0.7rem;
    font-family: 'Montserrat';
    margin-bottom:0;
    margin-top:0.2rem;
    padding:0;
}
` 