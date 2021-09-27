import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import BGWave from "../BGWave/BGWave"
import ScrollAnimation from "react-animate-on-scroll"
import "animate.css/animate.min.css"
import * as styles from "./Projects.module.css"

const Projects = () => {
  return (
    <section id="a_projects" className={styles.projects}>
      <div className={styles.projects__wrapper}>
        <ScrollAnimation
          animateIn="animate__fadeIn"
          animateOut="animate__fadeOut"
        >
          <h2 className={styles.projects__heading}>Projects</h2>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="animate__fadeInLeft"
          animateOut="animate__fadeOutLeft"
        >
          <div className={styles.project}>
            <div className={styles.project__info}>
              <h3 className={styles.project__name}>SanWiz</h3>
              <hr />
              <p className={styles.project__description}>
                SanWiz is a website made for (german) paramedics. It is a
                collection of currently used emergency drugs and their most
                important traits. It allows paramedics to learn and refresh
                their pharmacy skills from anywhere, anytime. Fully responsive
                and easy to navigate.
              </p>
              <p className={styles.project__tech}>
                Built with: HTML5, CSS3, Sass, Next.js
              </p>
            </div>
            <a
              href="https://sanwiz.vercel.app"
              target="_blank"
              rel="noreferrer"
              alt="Link to SanWiz homepage"
              className={styles.about__link}
            >
              <StaticImage
                src="../../images/SanWiz.png"
                alt="SanWiz homepage"
                className={styles.project__imageWrapper}
              />
            </a>
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="animate__fadeInRight"
          animateOut="animate__fadeOutRight"
        >
          <div className={styles.project}>
            <div className={styles.project__info}>
              <h3 className={styles.project__name}>Hebamme Elena Popova</h3>
              <hr />
              <p className={styles.project__description}>
                Busisness website for a dedicated midwife with her own practice.
              </p>
              <p className={styles.project__tech}>
                Built with: HTML5, CSS3, Sass, JavaScript
              </p>
            </div>
            <a
              href="https://www.hebamme-elena-popova.de"
              target="_blank"
              rel="noreferrer"
              alt="Link to Hebamme Elena Popova homepage"
              className={styles.about__link}
            >
              <StaticImage
                src="../../images/hebamme-elena-popova.png"
                alt="Elena Popova homepage"
                className={styles.project__imageWrapper}
              />
            </a>
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="animate__fadeInLeft"
          animateOut="animate__fadeOutLeft"
        >
          <div className={styles.project}>
            <div className={styles.project__info}>
              <h3 className={styles.project__name}>Todo List</h3>
              <hr />
              <p className={styles.project__description}>
                A Todo List with the functionallities add, check, delete, drag &
                drop, filter and change themes.
              </p>
              <p className={styles.project__tech}>
                Built with: HTML5, CSS3, JavaScript
              </p>
            </div>
            <a
              href="https://frontend-mentor-todo-app-challenge.vercel.app/"
              target="_blank"
              rel="noreferrer"
              alt="Link to Todo List"
              className={styles.about__link}
            >
              <StaticImage
                src="../../images/todo-list-prev.png"
                alt="Todo List"
                className={styles.project__imageWrapper}
              />
            </a>
          </div>
        </ScrollAnimation>
      </div>
      <BGWave
        color="primary-dark"
        path="M0.00,49.99 C131.15,203.77 323.59,-59.70 500.00,49.99 L500.00,150.00 L0.00,150.00 Z"
      />
    </section>
  )
}

export default Projects
