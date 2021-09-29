import React from "react"
import * as styles from "./BGWave.module.css"

// Wavy section transition, color change with props

const BGWave = props => {
  let waveClass

  switch (props.color) {
    case "primary-dark":
      waveClass = `${styles.pathDark}`
      break
    case "primary-light":
      waveClass = `${styles.pathLightP}`
      break
    case "secondary-light":
      waveClass = `${styles.pathLightS}`
      break
    default:
      waveClass = ""
  }

  return (
    <div className={styles.wrapper}>
      <svg
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
        className={styles.svg}
      >
        <path d={props.path} className={waveClass}></path>
      </svg>
    </div>
  )
}

export default BGWave
