import React, { useState } from "react"
import { Link } from "react-scroll"
import * as styles from "./Navbar.module.css"

const Navbar = () => {
  const [isClicked, setIsClicked] = useState("")

  const handleClick = () => {
    if (isClicked === "") {
      setIsClicked(true)
    } else {
      setIsClicked(prevState => !prevState)
    }
    console.log(isClicked)
  }

  const togglerIconClasses = isClicked
    ? `${styles.nav__togglerIcon} ${styles.nav__togglerIconActive}`
    : `${styles.nav__togglerIcon}`

  const getNavListClasses = () => {
    if (isClicked === "") {
      return `${styles.nav__list}`
    } else {
      return `${styles.nav__list} ${
        isClicked ? styles.nav__listOpen : styles.nav__listClosed
      }`
    }
  }

  return (
    <nav className={styles.nav}>
      <div className={styles.nav__wrapper}>
        <Link to="/" className={styles.nav__logo}>
          LM
        </Link>
        <button className={styles.nav__toggler} onClick={handleClick}>
          <span className={togglerIconClasses}></span>
        </button>
      </div>
      <ul className={getNavListClasses()}>
        <li className={styles.nav__listItem}>
          <Link
            to="a_home"
            py={true}
            smooth={true}
            className={styles.nav__link}
            activeClassName={styles.nav__linkActive}
          >
            Home
          </Link>
        </li>
        <li className={styles.nav__listItem}>
          <Link
            to="a_about"
            py={true}
            smooth={true}
            className={styles.nav__link}
            activeClassName={styles.nav__linkActive}
          >
            About
          </Link>
        </li>
        <li className={styles.nav__listItem}>
          <Link
            to="a_projects"
            py={true}
            smooth={true}
            className={styles.nav__link}
            activeClassName={styles.nav__linkActive}
          >
            Projects
          </Link>
        </li>
        <li className={styles.nav__listItem}>
          <Link
            to="a_contact"
            py={true}
            smooth={true}
            className={styles.nav__link}
            activeClassName={styles.nav__linkActive}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
