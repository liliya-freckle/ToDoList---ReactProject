import React from 'react'
import { Link } from 'react-router-dom'
import styles from './navBar.module.css'

const NavBar = () => {
    return (
        <div>
            <Link to="/" className={styles.link}>Home</Link>
            <Link to="/login" className={styles.link}>Login</Link>
            <Link to="/news" className={styles.link}>News</Link>
        </div>
    )
}

export default NavBar