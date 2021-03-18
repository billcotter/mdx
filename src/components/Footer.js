import React from "react"
import { Link } from "gatsby"
import SocialLinks from "../constants/socialLinks"
const Footer = () => {
  return (
  <footer className="footer">
    <div>
      <SocialLinks styleClass="footer-icons" />
      <p>
        &copy;{new Date().getFullYear()}  <a href="https://bills-gatsby-mdx.netlify.app/">Bill J. Cotter</a>  All Rights Reserved
      </p>
    </div>
  </footer>
  )
}

export default Footer
