import React from "react"
import ContactForm from "./ContactForm/ContactForm"
import BGWave from "../BGWave/BGWave"
import ScrollAnimation from "react-animate-on-scroll"
import "animate.css/animate.min.css"
import * as styles from "./Contact.module.css"

const Contact = () => {
  return (
    <section id="a_contact" className={styles.contact}>
      <ScrollAnimation
        animateIn="animate__fadeIn"
        animateOut="animate__fadeOut"
        style={{ width: "100%" }}
      >
        <div className={styles.contact__wrapper}>
          <h2 className={styles.contact__heading}>Contact</h2>
          <p className={styles.contact__message}>
            Feel free to send me a message if you'd like to talk or work with
            me!
          </p>
          <ContactForm />
        </div>
      </ScrollAnimation>
      <BGWave
        color="secondary-light"
        path="M0.23,131.74 C139.05,72.52 351.24,70.55 500.22,130.75 L500.00,150.00 L0.00,150.00 Z"
      />
    </section>
  )
}

export default Contact
