import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Footer from './footer'
import Menu from './Menu'
import './layout.css'

class Layout extends React.Component {
  
  render() {
      const { children } = this.props 
      return (
          <div>
              <Menu location={this.props.location} fromHome={this.props.fromHome} />              
                <div style={{maxWidth:"100%", margin:"0 auto"}}>
                    {children}
                </div>
              <Footer location={this.props.location} fromHome={this.props.fromHome} />
              
          </div>
      )
  }
}

Layout.defaultProps = {
    location:{}
}

export default Layout