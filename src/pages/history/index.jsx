import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import Post from '../../components/Post'
import Sidebar from '../../components/Sidebar'

class HistoryIndexRoute extends React.Component {
  render() {
    const items = []
    const { title, subtitle } = this.props.data.site.siteMetadata
    const { allMarkdownRemark } = this.props.data;
    const posts = allMarkdownRemark ? allMarkdownRemark.edges : null
    if(posts)
      posts.forEach(post => {
        items.push(<Post data={post} key={post.node.fields.slug} />)
      })

    return (
      <Layout>
        <div>
          <Helmet>
            <title>{title}</title>
            <meta name="description" content={subtitle} />
          </Helmet>
          <Sidebar {...this.props} />
          <div className="content">
            <div className="content__inner">{items}</div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default HistoryIndexRoute

export const pageQuery = graphql`
  query HistoryIndexRoute {
    site {
      siteMetadata {
        title
        subtitle
        copyright
        menu {
          label
          path
        }
        author {
          name
          email
          telegram
          twitter
          github
          rss
          vk
        }
      }
    }
    allMarkdownRemark(
      limit: 1000
      filter: { frontmatter: { layout: { eq: "post" }, category: { eq: "history" } } }
    ) {
      edges {
        node {
          fields {
            slug
            categorySlug
          }
          frontmatter {
            title
            date
            category
            description
          }
        }
      }
    }
  }
`
