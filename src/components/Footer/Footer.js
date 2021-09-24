import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import * as styles from "./Footer.module.css"

const Footer = () => {
  const date = new Date()

  return (
    <footer>
      <div className={styles.footer__social}>
        <a
          href="https://github.com/Lilibell"
          target="_blank"
          alt="Link to my GitHub page"
        >
          <FontAwesomeIcon icon={faGithub} className={styles.footer__icon} />
        </a>
        <a
          href="https://twitter.com/ellimeis"
          target="_blank"
          alt="Link to my Twitter page"
        >
          <FontAwesomeIcon icon={faTwitter} className={styles.footer__icon} />
        </a>
      </div>
      <p className={styles.footer__copyright}>
        &copy; {date.getFullYear()} Lisa Meister
      </p>
    </footer>
  )
}

export default Footer
