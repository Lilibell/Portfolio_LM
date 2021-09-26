import React from "react"
import Skill from "./Skill/Skill"
import { faHtml5 } from "@fortawesome/free-brands-svg-icons"
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons"
import { faSass } from "@fortawesome/free-brands-svg-icons"
import { faJsSquare } from "@fortawesome/free-brands-svg-icons"
import { faReact } from "@fortawesome/free-brands-svg-icons"
import { faNode } from "@fortawesome/free-brands-svg-icons"
import { faDatabase } from "@fortawesome/free-solid-svg-icons"
import { faGitSquare } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import ScrollAnimation from "react-animate-on-scroll"
import "animate.css/animate.min.css"
import * as styles from "./Skills.module.css"

const Skills = () => {
  return (
    <>
      <section className={styles.skills}>
        <ScrollAnimation
          animateIn="animate__fadeIn"
          animateOut="animate__fadeOut"
        >
          <div className={styles.skills__wrapper}>
            <h2 className={styles.skills__heading}>Technologies I work with</h2>
            <div className={styles.skills__display}>
              <Skill icon={faHtml5} name="HTML5" />
              <Skill icon={faCss3Alt} name="CSS3" />
              <Skill icon={faSass} name="Sass" />
              <Skill icon={faJsSquare} name="JavaScript" />
              <Skill icon={faReact} name="React" />
              <Skill icon={faNode} name="Node" />
              <Skill icon={faDatabase} name="MongoDB & MySQL" />
              <Skill icon={faGitSquare} name="Git" />
              <Skill icon={faGithub} name="GitHub" />
            </div>
          </div>
        </ScrollAnimation>
      </section>
    </>
  )
}

export default Skills
