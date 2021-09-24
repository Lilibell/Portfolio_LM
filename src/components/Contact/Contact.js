import React from "react"
import BGWave from "../BGWave/BGWave"
import * as styles from "./Contact.module.css"

const Contact = () => {
  return (
    <section className={styles.contact}>
      <div className={styles.contact__wrapper}>
        <h2 className={styles.contact__heading}>Contact</h2>
        <p className={styles.contact__message}>
          Feel free to send me a message if you'd like to talk or work with me!
        </p>
        <form
          action="mailto:lisa.meister.93@gmx.de"
          method="POST"
          encType="multipart/form-data"
          className={styles.contact__form}
          autoComplete="off"
        >
          <div className={styles.contact__formGroup}>
            <label htmlFor="name" className={styles.contact__label}>
              Name
            </label>
            <input
              type="text"
              className={styles.contact__input}
              id="name"
              required
            />
          </div>

          <div className={styles.contact__formGroup}>
            <label htmlFor="email" className={styles.contact__label}>
              E-Mail
            </label>
            <input
              type="email"
              className={styles.contact__input}
              id="email"
              required
            />
          </div>

          <div className={styles.contact__formGroup}>
            <label htmlFor="message" className={styles.contact__label}>
              Message
            </label>
            <textarea
              className={styles.contact__input}
              id="message"
              rows="7"
              cols="50"
              required
            ></textarea>
          </div>

          <div className={styles.contact__buttonWrapper}>
            <button
              type="submit"
              value="submit"
              className={styles.contact__button}
            >
              Nachricht senden
            </button>
          </div>
        </form>
      </div>
      <BGWave
        color="secondary-light"
        path="M0.23,131.74 C139.05,72.52 351.24,70.55 500.22,130.75 L500.00,150.00 L0.00,150.00 Z"
      />
    </section>
  )
}

export default Contact
