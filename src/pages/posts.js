import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import { graphql } from "gatsby"
import Posts from "../components/Posts"
// ...GatsbyImageSharpFluid

const PostsPage = ({data}) => {
  const {allMdx:{nodes:posts}} = data;
  return (
    <Layout>
      <Hero />
      <Posts posts={posts} title="all posts" />
  </Layout>
  )
}

export const query = graphql`
  {
    allMdx(sort: {fields: frontmatter___date, order: DESC}, limit: 10) {
      nodes {
        excerpt
        frontmatter {
          author
          category
          date(formatString: "MMM Do, YYYY")
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          readTime
          slug
          title
        }
        id
      }
    }
  }
`

export default PostsPage
