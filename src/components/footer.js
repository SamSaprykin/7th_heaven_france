import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import boiteauxlettres from '../data/images/boiteauxlettres.png'
import fb from '../data/images/fb.png'
import insta from '../data/images/insta.png'
import twitter from '../data/images/twitter.png'
import logoFooter from '../data/images/logo-footer.png'
import boitBlackFooter from '../data/images/boitBlack.png'
import youtube from '../data/images/youtube.png'


import { createGlobalStyle } from 'styled-components'


import * as fontFiles from "../fonts/index";

const GlobalStyle  = createGlobalStyle `
@font-face {
  font-family: 'northwellregular';
  src: url(${fontFiles.NorthwellWOF2}) format("truetype"),
       url(${fontFiles.NorthwellWOF}) format("truetype");
  font-weight: normal;
  font-style: normal;

}

.footerContact { 

  font-family:'northwellregular';
}
`


class Footer extends React.Component {
    shouldComponentUpdate() {
        return false;
      }
    render() {
        
        const {location}  = this.props
        return (
    <FooterWrapper  location={location} style={{ backgroundColor: location.pathname === '/pour-lui' ? `gray` : this.props.fromHome === true ? `gray`  : `#FE94BA`}} >
        <WrapperContent>
            <Contact>
            <GlobalStyle />
                <h5 className="footerContact">Contact</h5>
                <Link to="/contact">UNE QUESTION?</Link>
                <br /><br />
                <Link to="/mentions-legales">MENTIONS LEGALES</Link>
            </Contact>
            <SocialButtons>
                <LogoFooter src={logoFooter} alt="logo-footer"></LogoFooter>
                <IconsWrapper>
                   <a href="#"><img src={insta} alt="instagram" /></a> 
                   <a href="#"><img src={fb} alt="facebook" /></a> 
                   <a href="#"><img src={youtube} alt="youtube" /></a>  
                   <a href="#"><img src={twitter} alt="twitter" />  </a>                  
                </IconsWrapper>
            </SocialButtons>
            <div>          
                <FooterBox src={(location.pathname === '/pour-lui') ? `${boitBlackFooter}` : (this.props.fromHome === true) ? `${boitBlackFooter}` : `${boiteauxlettres}`} alt="boiteauxlettres" />        
            </div>   
        </WrapperContent>
                            
    </FooterWrapper>
      )
    }   
}


Footer.defaultProps = {
    location:{}
}


export default Footer


const FooterWrapper = styled.div` 
    max-width:100%;

    margin:0;
    padding:0;
      
`

const Contact = styled.div`
    margin-bottom:7rem;
    text-align:center;
    margin-left:9rem;   
    a {
        font-family: 'Source Sans Pro', sans-serif;
        margin:0 0.05rem;
        text-decoration:none;
        padding:8px 16px;
        line-height:1rem;
        color:black;
        border-radius:1px;
        font-weight:400;
        border:1px solid black;
        box-shadow:none;
        font-size:12px;
        
    }
    h5 {
        color: #ffffff;
        margin-bottom:-0.4rem;
        margin-left:-4rem;
        font-weight:400;
        font-size:6rem;
        transform: rotate(-4deg);      
    }
    @media (max-width: 992px) {
        margin:1rem 0;
               
    } 
`

const SocialButtons = styled.div`
    margin-left:8rem;
    text-align:center;
    @media (max-width: 1240px) {
        margin:3rem 0;
        margin-left:8rem;         
    }
    @media (max-width: 992px) {
        margin:2rem 0;
               
    } 
`


const FooterBox = styled.img`    
   max-width:500px;
   height:auto;
   margin-top:2rem;
   margin-bottom:-0.1rem;
   @media (max-width: 1240px) {
    width:300px;            
    }
    @media (max-width:1000px)  {
        display:none;
    }  
`

const LogoFooter = styled.img`
    width:200px;
    height:auto;
    margin-bottom:0;
    @media (max-width:1000px)  {
        width:120px;
    }  
`


const WrapperContent = styled.div`

    margin:0 auto;
    padding:0 2rem;    
    max-width:1400px;
    height:auto;
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:space-between;
    align-items:center;
    @media (max-width: 1000px) {
        flex-direction:column;            
    }
`

const IconsWrapper = styled.div`
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex;
    -webkit-box-orient:horizontal;
    -webkit-box-direction:normal;
    -ms-flex-direction:row;
            flex-direction:row;
    -ms-flex-wrap:wrap;
        flex-wrap:wrap;
    -webkit-box-align:center;
    -ms-flex-align:center;
            align-items:center;
    img {
        width:40px;
        margin:1rem 1rem;
    }
`