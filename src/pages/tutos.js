import React from 'react'
import Layout from '../components/Layout'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Modal from 'react-modal'
import Helmet from 'react-helmet'

import layers from '../data/images/lestutos/layers.png'
import bg1 from '../data/images/lestutos/bg1.png'
import bg2 from '../data/images/lestutos/bg2.png'
import bg3 from '../data/images/lestutos/bg3.png'
import bg4 from '../data/images/lestutos/bg4.png'
import bg5 from '../data/images/lestutos/bg5.png'
import bg6 from '../data/images/lestutos/bg6.png'
import bg7 from '../data/images/lestutos/bg7.png'
import bg8 from '../data/images/lestutos/bg8.png'
import copie from '../data/images/lestutos/copie.png'
import playButton from '../data/images/lestutos/playbutton.png'

import glove from '../data/images/lestutos/glove.mp4'
import mudmask from '../data/images/lestutos/mudmask.mp4'
import nailspa from '../data/images/lestutos/nailspa.mp4'
import noseporestrip from '../data/images/lestutos/noseporestrip.mp4'
import peeloff from '../data/images/lestutos/peeloff.mp4'
import sauna from '../data/images/lestutos/sauna.mp4'
import sheet from '../data/images/lestutos/sheet.mp4'
import sock from '../data/images/lestutos/sock.mp4'


