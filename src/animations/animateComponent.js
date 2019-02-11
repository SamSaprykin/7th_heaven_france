import React, { Component } from "react";
import AOS from "aos";
import classNames from "classnames";
import { Watch } from "scrollmonitor-react";
import styled from 'styled-components';

import "./card.css"
import "aos/dist/aos.css";
import histoirePolaOne from '../data/images/homePage/histoirePolaOne.png'
import histoirePolaTwo from '../data/images/homePage/histoirePolaTwo.png'

const ViewStyle = props => (
  
    <div>
      <PolaTwo src={histoirePolaTwo} data-aos={props.aos}/>
      <PolaOne src={histoirePolaOne} data-aos={props.aos}/> 
    </div>

  
);

export default Watch(
  class TextComponent extends React.Component {
    componentDidMount() {
      this.aos = AOS;
      this.aos.init({
        duration: 1500
      });
    }

    componentDidUpdate() {
      this.aos.refresh();
    }

    render() {
      const aosClass = classNames({
        "aos-init": true,
        "viewport-purple": !this.props.isInViewport,
        "aos-animate viewport-blue": this.props.isInViewport
      });

      return (
        <span>
          {this.props.isInViewport ? (
            <ViewStyle aos="card"/>
          ) : (
            <ViewStyle aos="card"/>
          )}
          {this.props.children}
        </span>
      );
    }
  }
);



const PolaTwo = styled.img`
  max-width:40%;
  min-width:15rem;
  height:auto;
  top: 2%;
  position:absolute;
  right: 3%;
  z-index:4;
`



const PolaOne = styled.img`
  max-width:40%;
  min-width:15rem;
  height:auto;
  position:absolute;
  top: 10%;
  right: 16%; 
  z-index:3;
`