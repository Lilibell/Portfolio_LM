import React from "react"
import * as styles from "./BGWave.module.css"

const BGWave = props => {
  let waveClass

  switch (props.color) {
    case "primary-dark":
      waveClass = `${styles.pathDark}`
      break
    case "secondary-light":
      waveClass = `${styles.pathLight}`
      break
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