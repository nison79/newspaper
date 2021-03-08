import * as React from "react"
import './Contact.scss'
import { StaticImage } from 'gatsby-plugin-image'



const Contact = () => {
  return (
    
      <div className="wrapper">
          <article className="content">
              <h2>Contact</h2>
          </article>

            <article className="content">
              
              <p><span>Address:</span> P.Dimitriou 20 Arkadikos Drama/Greece</p>
              <p><span>Email:</span> georgenison@gmail.com</p>
              <p className="social"><span>Social:</span>

                <a target="_blank" 
                    rel="noopener noreferrer" 
                    href="https://www.instagram.com/georgenikoglou/">
                  <StaticImage 
                  src="../images/insta.png" 
                  alt="LinkedIn" 
                  width="30" 
                  className = "logoInsta"
                  />
                </a>


                <a target="_blank" 
                    rel="noopener noreferrer" 
                    href="https://www.linkedin.com/in/george-nikoglou-54b24532/">
                  <StaticImage 
                  src="../images/linkedin.png" 
                  alt="LinkedIn" 
                  width="30"  
                  />
                </a>

                  <a target="_blank" 
                    rel="noopener noreferrer" 
                    href="https://twitter.com/gnikoglou79">
                  <StaticImage 
                  src="../images/twitt.png" 
                  alt="LinkedIn"
                  className = "logotwitter"
                  width="30"
                  height="32"
                  />
                  </a>
                
              </p>
          </article>

      </div>
    
  )
}

export default Contact
