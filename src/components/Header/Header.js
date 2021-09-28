import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import BGWave from "../BGWave/BGWave"
import ScrollAnimation from "react-animate-on-scroll"
import "animate.css/animate.min.css"
import * as styles from "./Header.module.css"

const Header = () => {
  return (
    <header id="a_home" className={styles.header}>
      <ScrollAnimation
        animateIn="animate__fadeIn"
        animateOut="animate__fadeOut"
        style={{ width: "100%" }}
      >
        <div className={styles.header__wrapper}>
          <StaticImage
            src="../../images/limeis2nas.jpg"
            alt="photo Lisa Meister"
            className={styles.header__imageWrapper}
          />
          <div className={styles.header__textWrapper}>
            <h1 className={styles.header__title}>Hello, I'm Lisa</h1>
            <ScrollAnimation
              animateIn="animate__fadeIn"
              animateOnce={true}
              delay={2200}
            >
              <p className={styles.header__content}>
                I'm a{" "}
                <span className={styles.header__highlight}>
                  frontend developer
                </span>{" "}
                based in Schleswig-Holstein, Germany.
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </ScrollAnimation>
      <BGWave
        color="primary-dark"
        path="M0.00,49.99 C131.15,203.77 323.59,-59.70 500.00,49.99 L500.00,150.00 L0.00,150.00 Z"
      />
    </header>
  )
}

export default Header