const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.85)'
  },
  content : {
    width                 : '70%',
    
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class LeTutos extends React.Component {
  constructor () {
    super();
    this.state = {
        showModalOne: false,
        showModalTwo: false,
        showModalThree: false,
        showModalFour: false,
        showModalFive: false,
        showModalSix: false,
        showModalSeven: false,
        showModalEight: false
    };
    
    this.handleOpenModalOne = this.handleOpenModalOne.bind(this);
    this.handleCloseModalOne = this.handleCloseModalOne.bind(this);

    this.handleOpenModalTwo = this.handleOpenModalTwo.bind(this);
    this.handleCloseModalTwo = this.handleCloseModalTwo.bind(this);

    this.handleOpenModalThree = this.handleOpenModalThree.bind(this);
    this.handleCloseModalThree = this.handleCloseModalThree.bind(this);

    this.handleOpenModalFour = this.handleOpenModalFour.bind(this);
    this.handleCloseModalFour = this.handleCloseModalFour.bind(this);

    this.handleOpenModalFive = this.handleOpenModalFive.bind(this);
    this.handleCloseModalFive = this.handleCloseModalFive.bind(this);

    this.handleOpenModalSix = this.handleOpenModalSix.bind(this);
    this.handleCloseModalSix = this.handleCloseModalSix.bind(this);

    this.handleOpenModalSeven = this.handleOpenModalSeven.bind(this);
    this.handleCloseModalSeven = this.handleCloseModalSeven.bind(this);

    this.handleOpenModalEight = this.handleOpenModalEight.bind(this);
    this.handleCloseModalEight = this.handleCloseModalEight.bind(this);
    
    }

    handleOpenModalOne () {
      this.setState({ showModalOne: true });
    }
    
    handleCloseModalOne () {
      this.setState({ showModalOne: false,message:'' });
    }

    handleOpenModalTwo () {
      this.setState({ showModalTwo: true });
    }
    
    handleCloseModalTwo () {
      this.setState({ showModalTwo: false,message:'' });
    }

    handleOpenModalThree () {
      this.setState({ showModalThree: true });
    }
    
    handleCloseModalThree () {
      this.setState({ showModalThree: false,message:'' });
    }


    handleOpenModalFour () {
      this.setState({ showModalFour: true });
    }
    
    handleCloseModalFour () {
      this.setState({ showModalFour: false,message:'' });
    }


    handleOpenModalFive () {
      this.setState({ showModalFive: true });
    }
    
    handleCloseModalFive () {
      this.setState({ showModalFive: false,message:'' });
    }


    handleOpenModalSix () {
      this.setState({ showModalSix: true });
    }
    
    handleCloseModalSix () {
      this.setState({ showModalSix: false,message:'' });
    }


    handleOpenModalSeven () {
      this.setState({ showModalSeven: true });
    }
    
    handleCloseModalSeven () {
      this.setState({ showModalSeven: false,message:'' });
    }

    handleOpenModalEight () {
      this.setState({ showModalEight: true });
    }
    
    handleCloseModalEight () {
      this.setState({ showModalEight: false,message:'' });
    }

    
  render() {
    return (
      <Layout location={this.props.location} >
        <Helmet
              htmlAttributes={{ lang: 'en' }}
              meta={[{ name: 'description', content: "Les tutos"}]}
              title="7th Heaven - Tutos"
          /> 
         <LeTutosWrapper>
           <LeTutosItemFirst>
              <WrapperLeftSide>
              <LayerImage src={layers}></LayerImage>
              <TutosText>LES TUTOS</TutosText>
              <WrapperInfo>
                <span></span>
                <TextWrapper>
                  <MaskHeader>MUD MASK</MaskHeader>
                </TextWrapper>
              </WrapperInfo>
              </WrapperLeftSide> 
             
              <TutosImage src={bg1}></TutosImage>
              <ButtonPlay onClick={this.handleOpenModalOne} ></ButtonPlay>
              <Modal
                    ariaHideApp={false} 
                    isOpen={this.state.showModalOne}
                    style={customStyles}
                >
                    <CloseButton onClick={this.handleCloseModalOne}>Fermer</CloseButton>               
                    <video controls width="100%" height="auto" autoPlay={true}  muted >
                        <source src={mudmask} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
              </Modal>  
           </LeTutosItemFirst>
           <LeTutosItemSecond>
            <ButtonPlay onClick={this.handleOpenModalTwo} ></ButtonPlay>
            <Modal
                    ariaHideApp={false} 
                    isOpen={this.state.showModalTwo}
                    style={customStyles}
                >
                    <CloseButton onClick={this.handleCloseModalTwo}>Fermer</CloseButton>               
                    <video controls width="100%" height="auto" autoPlay={true}  muted >
                        <source src={peeloff} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
              </Modal>
            <TutosImageSecond src={bg2}></TutosImageSecond>
                <WrapperInfoSecond>
                  <span></span>
                  <TextWrapper>
                    <MaskHeader>PEEL OFF</MaskHeader>
                  </TextWrapper>
                </WrapperInfoSecond>   
           </LeTutosItemSecond>
           <LeTutosItemThird>
                <WrapperInfo>
                  <span></span>
                  <TextWrapper>
                    <MaskHeader>NAILS SPA</MaskHeader>
                  </TextWrapper>
                </WrapperInfo>
                <TutosImageThird src={bg3}></TutosImageThird>
                <ButtonPlay onClick={this.handleOpenModalThree}></ButtonPlay>
                <Modal
                    ariaHideApp={false} 
                    isOpen={this.state.showModalThree}
                    style={customStyles}
                >
                    <CloseButton onClick={this.handleCloseModalThree}>Fermer</CloseButton>               
                    <video controls width="100%" height="auto" autoPlay={true}  muted >
                        <source src={nailspa} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
              </Modal>     
           </LeTutosItemThird>
           <LeTutosItemFourth>
            <ButtonPlay onClick={this.handleOpenModalFour}></ButtonPlay>
            <Modal
                    ariaHideApp={false} 
                    isOpen={this.state.showModalFour}
                    style={customStyles}
                >
                    <CloseButton onClick={this.handleCloseModalFour}>Fermer</CloseButton>               
                    <video controls width="100%" height="auto" autoPlay={true}  muted >
                        <source src={sauna} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
              </Modal> 
            <TutosImageFourth src={bg4}></TutosImageFourth>
            <WrapperInfoSecond>
              <span></span>
              <TextWrapper>
                <MaskHeader>NOSE PORE STRIP</MaskHeader>
              </TextWrapper>
            </WrapperInfoSecond>    
           </LeTutosItemFourth>
           <LeTutosItemFifth>
              <WrapperInfo>
                <span></span>
                <TextWrapper>
                  <MaskHeader>GLOVES</MaskHeader>
                </TextWrapper>
              </WrapperInfo>
              <TutosImageFifth  src={bg5}></TutosImageFifth>
              <ButtonPlay onClick={this.handleOpenModalFive}></ButtonPlay>
              <Modal
                    ariaHideApp={false} 
                    isOpen={this.state.showModalFive}
                    style={customStyles}
                >
                    <CloseButton onClick={this.handleCloseModalFive}>Fermer</CloseButton>               
                    <video controls width="100%" height="auto" autoPlay={true}  muted >
                        <source src={glove} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
              </Modal>
           </LeTutosItemFifth>
           <LeTutosItemSixth>
            <ButtonPlay onClick={this.handleOpenModalSix}></ButtonPlay>
            <Modal
                    ariaHideApp={false} 
                    isOpen={this.state.showModalSix}
                    style={customStyles}
                >
                    <CloseButton onClick={this.handleCloseModalSix}>Fermer</CloseButton>               
                    <video width="100%" height="auto" autoPlay={true} controls  muted >
                        <source src={glove} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
              </Modal>
            <TutosImageSixth src={bg6}></TutosImageSixth>
              <WrapperInfoSecond>
                <span></span>
                <TextWrapper>
                  <MaskHeader>SAUNA MASK</MaskHeader>
                </TextWrapper>
              </WrapperInfoSecond>
           </LeTutosItemSixth>
           <LeTutosItemSeventh>
            <WrapperInfo>
                <span></span>
                <TextWrapper>
                  <MaskHeader>SHEET</MaskHeader>
                </TextWrapper>
              </WrapperInfo>
            <TutosImageSeventh src={bg7}></TutosImageSeventh>
            <ButtonPlay onClick={this.handleOpenModalSeven}></ButtonPlay>
            <Modal
                    ariaHideApp={false} 
                    isOpen={this.state.showModalSeven}
                    style={customStyles}
                >
                    <CloseButton onClick={this.handleCloseModalSeven}>Fermer</CloseButton>               
                    <video controls width="100%" height="auto" autoPlay={true}  muted >
                        <source src={sheet} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
              </Modal> 
           </LeTutosItemSeventh>
           <LeTutosItemEighth>
           <ButtonPlay onClick={this.handleOpenModalEight}></ButtonPlay>
           <Modal
                    ariaHideApp={false} 
                    isOpen={this.state.showModalEight}
                    style={customStyles}
                >
                    <CloseButton onClick={this.handleCloseModalEight}>Fermer</CloseButton>               
                    <video controls width="100%" height="auto" autoPlay={true}  muted >
                        <source src={sock} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
              </Modal>
            <TutosImageEighth src={bg8}></TutosImageEighth>
              <WrapperInfoSecond>
                <span></span>
                <TextWrapper>
                  <MaskHeader>SHEET</MaskHeader>
                </TextWrapper>
              </WrapperInfoSecond>
           </LeTutosItemEighth>
         </LeTutosWrapper>
      </Layout>
    )
  }
}



export default LeTutos

const LeTutosWrapper = styled.div`
  width:100%;
  height:auto;
  
`
const LeTutosItemFirst = styled.div`
display:-webkit-box;
display:-ms-flexbox;
display:flex;
-webkit-box-orient:horizontal;
-webkit-box-direction:normal;
-ms-flex-direction:row;
        flex-direction:row;
-webkit-box-align:end;
-ms-flex-align:end;
        align-items:flex-end;
background-image: -webkit-linear-gradient(42deg, #84e1aa 0%, #77d9e2 100%);
background-image: linear-gradient(48deg, #84e1aa 0%, #77d9e2 100%);
background-size:100%;
@media (max-width: 1000px) {
  padding-top:6rem;
}
@media (max-width: 600px) {
  padding-top:6rem;
  
}
`



const TutosImage = styled.img`
margin:0;
max-width:810px;
height:auto;

@media (max-width: 1100px) {
  max-width:600px;
  margin-left:-9rem;
}
@media (max-width: 800px) {
  max-width:400px;
  margin-left:-7rem;
}
@media (max-width: 600px) {
  max-width:300px;
  margin:0 0.4rem;
}

@media (max-width: 500px) {
  max-width:200px;
  margin:0 0.4rem;
}
`
const LayerImage = styled.img`
margin-top:1rem;
max-width:16rem;
@media (max-width: 800px) {
  max-width:8rem;    
}
@media (max-width: 500px) {
  max-width:4rem;
  margin-left:1rem;    
}   
`

const TutosText = styled.p`
  color:white;
  font-size:4rem;
  font-family:'Archivo Black';
  margin-top:-12rem;
  margin-bottom:8rem;
  -webkit-transform: scaleY(0.85);
  -ms-transform: scaleY(0.85);
  transform: scaleY(0.85);
  @media (max-width: 800px) {
    font-size:2rem;
    margin-top:-8rem;
    margin-bottom:4rem;    
  }
  @media (max-width: 500px) {
    font-size:1rem;
    margin-top:-3rem;
    margin-bottom:2rem;    
  } 
`

const WrapperLeftSide = styled.div`
display:-webkit-box;
display:-ms-flexbox;
display:flex;
-webkit-box-orient:vertical;
-webkit-box-direction:normal;
-ms-flex-direction:column;
        flex-direction:column;
-webkit-box-align:center;
-ms-flex-align:center;
        align-items:center;
margin-left:9rem;
margin-bottom:2rem;
@media (max-width: 1200px) {
  margin-left:0;
}
  
`

const CloseButton = styled.button`
    border:none;
    background:none;
    outline:none;
    cursor:pointer;
`

const WrapperInfo = styled.div`
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
-ms-flex-pack:distribute;
    justify-content:space-around;
color:white;
max-width:25rem;
margin:2rem 0 12rem;
margin-left:2rem;
@media (max-width: 1000px) {
  margin-top:0;
  -webkit-box-orient:vertical;
  -webkit-box-direction:normal;
      -ms-flex-direction:column;
          flex-direction:column;
  -ms-flex-pack:distribute;
      justify-content:space-around;
}

@media (max-width: 900px) {
  margin-top:0;
  -webkit-box-orient:vertical;
  -webkit-box-direction:normal;
      -ms-flex-direction:column;
          flex-direction:column;
  -ms-flex-pack:distribute;
      justify-content:space-around;
}

@media (max-width: 600px) {
  margin:0;
  
}

span {
  background-image: url(${copie});
  background-size:100%;
  width:6rem;
  height:6rem;
  background-repeat:no-repeat;
  
  @media (max-width: 800px) {
    width:2rem;
    height:2rem;
  }
  @media (max-width: 600px) {
    margin-top:1rem;
  }
}
`

const MaskHeader = styled.h4`
  font-size:2.4rem;
  margin:1rem 0;
  font-family:"Helvetica";
  font-weight:700;
  letter-spacing: 1.19px;
  margin-left:2rem;
  @media (max-width: 1000px) {
    margin-left:0;
  }  
`

const TextMask = styled.p`
  font-size:0.8rem;
  margin:0;
  padding:0;
  font-family:"Helvetica";
  font-weight: 300;
  line-height:1.2rem;
  letter-spacing: 1.19px;
  margin-left:2rem;
  @media (max-width: 1000px) {
    display:none;
  }
  
`

const TextWrapper = styled.div`
@media (max-width: 600px) {
  text-align:center;
  
}   
`

const ButtonPlay = styled.button`
background-image: url(${playButton});
background-repeat:no-repeat;
background-size:100%;
box-shadow:none;
outline:none;
border:none;
cursor:pointer;
background-color:white; 
background-color:transparent;
padding:0;
background-size:100%;
width:9rem;
height:9rem;
margin-bottom:12rem;

@media (max-width: 1200px) {
  margin-bottom:10rem;
  min-width:5rem;
  max-width:5rem;
  max-height:5rem;
}
@media (max-width: 600px) {
  margin:0;
  min-width:2rem;
  max-width:3rem;
}
`



const LeTutosItemSecond = styled.div`
padding-left: 2rem;
display:-webkit-box;
display:-ms-flexbox;
display:flex;
-webkit-box-orient:horizontal;
-webkit-box-direction:normal;
-ms-flex-direction:row;
        flex-direction:row;
-webkit-box-align:end;
-ms-flex-align:end;
        align-items:flex-end;
background-image: -webkit-linear-gradient(42deg, #f9dd5d 0%, #e2b677 100%);
background-image: linear-gradient(48deg, #f9dd5d 0%, #e2b677 100%);
background-size:100%;
@media (max-width: 800px) {
  -webkit-box-pack:center;
      -ms-flex-pack:center;
          justify-content:center;
  
}
`



const TutosImageSecond = styled.img`
max-width:41rem;
margin-bottom:0;
margin-left:8rem;
@media (max-width: 1100px) {
  max-width:32rem;
  
}
@media (max-width: 900px) {
  max-width:26.5rem;
  margin-left:2rem;
}
@media (max-width: 600px) {
  max-width:25rem;
  margin-left:1rem;
}

@media (max-width: 500px) {
  max-width:12rem;
  
}
`

const WrapperInfoSecond = styled.div`
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
color:white;
max-width:25rem;
margin:2rem 0 12rem;
margin-left:2rem;
@media (max-width: 1100px) {
  margin:1rem 0 6rem;
  margin-left:0;
}
@media (max-width: 1000px) {
  margin-top:0;
  -webkit-box-orient:vertical;
  -webkit-box-direction:normal;
      -ms-flex-direction:column;
          flex-direction:column;
  -ms-flex-pack:distribute;
      justify-content:space-around;
}

@media (max-width: 600px) {
  margin:0;
  
}
span {
  background-image: url(${copie});
  background-size:100%;
  width:6rem;
  height:6rem;
  background-repeat:no-repeat;
  
  @media (max-width: 800px) {
    width:2rem;
    height:2rem;
  }
  @media (max-width: 600px) {
    margin:0;
  }
}
`

const LeTutosItemThird = styled.div`
background-image: -webkit-linear-gradient(42deg, #ad7fc1 0%, #c0e8fe 100%);
background-image: linear-gradient(48deg, #ad7fc1 0%, #c0e8fe 100%);
display:-webkit-box;
display:-ms-flexbox;
display:flex;
-webkit-box-orient:horizontal;
-webkit-box-direction:normal;
-ms-flex-direction:row;
        flex-direction:row;
-webkit-box-align:end;
-ms-flex-align:end;
        align-items:flex-end;
background-size:100%;
-ms-flex-pack:distribute;
    justify-content:space-around;
margin-bottom:-0.05rem;
@media (max-width: 700px) {
  -webkit-box-pack:justify;
      -ms-flex-pack:justify;
          justify-content:space-between;
}
@media (max-width: 800px) {
  -webkit-box-pack:center;
      -ms-flex-pack:center;
          justify-content:center;
}
`

const TutosImageThird = styled.img`
  max-width:17.7rem;
  
  @media (max-width: 1100px) {
    max-width:14rem;
    margin-left:0;
  }
  @media (max-width: 900px) {
    max-width:13rem;
    
  }
  @media (max-width: 600px) {
    max-width:10rem;
    margin:0 0.4rem;
  }

  @media (max-width: 500px) {
    max-width:5rem;
    margin:0 0.4rem;
    
  }
`



const LeTutosItemFourth = styled.div`
background-image: -webkit-linear-gradient(42deg, #4f699e 0%, #a3b5c7 100%);
background-image: linear-gradient(48deg, #4f699e 0%, #a3b5c7 100%);
display:-webkit-box;
display:-ms-flexbox;
display:flex;
  -webkit-box-orient:horizontal;
  -webkit-box-direction:normal;
  -ms-flex-direction:row;
          flex-direction:row;
  -webkit-box-align:end;
  -ms-flex-align:end;
          align-items:flex-end;
  background-size:100%;
  -ms-flex-pack:distribute;
      justify-content:space-around;
  @media (max-width: 700px) {
    -webkit-box-pack:justify;
        -ms-flex-pack:justify;
            justify-content:space-between;
  }
  @media (max-width: 800px) {
    -webkit-box-pack:center;
        -ms-flex-pack:center;
            justify-content:center;
  }
`

const TutosImageFourth = styled.img`
  max-width:46rem;
  margin-bottom:0;
  @media (max-width: 1100px) {
    max-width:35.5rem;
    
  }
  @media (max-width: 800px) {
    max-width:25.5rem;
    
  }
  @media (max-width: 600px) {
    max-width:20rem;
    margin:0 0.4rem;
  }

  @media (max-width: 500px) {
    max-width:13rem;
    margin:0 0.4rem;
  }
`



const LeTutosItemFifth = styled.div`
background-image: -webkit-linear-gradient(42deg, #9aadc3 0%, #c0e8fe 100%);
background-image: linear-gradient(48deg, #9aadc3 0%, #c0e8fe 100%);
display:-webkit-box;
display:-ms-flexbox;
display:flex;
-webkit-box-orient:horizontal;
-webkit-box-direction:normal;
-ms-flex-direction:row;
        flex-direction:row;
-webkit-box-align:end;
-ms-flex-align:end;
        align-items:flex-end;
background-size:100%;
-ms-flex-pack:distribute;
    justify-content:space-around;
@media (max-width: 700px) {
  -webkit-box-pack:justify;
      -ms-flex-pack:justify;
          justify-content:space-between;
}
@media (max-width: 800px) {
  -webkit-box-pack:center;
      -ms-flex-pack:center;
          justify-content:center;
}
`

const TutosImageFifth  = styled.img`
  max-width:40rem;
  margin-bottom:0;
  @media (max-width: 1100px) {
    max-width:25rem;
    margin-left:-6rem;
  }
  @media (max-width: 900px) {
    max-width:29rem;
    margin-left:-9rem;
  }
  @media (max-width: 600px) {
    max-width:16rem;
    margin:0 0.4rem;
  }

  @media (max-width: 500px) {
    max-width:11rem;
    margin:0 0.4rem;
  }
`

const LeTutosItemSixth = styled.div`
background-image: -webkit-linear-gradient(42deg, #f9dd5d 0%, #e2b677 100%);
background-image: linear-gradient(48deg, #f9dd5d 0%, #e2b677 100%);
display:-webkit-box;
display:-ms-flexbox;
display:flex;
  -webkit-box-orient:horizontal;
  -webkit-box-direction:normal;
  -ms-flex-direction:row;
          flex-direction:row;
  -webkit-box-align:end;
  -ms-flex-align:end;
          align-items:flex-end;
  background-size:100%;
  -ms-flex-pack:distribute;
      justify-content:space-around;
  @media (max-width: 700px) {
    -webkit-box-pack:justify;
        -ms-flex-pack:justify;
            justify-content:space-between;
  }
  @media (max-width: 800px) {
    -webkit-box-pack:center;
        -ms-flex-pack:center;
            justify-content:center;
    
  }
`

const TutosImageSixth = styled.img`
  max-width:45rem;
  margin-bottom:0;
  @media (max-width: 1100px) {
    max-width:37.5rem;
    margin-left:-8rem;
  }
  @media (max-width: 900px) {
    max-width:34rem;
    margin-left:-6rem;
  }
  @media (max-width: 600px) {
    max-width:24rem;
    margin:0 0.4rem;
  }

  @media (max-width: 500px) {
    max-width:12.7rem;
    margin:0 0.4rem;
  }
`

const LeTutosItemSeventh = styled.div`
background-image: -webkit-linear-gradient(42deg, #ad7fc1 0%, #c0e8fe 100%);
background-image: linear-gradient(48deg, #ad7fc1 0%, #c0e8fe 100%);
display:-webkit-box;
display:-ms-flexbox;
display:flex;
-webkit-box-orient:horizontal;
-webkit-box-direction:normal;
-ms-flex-direction:row;
        flex-direction:row;
-webkit-box-align:end;
-ms-flex-align:end;
        align-items:flex-end;
background-size:100%;
-ms-flex-pack:distribute;
    justify-content:space-around;
@media (max-width: 700px) {
  -webkit-box-pack:justify;
      -ms-flex-pack:justify;
          justify-content:space-between;
}
@media (max-width: 800px) {
  -webkit-box-pack:center;
      -ms-flex-pack:center;
          justify-content:center;
  
}
`
const TutosImageSeventh = styled.img`
  max-width:36.5rem;
  margin-bottom:0;
  @media (max-width: 1100px) {
    max-width:30rem;
    margin-left:0;
  }
  @media (max-width: 900px) {
    max-width:27rem;
    margin-right:-2rem;
  }
  @media (max-width: 600px) {
    max-width:20rem;
    margin:0 0.4rem;
  }

  @media (max-width: 500px) {
    max-width:10.5rem;
    margin:0 0.4rem;
  }
`

const LeTutosItemEighth = styled.div`
background-image: -webkit-linear-gradient(42deg, #9aadc3 0%, #77d9e0 100%);
background-image: linear-gradient(48deg, #9aadc3 0%, #77d9e0 100%);
display:-webkit-box;
display:-ms-flexbox;
display:flex;
-webkit-box-orient:horizontal;
-webkit-box-direction:normal;
-ms-flex-direction:row;
        flex-direction:row;
-webkit-box-align:end;
-ms-flex-align:end;
        align-items:flex-end;
background-size:100%;
-ms-flex-pack:distribute;
    justify-content:space-around;
@media (max-width: 700px) {
  -webkit-box-pack:justify;
      -ms-flex-pack:justify;
          justify-content:space-between;
}
@media (max-width: 800px) {
  -webkit-box-pack:center;
      -ms-flex-pack:center;
          justify-content:center;
  
}
`

const TutosImageEighth = styled.img`
  max-width:32rem;
  margin-bottom:0;
  @media (max-width: 1100px) {
    max-width:25rem;
    margin-left:0rem;
  }
  @media (max-width: 900px) {
    max-width:25rem;
    margin-left:0;
  }
  @media (max-width: 600px) {
    max-width:20rem;
    margin:0 0.4rem;
  }

  @media (max-width: 500px) {
    max-width:10rem;
    margin:0 0.4rem;
  }
`




