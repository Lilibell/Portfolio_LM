import React, { useState } from "react"
import axios from "axios"
import * as styles from "./ContactForm.module.css"

const ContactForm = () => {
  const [messageSent, setMessageSent] = useState(false) // Message delivered show/hide
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  })

  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    })
    if (ok) {
      form.reset()
    }
  }
  const handleOnSubmit = e => {
    e.preventDefault()
    const form = e.target
    setServerState({ submitting: true })
    axios({
      method: "post",
      url: "https://getform.io/f/98820d3e-80e7-4bc2-860c-1c4a96328917",
      data: new FormData(form),
    })
      .then(r => {
        setMessageSent(true)
        handleServerResponse(true, "Thanks!", form)
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form)
      })
  }

  return (
    <form onSubmit={handleOnSubmit} className={styles.contact__form}>
      <div className={styles.contact__formGroup}>
        <label htmlFor="name" className={styles.contact__label}>
          Name
        </label>
        <input
          type="text"
          className={styles.contact__input}
          id="name"
          name="name"
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
          name="email"
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
          name="message"
          rows="7"
          cols="50"
          required
        ></textarea>
      </div>

      {messageSent && (
        <p className={styles.contact__messageSent}>Message delivered!</p>
      )}

      <div className={styles.contact__buttonWrapper}>
        <button type="submit" value="submit" className={styles.contact__button}>
          Send message
        </button>
      </div>
    </form>
  )
}

export default ContactForm
