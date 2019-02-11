const _ = require('lodash')
const Promise = require('bluebird')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')



// Create pages for docs
exports.createPages = ({ actions, graphql }) => {
	const { createPage } = actions;
	

	// Individual doc and blog pages
	// All in one go
	return graphql(`
		{
			products: allMarkdownRemark(filter: { fileAbsolutePath: {regex : "\/products/"} }) {
          edges {
            node {
              frontmatter {
                slug
              }
            }
          }
        }
			productsHomme: allMarkdownRemark(filter: { fileAbsolutePath: {regex : "\/hommeProduit/"} }) {
				edges {
					node {
						frontmatter {
							slug
						}
					}
				}
			}
			posts: allMarkdownRemark(filter: { fileAbsolutePath: {regex : "\/posts/"} }) {
				edges {
					node {
						frontmatter {
							slug
						}
					}
				}
			}
		}
	`).then(result => {
		if (result.errors) {
			Promise.reject(result.errors);
		}

		// Create product pages
		result.data.products.edges.forEach(({node}) => {
      createPage({
        path: `/produit${node.frontmatter.slug}`,
        component: path.resolve('./src/components/layoutProduct.js'),
        context: {
          slug:node.frontmatter.slug
        }
      });
    })
		// Create productHomme pages
		result.data.productsHomme.edges.forEach(({node}) => {
      createPage({
        path: `/produit${node.frontmatter.slug}`,
        component: path.resolve('./src/components/productHomme.js'),
        context: {
          slug:node.frontmatter.slug
        }
      });
    })
		// Create blog pages
		result.data.posts.edges.forEach(({ node }) => {
			createPage({
        path: `/news${node.frontmatter.slug}`,
        component: path.resolve('./src/components/postPage.js'),
        context: {
          slug:node.frontmatter.slug
        }
      });
		});
	});
};