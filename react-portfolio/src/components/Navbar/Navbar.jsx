import React from 'react'
import styles from "./Navbar.module.css"


export const Navbar = () => {
  return (

    <nav className={styles.Navbar}>
      <a className={styles.title} href="/">Portfolio</a>
      <div className={styles.menu}>
        <ul className={styles.menuItems}>
          <li>
            <a href="#">About</a>
          </li>
        
          <li>
            <a href="#">Experience</a>
          </li>

          <li>
            <a href="#">Projects</a>
          </li>

          <li>
            <a href="#">Contact</a>
          </li>
        </ul>


      </div>
    </nav>
  )
}
