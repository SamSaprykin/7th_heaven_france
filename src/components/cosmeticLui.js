import React from 'react'
import Layout from '../components/Layout'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'


import rectangle from '../data/images/recompenses/Rectangle.png'
import greenBanner from '../data/images/histoire/green-banner.png'
import lavabo from '../data/images/homme/lavabo.png'

const CosmeticLui = () => (
    <StaticQuery
      query={graphql`
        query CosmeticLui {
          file(relativePath: {
            regex:"/lavabo/"
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
        
        <LavaboWrapper>
            <ContentWrapper>
                <h2>COSMETIQUE : LES HOMMES 2.0</h2>
                <LineBlack src={rectangle} />
                <SectionMask>
                    <Container>
                        <MaskPhoto src={lavabo}></MaskPhoto>
                    </Container>
                    <MaskText>	<p>A Men's mask range specifically formulated to energise skin -
                         so they can finally stop secretly using ours!
                         No nonsense natural grooming, specifically formulated for Men's skin.
                         A Men's mask range specifically formulated to energise skin
                          - so they can finally stop secretly using ours!
                         No nonsense natural grooming, specifically formulated for Men's skin.</p>
                    </MaskText>
                </SectionMask>         
            </ContentWrapper>       
        </LavaboWrapper>

      )}
    />
  )  



export default CosmeticLui


const LavaboWrapper = styled.div`
    width:100%;
    padding:2rem 0;

    padding-top:5rem;
    background-color: #f0f0f0;
    @media(max-width: 600px) {
        padding:5rem 0;
    }
    h2 {
        margin-bottom:6rem;
        margin-top:2rem;
        font-family:'Montserrat';
    }
`

const ContentWrapper = styled.div`
    text-align:left;
    width:80%;
    margin:0 auto;
    margin-bottom:2rem;
    h2 {
        margin-bottom:1rem;
    }
`





const LineBlack = styled.img`
    width:4rem;
    height:0.1rem;
    @media (max-width: 800px) {
        margin-bottom:0;
    }
`

const Container = styled.div`
    position: relative;
    z-index:0;
`

const SectionMask = styled.div`
    max-width:60rem;
    height:auto;
    margin-top:2rem;
    display:flex;
    flex-direction:column;
    align-items:flex-end;
    color: #817b7b;
`


const MaskPhoto = styled.img`
    max-width:80%;
    height:auto;
    @media (max-width: 1500px) {
        max-width:100%;
        margin:0 auto; 
              
    }
    @media (max-width: 800px) {
        max-width:100%;
    }  
`

const MaskText = styled.div`
    max-width:64rem;
    margin-top:-24rem;
    margin-right:-16rem;
    background-color:#ffffff;
    height:auto;
    padding:2rem 3rem;
    text-align:justify;
    box-sizing:border-box;
    font-family:'Montserrat';
    @media (max-width: 1500px) {
        margin:0 auto;
        padding:1rem 1rem;            
    }
    
    p {
        margin-left:40rem;
        margin-top:6rem;
        margin-bottom:6rem;
        max-width:22rem;
        
        @media (max-width: 1500px) {
            margin:0 auto;
            padding:1rem 1rem;
            max-width:32rem;            
        }
    }
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
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    h1 {
        font-size:3rem;
        margin-bottom:0.2rem;
    }
    p {
        font-size:0.7rem;
        
        margin-bottom:0;
        margin-top:0.2rem;
        padding:0;
    }
` 