import React from "react"
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
  FaTwitterSquare,
} from "react-icons/fa"
const SocialLinks = ({ styleClass }) => {
  return (
    <ul className={styleClass}>
      <li>
        <a href="https://www.facebook.com/billjcotter/">
          <FaFacebookSquare className="social-icon facebook-icon"></FaFacebookSquare>
        </a>
      </li>
      <li>
      <a href="https://twitter.com/billjcotter">
          <FaTwitterSquare className="social-icon twitter-icon"></FaTwitterSquare>
        </a>
      </li>
      <li>
      <a href="https://www.instagram.com/billcotter/">
          <FaInstagramSquare className="social-icon instagram-icon"></FaInstagramSquare>
        </a>
     </li>
     <li>
       <a href="https://youtube.com/billjcotter">
          <FaYoutubeSquare className="social-icon youtube-icon"></FaYoutubeSquare>
        </a>
      </li>
     
    </ul>
  )
}
export default SocialLinks
