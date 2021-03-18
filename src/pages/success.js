import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
const Success = () => {
  return (
  <Layout>
    <section className="success-page">
      <div className="page-center">
        <h2>Submission recieved!</h2>
        <Link to= "/" className="btn">
          Back to home
        </Link>
      </div>
    </section>
  </Layout>
  )
}

export default Success
