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
          . Perl was my first encounter with a programming language and I
          immediately fell in love with writing code. Afterwards I took a course
          on C++ and deepend my knowledge in Computer Science.
        </p>
        <p className={styles.about__content}>
          Some time later, I sat at home with my six month old baby. While I
          loved being her mother, I missed doing things I was passionate about.
          Soon I found myself enrolled in an online Web Development Bootcamp.
          And after completing this first course I knew one thing for certain:{" "}
          <span className={styles.about__highlight}>
            I will be a Web Developer
          </span>
          .
        </p>
      </div>
    </section>
  )
}

export default About
