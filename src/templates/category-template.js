import React from "react"
import Layout from '../components/Layout'
import Hero from "../components/Hero"
import Posts from "../components/Posts"
import { graphql } from "gatsby"
// ...GatsbyImageSharpFluid

const CategoryTemplate = props => {
  const {data:{categories:{nodes: posts},
},
} = props
  return <Layout>
    <Hero/>
    <Posts posts={posts} />
  </Layout>
}

export const query = graphql `
query GetCategories($category: String) {
  catagories: allMdx(sort: {fields: frontmatter___date, order: DESC}
    filter: {frontmatter: {category: {eq: $category}}}
    ) {
    nodes {
      excerpt
      frontmatter {
        title
        author
        category
        date(formatString: "MMM Do,YYYY")
        slug
        readTime
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      id
    }
  }
}
`
export default CategoryTemplate
