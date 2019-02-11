import React, { Component } from 'react'
import Layout from '../components/Layout'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import styled from 'styled-components'
import Helmet from 'react-helmet'

import nom from '../data/images/contact/1.png'
import email from '../data/images/contact/2.png'
import mobile from '../data/images/contact/3.png'
import commentaire from '../data/images/contact/5.png'
import demand from '../data/images/contact/6.png'
import reclamation from '../data/images/contact/7.png'
import partic from '../data/images/contact/8.png'


export default class ContactPage extends React.Component {
  constructor () {
    super();
    this.state = {
      name: null,
      email: null,
      message:''
    };
    
    this.__handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this)
  }

  
  

  _handleChange = e => {
    e.preventDefault();
    
    this.setState({
      [`${e.target.name}`]: e.target.value,
    })
  }

  _handleSubmit = e => {
    e.preventDefault();
    addToMailchimp(this.state.email, {
      NAME: this.state.NAME,
      LNAME: this.state.LNAME,
      MMERGE3: this.state.MMERGE3,
      MMERGE5: this.state.MMERGE5,
      MMERGE7: this.state.MMERGE7,
      MMERGE6: this.state.MMERGE6,
      MMERGE4: this.state.MMERGE4,
      MMERGE8: this.state.MMERGE8
  
  })
    .then(({msg, result}) => {
      if (result !== 'success') {
        
        throw msg;          
      }
      this.setState(function(state, props) {
          return {
             message: `Merci pour votre demande, nous reviendrons vers vous dans les plus brefs delais `
          }
         });
    })
    .catch(err => {
      this.setState(function(state, props) {
        return {
           message: err
        }
       });
    });
  }
    
    render() {
      
      return (
        <Layout location={this.props.location}>
          <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: "Contactez nous"}]}
          title="7th Heaven - Contact"
          />          
          <WrapperContact>
            
            <h3>CONTACT</h3>
            <hr />
            <ParagraphWrapper>
              <p>Remplissez le formulaire ci-dessous</p>
              <p>les équipes de 7TH HEAVEN vous répondent sous 24h !</p>  
            </ParagraphWrapper>
            <form onSubmit={this._handleSubmit}>
              <input className="cont-nom" type="text" onChange={this._handleChange} placeholder="Nom" name="NAME" />
              <input className="cont-prenom"  type="text" onChange={this._handleChange} placeholder="Prénom" name="LNAME" />
              <input className="cont-email" type="email" onChange={this._handleChange} placeholder="Email" name="email" />
              <input className="cont-mobile" type="text" onChange={this._handleChange} placeholder="Téléphone" name="MMERGE4" />
              <input className="cont-commentaire" type="text" onChange={this._handleChange} placeholder="Commentaire sur un produit" name="MMERGE3" />
              <input className="cont-demand" type="text" onChange={this._handleChange} placeholder="Demande d’information sur un produit" name="MMERGE5" />
              <input className="cont-reclamation" type="text" onChange={this._handleChange} placeholder="Réclamation formelle" name="MMERGE6" />
              <input className="cont-partic" type="text" onChange={this._handleChange} placeholder="Participation au jeu concours" name="MMERGE7" />
              <textarea rows="2" type="text" onChange={this._handleChange} placeholder="Commentaire" name="MMERGE8" />                
              <input type="submit" value="ENVOYER" />
            </form>
            <MessageUser>{this.state.message}</MessageUser>
          </WrapperContact>
        </Layout>
      )
    }
  }

  const WrapperContact = styled.div` 
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  margin:5rem auto 0;
  -webkit-box-orient:vertical;
  -webkit-box-direction:normal;
  -ms-flex-direction:column;
          flex-direction:column;
  text-align:center;
  border:none;
  margin-top:-0.1rem;
  padding-top:5rem;
  background-image: -webkit-linear-gradient(87deg, #fe94ba 0%, #56e0e8 100%);
  background-image: linear-gradient(3deg, #fe94ba 0%, #56e0e8 100%);
  hr {
    width:2rem;
    color:red;
    margin:1rem auto;
    background-color: #d6c098;
  }
  p {
    /* Style for "Remplissez" */
    color: #ffffff;
    font-weight: 400;
    width:25rem;
    margin:0 auto;
  }
  form {
    margin:0 auto ;
    border:none;
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex;
    -webkit-box-orient:horizontal;
    -webkit-box-direction:normal;
        -ms-flex-direction:row;
            flex-direction:row;
    -ms-flex-wrap:wrap;
        flex-wrap:wrap;
    max-width:810px;
    -webkit-box-pack:justify;
        -ms-flex-pack:justify;
            justify-content:space-between;
    @media (max-width: 1024px) {
      -webkit-box-orient:vertical;
      -webkit-box-direction:normal;
          -ms-flex-direction:column;
              flex-direction:column;            
    }  
  }
  h3 {
    color: #f4a8a9;
    margin-top:6rem;
    font-size:28px;
    font-family:'Montserrat';
  }
  input[type="submit"] {
    color:#ffffff;
    border:none;
    margin:3rem auto 5rem;
    width:5rem;
    width: 150px;
    height: 26px;
    border-radius: 10px;
    border: 0.5px solid #ffffff;
    background-color: transparent;
    outline: none;
    cursor:pointer;
  }
  .cont-nom {
    background: url(${nom}) no-repeat scroll 10px 6px;
    background-color:white;
    background-size:15px;
  }
  .cont-prenom {
    background: url(${nom}) no-repeat scroll 10px 6px;
    background-color:white;
    background-size:15px;
  }
  .cont-email {
    background: url(${email}) no-repeat scroll 10px 8px;
    background-color:white;
    background-size:15px; 
  }
  .cont-mobile {
    background: url(${mobile}) no-repeat scroll 11px 2px;
    background-color:white;
    background-size:10px; 
  }
  .cont-commentaire {
    background: url(${commentaire}) no-repeat scroll 10px 6px;
    background-color:white;
    background-size:15px; 
  }
  .cont-demand {
    background: url(${demand}) no-repeat scroll 10px 7px;
    background-color:white;
    background-size:15px; 
  }
  .cont-reclamation {
    background: url(${reclamation}) no-repeat scroll 10px 6px;
    background-color:white;
    background-size:15px; 
  }
  .cont-partic {
    background: url(${partic}) no-repeat scroll 10px 5px;
    background-color:white;
    background-size:15px;
    
  }
  input {
    width:362px;
    border:1px solid #d2d2d2;
    margin-top:4px;
    font-size:12px;
    font-style:italic;
    
    @media (max-width: 1024px) {
      width:450px;            
    } 
    @media (max-width: 576px) {
        width:280px;            
      } 
  }
  input[type="text"] {
    padding:0.4rem;
    padding-left:2rem;
    outline:none;
  }
  input[type="email"] {
    padding:0.4rem;
    padding-left:2rem;
    outline:none;
  }
  textarea {
    padding:0.4rem;
    margin-top:1.5rem;
    outline:none;
    width:810px;
    font-size:12px;
    font-style:italic;
    padding-left:2.5rem;
    @media (max-width: 1024px) {
      width:450px;            
    } 
    @media (max-width: 576px) {
      width:280px;            
    } 
  }    
`

const ParagraphWrapper = styled.div`
margin:1rem auto 2rem;
font-family:'Montserrat';
font-size:0.8rem;
p {
  font-family:'Montserrat';
  @media (max-width: 576px) {
    width:20rem;            
  } 
}
`


const MessageUser = styled.p`
max-width:320px;
font-size:1.2rem;
font-family:"Montserrat";
`


