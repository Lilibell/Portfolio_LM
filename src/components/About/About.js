import React from "react"
import * as styles from "./About.module.css"

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.about__wrapper}>
        <h2 className={styles.about__heading}>About me</h2>
        <p className={styles.about__content}>
          It was in my last year at university, studiying to become a B.Sc
          Biology, when I made a decision that was about to change my life. Out
          of pure curiosity I took a bioinformatics course called{" "}
          <span className={styles.about__highlight}>
            "Perl Programming for Biology"
          </span>
          . It was my first encounter with a programming language and I
          immediately fell in love. I fell in love not only with what I was able
          to to with my code, but with the mere process of writing it. With
          running into a ton of problems and overcoming them all. With trying to
          make my code clean, fast and understandable, and with learning how
          things work behind the scene.
        </p>
        <p className={styles.about__content}>
          A few years later, I sat at home with my six month old baby. While I
          loved being her mother, I missed doing things I was passionate about.
          Soon I found myself enrolled in an online Web Development Bootcamp.
          And after completing this first course I knew one thing for sure:{" "}
          <span className={styles.about__highlight}>
            I want to be a Web Developer
          </span>
          .
        </p>
      </div>
    </section>
  )
}

export default About
