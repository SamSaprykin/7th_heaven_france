import React from 'react'
import Layout from '../components/Layout'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from "gatsby"
import Helmet from 'react-helmet'

const Listing_Query = graphql`
    query BlogPostListing {
        allMarkdownRemark(limit:10,sort:{
        order: DESC
        fields:[frontmatter___date]
        },filter:{ fileAbsolutePath: {regex : "\/posts/"} }) {
        totalCount
        edges {
        node {
            excerpt
            frontmatter {
            title
            slug
            date
            featuredImage {
                childImageSharp{
                    sizes(maxWidth: 700) {
                        ...GatsbyImageSharpSizes
                    }
                }
            }
            }        
          }
        }
      }
    }
`

const News = (location) => (
    <Layout location={location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: "Les news"}]}
          title="7th Heaven - News"
          />
        <NewsWrapper>
            <StaticQuery
            query={Listing_Query}
            render={({allMarkdownRemark}) => (
                allMarkdownRemark.edges.map(({node}) => (                      
                        <Post key= {node.frontmatter.slug}>
                            <DateWrapper>
                                <p>{node.frontmatter.date}</p>
                            </DateWrapper>
                            <ContentWrapper>
                                <Img sizes={node.frontmatter.featuredImage.childImageSharp.sizes} />
                                <Link to={`/news${node.frontmatter.slug}`}>
                                    <h2>{node.frontmatter.title}</h2>
                                </Link>
                                
                                <Excerpt>{node.excerpt}</Excerpt>
                                <Link className="read-more" to={`/news${node.frontmatter.slug}`}>Lire la suite...</Link>
                            </ContentWrapper>    
                        </Post>
                ))
            )}
            /> 
        </NewsWrapper>
    </Layout>
    
)

export default News


const NewsWrapper = styled.div`
display:-webkit-box;
display:-ms-flexbox;
display:flex;
-webkit-box-orient:vertical;
-webkit-box-direction:normal;
-ms-flex-direction:column;
        flex-direction:column;
margin-top:10rem;
max-width:1200px ;
margin:0 auto;
`

const Post = styled.article`

padding:1rem;
border-radius:4px;
margin:5rem 0;
margin-top:8rem;
display:-webkit-box;
display:-ms-flexbox;
display:flex;
-webkit-box-orient:horizontal;
-webkit-box-direction:normal;
-ms-flex-direction:row;
        flex-direction:row;
-webkit-box-pack: start;
-ms-flex-pack: start;
        justify-content: start;
@media (max-width: 992px) {
    -webkit-box-orient:vertical;
    -webkit-box-direction:normal;
        -ms-flex-direction:column;
            flex-direction:column;      
}
`

const Excerpt = styled.p`
max-width:40rem;
font-family: "Helvetica Neue";
text-align:justify;
`

const DateWrapper = styled.div`
margin-top:8rem;
max-width:100px;
@media (max-width: 992px) {
    width:150px;
    text-align:center;      
}
text-align:center;
font-family: "Helvetica Neue";
font-style:italic;
`

const ContentWrapper = styled.div`    
margin-left:15rem;
text-align:center;
min-width:600px;
@media (max-width: 992px) {
    margin-left:0;
    min-width:400px;      
}
h2 {
    color:black;
    margin-top:2.8rem;
}
a {
    color:black;
    text-decoration:none;
    font-family:'Montserrat';
    font-weight:600;
    margin-top:2rem; 
}
`







