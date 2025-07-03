import React from 'react'
import styles from './Header.module.css'

const Header = ({ title = "To Do List" }) => {
    return (
        <header className={styles.item}>
            <h1>{title}</h1>
        </header>
    )
}

export default Header