import React from 'react'
import Layout from '../components/Layout'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'





class IndexLui extends React.Component {
  
  render() {
      return (
        <StaticQuery
        query={graphql`
        query ImagePourLuiIndex {
          file(relativePath: {
            regex:"/pourlui/"
          }) {
            childImageSharp{
              sizes(maxWidth:500) {
                  ...GatsbyImageSharpSizes
              }
            } 
          }
        }
      `}
      render={data => (
            <BigHeader >
                <WrapperImages>
                    <TextElle>Pour Lui</TextElle>
                    <Img style={{marginBottom:`-1rem`}} sizes={data.file.childImageSharp.sizes} />
                   
                        <Link  to="/pour-lui">DÉCOUVRIR</Link>
                    
                </WrapperImages>            
            </BigHeader>
        )}
      />    
    )
  }
}



export default IndexLui




const BigHeader = styled.div`
width:100%;
background-color: #131313;
position:relative;
text-align:center;
@media(max-width: 600px) {
    padding:5rem 0;
}
`

const WrapperImages = styled.div`
max-width:52rem;
margin:0rem auto;
padding-top:1rem;
z-index:20;
height:42rem;
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
  display:inline-block;
  
}
a:link {
  text-decoration: none;
}

a:visited {
  text-decoration: none;
}
`

const TextElle = styled.p`
  max-width:30rem;
  color:white;
  font-size:4rem;
  float: none;
  font-family:'Archivo Black';
  position: absolute;
  z-index:1;
  bottom: 15%;
  left: 50%;
  text-transform:uppercase;
  -webkit-transform: translate(-50%, -50%) scaleY(0.85);
          transform: translate(-50%, -50%) scaleY(0.85);
  @media(max-width: 600px) {
      font-size:3rem;
      width:20rem;
  }
`











