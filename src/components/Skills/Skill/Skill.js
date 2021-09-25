import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import * as styles from "./Skill.module.css"

const Skill = props => {
  return (
    <div className={styles.skills__card}>
      <FontAwesomeIcon icon={props.icon} className={styles.skills__cardIcon} />
      <h3 className={styles.skills__subheading}>{props.name}</h3>
    </div>
  )
}

export default Skill
