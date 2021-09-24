import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHtml5 } from "@fortawesome/free-brands-svg-icons"
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons"
import { faSass } from "@fortawesome/free-brands-svg-icons"
import { faJsSquare } from "@fortawesome/free-brands-svg-icons"
import { faReact } from "@fortawesome/free-brands-svg-icons"
import { faNode } from "@fortawesome/free-brands-svg-icons"
import { faDatabase } from "@fortawesome/free-solid-svg-icons"
import { faGitSquare } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import * as styles from "./Skills.module.css"

const Skills = () => {
  return (
    <section className={styles.skills}>
      <div className={styles.skills__wrapper}>
        <h2 className={styles.skills__heading}>Technologies I work with</h2>
        <div className={styles.skills__display}>
          <div className={styles.skills__card}>
            <FontAwesomeIcon
              icon={faHtml5}
              className={styles.skills__cardIcon}
            />
            <h3 className={styles.skills__subheading}>HTML5</h3>
          </div>
          <div className={styles.skills__card}>
            <FontAwesomeIcon
              icon={faCss3Alt}
              className={styles.skills__cardIcon}
            />
            <h3 className={styles.skills__subheading}>CSS3</h3>
          </div>
          <div className={styles.skills__card}>
            <FontAwesomeIcon
              icon={faSass}
              className={styles.skills__cardIcon}
            />
            <h3 className={styles.skills__subheading}>Sass</h3>
          </div>
          <div className={styles.skills__card}>
            <FontAwesomeIcon
              icon={faJsSquare}
              className={styles.skills__cardIcon}
            />
            <h3 className={styles.skills__subheading}>JavaScript</h3>
          </div>
          <div className={styles.skills__card}>
            <FontAwesomeIcon
              icon={faReact}
              className={styles.skills__cardIcon}
            />
            <h3 className={styles.skills__subheading}>React</h3>
          </div>
          <div className={styles.skills__card}>
            <FontAwesomeIcon
              icon={faNode}
              className={styles.skills__cardIcon}
            />
            <h3 className={styles.skills__subheading}>Node</h3>
          </div>
          <div className={styles.skills__card}>
            <FontAwesomeIcon
              icon={faDatabase}
              className={styles.skills__cardIcon}
            />
            <h3 className={styles.skills__subheading}>
              MongoDB <br /> & MySQL
            </h3>
          </div>
          <div className={styles.skills__card}>
            <FontAwesomeIcon
              icon={faGitSquare}
              className={styles.skills__cardIcon}
            />
            <h3 className={styles.skills__subheading}>Git</h3>
          </div>
          <div className={styles.skills__card}>
            <FontAwesomeIcon
              icon={faGithub}
              className={styles.skills__cardIcon}
            />
            <h3 className={styles.skills__subheading}>GitHub</h3>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
