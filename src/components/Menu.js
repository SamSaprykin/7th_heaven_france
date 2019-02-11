import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { MdMenu } from "react-icons/md";
import Logo from '../data/images/logo.png'
import LogoDark from '../data/images/logoDark.png'  




class Menu extends React.Component {
    constructor() {
        super()
        this.state = {
            isMenuVisible:`none`
        }
        this.handleToggleMenu = this.handleToggleMenu.bind(this)
    }

    
    handleToggleMenu() {
      if(this.state.isMenuVisible === `none`) {
          this.setState({ isMenuVisible: `block`});
      }  
      else 
        this.setState({ isMenuVisible:`none`})      
    }
      render() {
        const {location}  = this.props
        return (
    <MenuWrapper>
        <HeaderWrapper>
            <ToggleOverlay onClick={this.handleToggleMenu}  href="javascript:;"><MdMenu style={{cursor: `pointer`,outline:`none`,boxShadow:`none`,color:`gray`}} size={36} /></ToggleOverlay>
            <LogoWrapper>
            
               <Link to="/"><LogoImage src={(location.pathname === '/pour-lui')  ? `${LogoDark}` : (this.props.fromHome === true)  ? `${LogoDark}` :`${Logo}` } ></LogoImage></Link>
            
            </LogoWrapper>
        </HeaderWrapper>
        <AsideMenu style={{display:this.state.isMenuVisible,opacity:this.state.opacity}}>
            <div className="outer-close toggle-overlay">
            <ButtonClose  onClick={this.handleToggleMenu}><span></span></ButtonClose>
            </div>
            <NavLinks>
                <ul >
                    <li><Link to="/"> Home </Link></li>
                    <li><Link to="/valeurs"> Valeurs </Link></li>
                    <li><Link to="/histoire">Histoire</Link></li>
                    <li><Link to="/recompenses"> Recompenses </Link></li>
                    <li><Link to="/news"> News </Link></li>
                    <li><Link to="/pour-elle"> Pour Elle </Link></li>
                    <li><Link to="/pour-lui"> Pour Lui </Link></li>
                    <li><Link to="/nouveautes"> Nouveautes </Link></li>
                    <li><Link to="/tutos"> Tutos </Link></li>
                    <li><Link to="/contact"> Contact</Link></li>             
                </ul>
            </NavLinks>
        </AsideMenu>
    </MenuWrapper>
    )
  }
}

Menu.defaultProps = {
    location:{}
}

export default Menu

const LogoImage = styled.img`
width:15rem;
height:auto;
margin:2rem auto;
float: none;
position: absolute;
top: 50%;
left: 50%;
-webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        @media (max-width: 800px) {
            max-width:8rem;
            margin:1rem auto;
        }
`

const LogoWrapper = styled.div`
    width:90%;
    
`

const HeaderWrapper = styled.div`
background-color: rgba(0, 0, 0, 0.001);
color: white;
position: absolute;
top: 0;
left: 0;
width: 100%;
height:50px;
padding: 0;
margin: 0;
display:-webkit-box;
display:-ms-flexbox;
display:flex;
-webkit-box-orient:horizontal;
-webkit-box-direction:normal;
-ms-flex-direction:row;
        flex-direction:row;
text-align:center;
`
const ButtonClose = styled.a`
position: fixed;
top: 40px;
right: 60px;
color: white;
z-index: 20;
cursor: pointer;
font-family: sans-serif;
span,
span:before,
span:after {
border-radius: 4px;
height: 5px;
width: 35px;
background: white;
position: absolute;
display: block;
content: '';
}
span {
background: transparent;
}
span:before {
-webkit-transform: rotate(45deg);
        transform: rotate(45deg);
}
span:after {
-webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
}
`



const ToggleOverlay = styled.button`
cursor:pointer;
padding: 15px 40px;
background: transparent;
text-decoration: none;
border: none;
color: black;
border-radius: 8px;
-webkit-transition:all .5s ease;
transition: all .5s ease;
width:10%;
box-shadow:none;
outline:none;
`

const AsideMenu = styled.aside`
visibility:visible;
opacity:1;
position: fixed;
width: 100%;
height: 100%;
top: 0;
left: 0;
background: -webkit-linear-gradient(87deg, #fe94ba 0%, #56e0e8 100%);
background: linear-gradient(3deg, #fe94ba 0%, #56e0e8 100%);
-webkit-transition:all .5s ease;
transition: all .5s ease;
z-index: 1000;
`

const NavLinks = styled.nav`
text-align: center;
height: 95vh;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
-ms-flex-direction: column;
        flex-direction: column;
-webkit-box-pack: center;
-ms-flex-pack: center;
        justify-content: center;
font-family:'Archivo Black';
ul {
    margin: 0;
    padding: 0;
    list-style: none;
    opacity:1;
    li {
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
        -webkit-box-flex: 1;
            -ms-flex: 1;
                flex: 1;
        line-height: 5vh;
        opacity:1;
        a {
            font-size: 1.5em;
            -webkit-transition: all 0.5s ease;
            transition: all 0.5s ease;
            display: block;
            text-decoration: none;
            color: rgba(255, 255, 255, .5);
            text-transform:uppercase;
            &:hover {
                color:rgba(255, 255, 255, .9);
                -webkit-transform: scale(1.1);
                        transform: scale(1.1);
                &:before {
                    visibility: visible;
                    -webkit-transform: scaleX(1);
                            transform: scaleX(1);
                }
            }
            &:before {
                content: "";
                position: absolute;
                width: 50%;
                height: 2px;
                bottom: 0;
                left: 25%;
                background: white;
                visibility: hidden;
                -webkit-transform: scaleX(0);
                        transform: scaleX(0);
                -webkit-transition: all 0.3s ease-in-out 0s;
                transition: all 0.3s ease-in-out 0s;
            }
        }
    }
}
`

const MenuWrapper = styled.div`
    width: 100%;
    margin: 0 auto;
    overflow: hidden;   
`



