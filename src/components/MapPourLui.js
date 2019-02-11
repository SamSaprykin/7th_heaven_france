import React from 'react'
import Layout from '../components/Layout'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'


const MapPourLui = () => (
    <StaticQuery
      query={graphql`
        query MapPourLui {
          file(relativePath: {
            regex:"/mapLui/"
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
         
        <MapWrapper>
            <h2>OU TROUVEZ NOS PRODUITS</h2>
            <WrapperImages>
                <Img sizes={data.file.childImageSharp.sizes} />
            </WrapperImages>            
        </MapWrapper>

      )}
    />
  )  



export default MapPourLui


const MapWrapper = styled.div`
font-family:'Montserrat';
text-transform:uppercase;
font-weight:600;
width:100%;
position:relative;
padding:2rem 0;
text-align:center;
padding-top:4rem;
@media(max-width: 600px) {
    padding:5rem 0;
}
h2 {
    margin-bottom:2rem;
    margin-top:2rem;
    font-family:'Montserrat';
    text-transform:uppercase;
    font-weight:600;
}
`




const WrapperImages = styled.div`
    max-width:72rem;
    margin:2rem auto;
`


