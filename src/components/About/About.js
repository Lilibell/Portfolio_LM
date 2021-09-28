import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import ScrollAnimation from "react-animate-on-scroll"
import "animate.css/animate.min.css"
import * as styles from "./About.module.css"

const About = () => {
  return (
    <section id="a_about" className={styles.about}>
      <ScrollAnimation
        animateIn="animate__fadeIn"
        animateOut="animate__fadeOut"
      >
        <div className={styles.about__wrapper}>
          <h2 className={styles.about__heading}>About me</h2>
          <p className={styles.about__content}>
            It was in my last year at university studiying to become a B.Sc
            Biology, when I made a decision that was about to change my life.
            Out of pure curiosity I took a bioinformatics course called{" "}
            <span className={styles.about__highlight}>
              "Perl Programming for Biology"
            </span>
            . Perl was my first encounter with a programming language and I
            immediately fell in love with writing code. After that I took a
            course on C++ and deepend my knowledge in Computer Science.
          </p>
          <p className={styles.about__content}>
            Some time later, I sat at home with my six month old baby. Though I
            loved being her mother, I missed doing things I was passionate
            about. Soon I found myself enrolled in an online Web Development
            Bootcamp. And after completing this first course I knew one thing
            for certain:{" "}
            <span className={styles.about__highlight}>
              I will be a web developer
            </span>
            .
          </p>
        </div>
      </ScrollAnimation>
      <ScrollAnimation animateIn="animate__fadeIn">
        <StaticImage
          src="../../images/undraw_fixing_bugs_w7gi.svg"
          alt="woman with devices illustrations"
          className={styles.about__imageWrapper}
          imgClassName={styles.about__image}
        />
      </ScrollAnimation>
    </section>
  )
}

export default About
