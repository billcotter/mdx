import React from "react"
import Hero from "../components/Hero"
import Layout from "../components/Layout"
import Posts from "../components/Posts"
import { graphql } from "gatsby"
//import { RegVideo } from '../components/Complete'
//import { Video} from '../components/Complete'
//...GatsbyImageSharpFluid

const IndexPage = ({ data }) => {
  const {allMdx: {nodes:posts}} =data;
  return (
  <Layout>
    <Hero showPerson /> 
    
    <Posts posts={posts} title="recently published " />
    
  </Layout>
  )
}


export const query = graphql`
  {
    allMdx(sort: {fields: frontmatter___date, order: DESC}, limit: 3) {
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


export default IndexPage
