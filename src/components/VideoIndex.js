import React, { Component } from 'react'
import styled from 'styled-components'

export default class VideoIndex extends Component {
  render() {
    return (
    <VideoWrapper>
        <iframe 
            src="https://player.vimeo.com/video/180755160?byline=0&portrait=0&title=0&autoplay=1" 
            width="640" 
            height="360" 
            frameBorder="0"  
            webkitallowfullscreen="true" 
            mozallowfullscreen="true" 
            allowFullScreen
            title="Index video"
        ></iframe>
    </VideoWrapper>
    )
  }
}



const VideoWrapper = styled.div`
text-align:center;
margin:1rem auto;
@media (max-width: 800px) {
  padding:0 1rem;
  iframe {
      width:100%;
  }
}
  
`
